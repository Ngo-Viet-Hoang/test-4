import React, { useState } from "react";
import "antd/dist/antd.css";
import { DownOutlined } from "@ant-design/icons";
import { Badge, Dropdown, Menu, Space, Table } from "antd";
import orderService from "../../Service/OrderService";
import { useEffect } from "react";

const menu = (
  <Menu
    items={[
      {
        key: "1",
        label: "Action 1"
      },
      {
        key: "2",
        label: "Action 2"
      }
    ]}
  />
);

const Test = () => {
  const [orderList, setOderList] = useState([]);


  const columns1 = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',


    },
    {
      title: "quantity",
      dataIndex: "quantity",
      key: "quantity"
    },
    {
      title: "unitPrice",
      dataIndex: "unitPrice",
      key: "unitPrice"
    },
  ];

  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Full Name',
      dataIndex: 'fullName',
      key: 'fullName',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Note',
      dataIndex: 'note',
      key: 'note',
    },
    {
      title: "totalPrice",
      dataIndex: "totalPrice",
      key: "totalPrice"
    },
    {
      title: "createdAt",
      dataIndex: "createdAt",
      key: "createdAt"
    },
    {
      title: "Action",
      key: "operation",
      render: () => <a>Publish</a>
    }
  ];

  const data = []
  for (let i = 0; i < orderList.length; ++i) {
    data.push({
      key: orderList[i].id.toString(),
      id: orderList[i].id,
      name: orderList[i].fullName,
      phone: orderList[i].phone,
      note: orderList[i].note,
      totalPrice: orderList[i].totalPrice,
      status: orderList[i].status,
      createdAt: orderList[i].createdAt,
      orderDetails: orderList[i].orderDetails,
      


    });
  }


  data.map(item => {
    item.key = item.id
  })
  useEffect(() => {
    getOrderList();
  }, [])

  const getOrderList = async () => {
    await orderService
      .getOrderList()
      .then((res) => {
        setOderList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }


  return (
    <>
      <Table
        columns={columns}
        expandable={{
          expandedRowRender: record => (
            <Table columns={columns1} dataSource={record.orderDetails} pagination={false} />
          ),
          defaultExpandedRowKeys: ["0"]
        }}
        dataSource={data}
      />
    </>
  );
};

export default Test;
