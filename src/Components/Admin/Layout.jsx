import { Layout } from 'antd';
import { PageHeader, Descriptions, Button } from 'antd';
import 'antd/dist/antd.css';
import "../../index.css"
import { Outlet } from 'react-router-dom';
import ManagerSidebar from './ManagerSidebar';



const { Content, Footer, Header } = Layout;

const Manager = () => {
    return (
        <div>
            <Layout style={{ minHeight: '100vh' }}>
                <ManagerSidebar />
                <Layout className="site-layout">
                    <div className="site-page-header-ghost-wrapper">
                        <PageHeader
                            ghost={false}
                            onBack={() => window.history.back()}
                            title="Title"
                            subTitle="This is a subtitle"
                            extra={[
                                <Button key="3">Operation</Button>,
                                <Button key="2">Operation</Button>,
                                <Button key="1" type="primary">
                                    Primary
                                </Button>,
                            ]}
                        >
                            <Descriptions size="small" column={3}>
                                <Descriptions.Item label="Created">Lili Qu</Descriptions.Item>
                                <Descriptions.Item label="Association">
                                    <a>421421</a>
                                </Descriptions.Item>
                                <Descriptions.Item label="Creation Time">2017-01-10</Descriptions.Item>
                                <Descriptions.Item label="Effective Time">2017-10-10</Descriptions.Item>
                                <Descriptions.Item label="Remarks">
                                    Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
                                </Descriptions.Item>
                            </Descriptions>
                        </PageHeader>
                    </div>
                    <Content style={{ margin: '0 16px' }}>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                            <Outlet />
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Metaway Hoding ©2018 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        </div>
    )
}

export default Manager