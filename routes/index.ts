import React from 'react';
import { IRoute } from '@umijs/core';
import { Route } from '@ant-design/pro-layout/es/typings.d';

export const hasGrantRoutes: Omit<IRoute, 'routes'> &
  Omit<Route, 'routes'> & { routes?: Route & IRoute[] } = {
  path: '/',
  component: '@/layouts/baseLayout',
  routes: [
    {
      path: '/',
      redirect: '/systemManage/accountSetting',
    },
    {
      path: '/systemManage',
      name: '账号管理',
      icon: 'icon-chakan',
      hideInBreadcrumb: true,
      routes: [
        {
          path: '/systemManage/accountSetting',
          name: '账号配置',
          component: '@/pages/systemManage/accountSetting',
        },
      ],
    },
    {
      path: '/basicSetting',
      name: '基础配置',
      hideInBreadcrumb: true,
      routes: [
        {
          path: '/basicSetting/videoEquipment',
          name: '视频设备',
          component: '@/pages/basicSetting/videoEquipment',
        },
      ],
    },
  ], // 系统内有权限的菜单
};

const routes: IRoute[] = [
  {
    path: '/',
    component: '@/layouts',
    routes: [
      {
        path: '/common',
        component: '@/pages/common',
        routes: [
          {
            path: '/common',
            redirect: '/common/login',
          },
          {
            path: '/common/login',
            component: '@/pages/common/login',
          },
        ],
      },
      {
        path: '/404',
        component: '@/pages/404',
      },
      {
        path: '/',
        component: '@/pages/authorized',
        routes: [hasGrantRoutes],
      },
    ],
  },
];

export default routes;
