import { DownOutlined } from '@ant-design/icons';
import { Badge, Dropdown, Menu, Space, Table } from 'antd';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import orderService from '../../Service/OrderService';
const menu = (
  <Menu
    items={[
      {
        key: '1',
        label: 'Action 1',
      },
      {
        key: '2',
        label: 'Action 2',
      },
    ]}
  />
);

const Test = () => {
    const [orderList, setOderList] = useState([]);
  const expandedRowRender = () => {
    const columns = [
      {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
      },
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Status',
        key: 'state',
        render: () => (
          <span>
            <Badge status="success" />
            Finished
          </span>
        ),
      },
      {
        title: 'Upgrade Status',
        dataIndex: 'upgradeNum',
        key: 'upgradeNum',
      },
      {
        title: 'Action',
        dataIndex: 'operation',
        key: 'operation',
        render: () => (
          <Space size="middle">
            <a>Pause</a>
            <a>Stop</a>
            <Dropdown overlay={menu}>
              <a>
                More <DownOutlined />
              </a>
            </Dropdown>
          </Space>
        ),
      },
    ];
    const data = [];

    for (let i = 0; i < 3; ++i) {
      data.push({
        key: i.toString(),
        date: '2014-12-24 23:12:00',
        name: 'This is production name',
        upgradeNum: 'Upgraded: 56',
      });
    }

    return <Table columns={columns} dataSource={data} pagination={false} />;
  };

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
        title: 'Total Price',
        dataIndex: 'totalPrice',
        key: 'totalPrice',
    },
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
    },
    {
        title: 'CreateAt',
        dataIndex: 'createdAt',
        key: 'createdAt',
    },

];

  const data = [];

  for (let i = 0; i < 3; ++i) {
    data.push({
      key: i.toString(),
      name: 'Screem',
      platform: 'iOS',
      version: '10.3.4.5654',
      upgradeNum: 500,
      creator: 'Jack',
      createdAt: '2014-12-24 23:12:00',
    });
  }
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
          expandedRowRender,
          defaultExpandedRowKeys: ['0'],
        }}
        dataSource={data}
      />
    
    </>
  );
};

export default Test;
