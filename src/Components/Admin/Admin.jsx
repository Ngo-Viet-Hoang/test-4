// import { Link } from 'react-router-dom';
// import "./Admin.css";
// import 'antd/dist/antd.css';
// import {
//   DesktopOutlined,
//   FileOutlined,
//   PieChartOutlined,
//   TeamOutlined,
//   UserOutlined,
// } from '@ant-design/icons';
// import { Breadcrumb, Layout, Menu } from 'antd';
// import React, { useState } from 'react';
// import AddFood from "../AddFood";
// // import Sidebar from './Sidebar';
// import Manager from './Layout';
// const { Header, Content, Footer, Sider } = Layout;


// function getItem(label, key, icon, children) {
//   return {
//     key,
//     icon,
//     children,
//     label,
//   };
// }

// const items = [
//   getItem('Food', '1', <PieChartOutlined />,),
//   getItem('Option 2', '2', <DesktopOutlined />),
//   getItem('User', 'sub1', <UserOutlined />, [
//     getItem('Tom', '3'),
//     getItem('Bill', '4'),
//     getItem('Alex', '5'),
//   ]),
//   getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
//   getItem('Files', '9', <FileOutlined />),
// ];
// //   const items = [
// //     {
// //         key: "home",
// //         icon: <PieChartOutlined />,
// //         title: "Trang chủ",
// //         link: "/"
// //     },
// //     {
// //         key: "userManagement",
// //         title: "Admin",
// //         children: [
// //             {
// //                 key: "myinfo",
// //                 icon: <DesktopOutlined />,
// //                 title: "Thông tin cá nhân",
// //                 link: "./MyInfo"
// //             },
// //             {
// //                 key: "newsManager",
// //                 icon: <FileSearchOutlined />,
// //                 title: "Quản lý tin tức",
// //                 link: "./NewsManager"
// //             },
// //             {
// //                 key: "usersManager",
// //                 icon: <TeamOutlined />,
// //                 title: "Quản lý người dùng",
// //                 link: "./UsersManager"
// //             },
// //             {
// //                 key: "form",
// //                 icon: <FormOutlined />,
// //                 title: "Đăng tin",
// //                 link: "./CreateNewsForm"
// //             },
// //         ]
// //     },
// // ];

// const Admin = () => {
//   const [collapsed, setCollapsed] = useState(false);
//   return (
//     <Layout
//       style={{
//         minHeight: '100vh',
//       }}
//     >
//       <Manager />
//       <Layout className="site-layout">
//         <Header
//           className="site-layout-background"
//           style={{
//             padding: 0,
//           }}
//         />
//         <Content
//           style={{
//             margin: '0 16px',
//           }}
//         >
//           <Breadcrumb
//             style={{
//               margin: '16px 0',
//             }}
//           >
//             <Breadcrumb.Item>User</Breadcrumb.Item>
//             <Breadcrumb.Item>Bill</Breadcrumb.Item>
//             <Breadcrumb.Item>User</Breadcrumb.Item>
//           </Breadcrumb>
//           <div
//             className="site-layout-background"
//             style={{
//               padding: 24,
//               minHeight: 360,
//             }}
//           >
//             Bill is a cat.
//           </div>
//         </Content>
//         <Footer
//           style={{
//             textAlign: 'center',
//           }}
//         >
//           Ant Design ©2018 Created by Ant UED
//         </Footer>
//       </Layout>
//     </Layout>
//   );
// };

// export default Admin;