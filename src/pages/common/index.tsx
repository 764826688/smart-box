import React, { Children, useEffect } from 'react';
import './index.less';

const CommonLayout = (props: any) => {
  useEffect(() => {}, []);
  useEffect(() => {
    document.title = 'AI设备配置平台';
  }, []);
  return (
    <div className="common-layout">
      <div className="common-head">
        <span className="t">{'AI设备配置平台'}</span>
      </div>
      <div className="common-main">{props.children}</div>
    </div>
  );
};

export default CommonLayout;
