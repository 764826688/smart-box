import React, { useEffect, useMemo, useState } from 'react';
import { ConfigProvider } from 'antd';
import routes from '../../routes';
import { history, Redirect } from 'umi';
import zhCN from 'antd/lib/locale/zh_CN';

export default function Layout(props: React.PropsWithChildren<{}>) {
  const [isValidPage, setIsValidPage] = useState(true);
  // 获取当前页面的有效性
  const getCurrentPathnameValidity = (pathname: string) => {
    let _routes = routes,
      hasSamePath = false;
    while (_routes.length) {
      const subRoutes: typeof routes = [];
      hasSamePath = _routes.some((route) => {
        subRoutes.push(...(route.routes || []));
        return route.path === pathname;
      });
      _routes = subRoutes;
      if (hasSamePath) _routes = [];
    }
    return hasSamePath;
  };
  useEffect(() => {
    history.listen((listener) => {
      const pathname = listener.pathname;
      const isValidPathname = getCurrentPathnameValidity(pathname);
      // 每次路由切换，判断页面是否存在
      setIsValidPage(isValidPathname);
    });
  }, []);
  if (!isValidPage) return <Redirect to="/404"></Redirect>;
  return <ConfigProvider locale={zhCN}>{props.children}</ConfigProvider>;
}
