import { DownOutlined } from '@ant-design/icons';
import { Badge, Dropdown, Menu, Space, Table } from 'antd';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import orderSercive from '../../Service/OrderService';


const OrderList = () => {
    const [orderList, setOderList] = useState([]);
    // const [orderDetail, setOrderDetail] = useState([]);




    const expandedRowRender = (list) => {

        console.log("list", list);
        const columns = [

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
                title: 'Quantity',
                dataIndex: 'quantity',
                key: 'quantity',

            },
            {
                title: 'UnitPrice',
                dataIndex: 'unitPrice',
                key: 'unitPrice',

            },


        ];
        const data = [];

        for (let i = 0; i < list.orderDetails.length; ++i) {

            console.log("ist.orderDetails", list.orderDetails[i]);
            data.push({
                key: list.orderDetails[i].orderDetailId.id,
                name: list.orderDetails[i].food.name,
                image: <img src={list.orderDetails[i].food.image} style={{ width: '300px' }} />,
                quantity: list.orderDetails[i].quantity,
                unitPrice: list.orderDetails[i].unitPrice,

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



    useEffect(() => {
        getOrderList();
    }, [])

    const getOrderList = async () => {
        await orderSercive
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
                dataSource={orderList.content}
            />
        </>
    );
};

export default OrderList;
// import { DownOutlined } from '@ant-design/icons';
// import { Badge, Dropdown, Menu, Space, Table } from 'antd';
// import React from 'react';
// import { useEffect } from 'react';
// import { useState } from 'react';
// import orderSercive from '../../Service/OrderService';


// const OrderList = () => {
//     const [orderList, setOderList] = useState([]);
//     // const [orderDetail, setOrderDetail] = useState([]);




//     const expandedRowRender = (list) => {

//         console.log("list", list);
//         const columns = [

//             {
//                 title: 'Name',
//                 dataIndex: 'name',
//                 key: 'name',
//             },
//             {
//                 title: 'Image',
//                 dataIndex: 'image',
//                 key: 'image',


//             },
//             {
//                 title: 'Quantity',
//                 dataIndex: 'quantity',
//                 key: 'quantity',

//             },
//             {
//                 title: 'UnitPrice',
//                 dataIndex: 'unitPrice',
//                 key: 'unitPrice',

//             },


//         ];
//         const data = [];


//         for (let i = 0; i < 3; ++i) {

//             data.push({
//                 // key: list[i].id,
//                 //name: list[i].orderDetails[j].food.name,
//                 // image: <img src={list.orderDetails[i].food.image} style={{ width: '300px' }} />,
//                 // quantity: list.orderDetails[i].quantity,
//                 // unitPrice: list.orderDetails[i].unitPrice,

//             });


//         }

//         return <Table columns={columns} dataSource={data} pagination={false} />;
//     };
//     const data = [];
//     for (let i = 0; i < orderList.length; ++i) {
//         data.push({
//             key: i.toString(),
//             id: orderList[i].id,
//             name: orderList[i].fullName,
//             phone: orderList[i].phone,
//             note: orderList[i].note,
//             totalPrice: orderList[i].totalPrice,
//             status: orderList[i].status,
//             createdAt: orderList[i].createdAt,


//         });
//     }

//     const columns = [
//         {
//             title: 'id',
//             dataIndex: 'id',
//             key: 'id',
//         },
//         {
//             title: 'Full Name',
//             dataIndex: 'fullName',
//             key: 'fullName',
//         },
//         {
//             title: 'Phone',
//             dataIndex: 'phone',
//             key: 'phone',
//         },
//         {
//             title: 'Note',
//             dataIndex: 'note',
//             key: 'note',
//         },
//         {
//             title: 'Total Price',
//             dataIndex: 'totalPrice',
//             key: 'totalPrice',
//         },
//         {
//             title: 'Status',
//             dataIndex: 'status',
//             key: 'status',
//         },
//         {
//             title: 'CreateAt',
//             dataIndex: 'createdAt',
//             key: 'createdAt',
//         },

//     ];



//     useEffect(() => {
//         getOrderList();
//     }, [])

//     const getOrderList = async () => {
//         await orderSercive
//             .getOrderList()
//             .then((res) => {
//                 setOderList(res.data);
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     }



//     return (
//         <>
//             <Table
//                 columns={columns}
//                 expandable={{
//                     expandedRowRender,
//                     defaultExpandedRowKeys: ['0'],
//                 }}
//                 dataSource={data}
//             />
//         </>
//     );
// };

// export default OrderList;