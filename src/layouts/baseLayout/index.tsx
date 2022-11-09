import React, { useEffect, useState } from 'react';
import { PageContainer, ProLayout } from '@ant-design/pro-components';
import { history } from 'umi';
import { Dropdown, Divider, Space } from 'antd';
import { hasGrantRoutes } from '../../../routes';
import { UserOutlined, LogoutOutlined, DownOutlined } from '@ant-design/icons';
import './index.less';
import { clearLocalStorageItem } from '@/utils/storage';

export default function BaseLayout(props: React.PropsWithChildren<{}>) {
  const [equipmentList, setEquipmentList] = useState([
    {
      label: '3rd menu item（disabled）',
      key: '3',
    },
  ]);
  const toLogin = () => {
    clearLocalStorageItem();
    history.push('/common/login');
  };

  return (
    <div className="base-layout-wrap">
      <ProLayout
        location={{ pathname: history.location.pathname }}
        avatarProps={{
          shape: 'square',
          style: { width: 'auto', fontSize: '14px', color: '#595959' },
          src: (
            <Dropdown
              placement="bottom"
              menu={{
                items: [
                  {
                    label: (
                      <>
                        <LogoutOutlined
                          style={{ fontSize: '14px', marginRight: '8px' }}
                          className="logout-icon"
                        />
                        退出登录
                      </>
                    ),
                    key: '1',
                    onClick: () => {
                      toLogin();
                    },
                  },
                ],
              }}
            >
              <div className="avatar-wrap">
                <UserOutlined style={{ marginRight: '10px' }} />
                user
              </div>
            </Dropdown>
          ),
        }}
        layout="mix"
        route={hasGrantRoutes}
        menuItemRender={(item, dom) => {
          return (
            <a key={item.path} onClick={() => history.push(item.path || '/')}>
              {dom}
            </a>
          );
        }}
        iconfontUrl={require('@/components/IconFont/iconfont.js')}
        headerContentRender={() => {
          return (
            <div className="header-content">
              <Divider
                style={{
                  height: '1.5em',
                  backgroundColor: '#dfdfdf',
                }}
                type="vertical"
              />
              <Dropdown menu={{ items: equipmentList }}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    Hover me
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
            </div>
          );
        }}
        headerTitleRender={(logo, title, _) => {
          const defaultDom = (
            <a>
              {logo}
              {title}
            </a>
          );
          if (document.body.clientWidth < 1400) {
            return defaultDom;
          }
          if (_.isMobile) return defaultDom;
          return <>{defaultDom}</>;
        }}
      >
        <PageContainer style={{ overflowX: 'auto' }}>
          {props.children}
        </PageContainer>
      </ProLayout>
    </div>
  );
}
