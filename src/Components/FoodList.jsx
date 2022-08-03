
import { Button, Form, Input, InputNumber, Popconfirm, Table, Typography } from 'antd';
import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import foodService from '../Service/FoodService';

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};


const FoodList = () => {
  const [foodList, setFoodList] = useState([]);
  const [form] = Form.useForm();
  // const [data, setData] = useState();
  const [editingKey, setEditingKey] = useState('');

  const isEditing = (record) => record.key === editingKey;

  const edit = (record) => {
    form.setFieldsValue({
      id: '',
      name: '',
      image: '',
      price: '',
      ...record,
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey('');
  };

  useEffect(() => {
    getFoodList();
  }, [])

  useEffect(() => {
    console.log(foodList, 'foodList');
  }, [foodList])

  const getFoodList = async () => {
    await foodService
      .getFoodList()
      .then((res) => {
        setFoodList(res.data);
        console.log("999999999999999", res.data)
      })
      .catch((err) => {
        console.log(err);
      });

  }


  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...foodList];
      const index = newData.findIndex((item) => key === item.key);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setFoodList(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setFoodList(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      width: '2%',
      editable: true,
    },
    {
      title: 'name',
      dataIndex: 'name',
      width: '10%',
      editable: true,
    },
    {
      title: 'image',
      dataIndex: 'image',
      width: '15%',
      editable: true,
      render: (image) => <img src={image} style={{ width: '300px' }} />
    },
    {
      title: 'description',
      dataIndex: 'description',
      width: '20%',
      editable: true,
    },
    {
      title: 'price',
      dataIndex: 'price',
      width: '20%',
      editable: true,
    },
    {
      title: 'category',
      dataIndex: 'category',
      width: '20%',
      editable: true,
      render: (category) => (<>{category.name}</>)
    },
    {
      title: 'status',
      dataIndex: 'status',
      width: '10%',
      editable: true,
    },
    {
      title: 'operation',
      dataIndex: 'id',
      render: (id, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Link to={`/details/${id}`}>
              <button >Details</button>
            </Link>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <button>Cancel</button>
            </Popconfirm>
            <Typography.Link
              style={{
                marginLeft: 8,
              }}
            >
              <a >Delete</a>
            </Typography.Link>
          </span>
        ) : (
          <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
            Edit
          </Typography.Link>
        )

      },

    },
  ];
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === 'age' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  console.log(foodList);

  return (
    <Form form={form} component={false}>

      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={foodList.Pageable?.content}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
        }}
      />
      {/* {foodList.Pageable?.content.map((item) => (
        <ul>
          <li>{item.id}</li>
          <li>{item.name}</li>
          <li>{item.price}</li>
          <li>{item.status}</li>
          <li>{item.image}</li>
        </ul>

      ))} */}
    </Form>
  );
};


export default FoodList;