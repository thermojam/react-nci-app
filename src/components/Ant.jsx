import React, {useState} from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import {Button, Layout, Menu, theme} from 'antd';

const {Header, Sider, Content} = Layout;

export const Ant = () => {

    const [collapsed, setCollapsed] = useState(false);
    const {
        token: {borderRadiusLG},
    } = theme.useToken();

    return (
        <Layout style={{height: '95vh'}}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical"/>
                <Menu
                    styles={{
                        margin: 2
                    }}
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <UserOutlined/>,
                        },
                        {
                            key: '2',
                            icon: <VideoCameraOutlined/>,
                        },
                        {
                            key: '3',
                            icon: <UploadOutlined/>,
                        },
                    ]}
                />
            </Sider>
            <Layout>
                <Header style={{padding: 0, background: '#001628'}}>
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                            color: 'white',
                        }}
                    />
                </Header>
                <Content
                    style={{
                        margin: '10px 10px',
                        padding: 24,
                        background: '#1876d2',
                        borderRadius: borderRadiusLG,
                    }}
                >
                </Content>
            </Layout>
        </Layout>
    );
};

