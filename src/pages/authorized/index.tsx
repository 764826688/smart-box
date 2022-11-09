import * as React from 'react';
import { Redirect } from 'umi';
import { getLocalStorageItem } from '../../utils/storage';

const Authorized = (props: any) => {
  const token = getLocalStorageItem('token');
  if (!token) {
    return <Redirect to="/common/login" />;
  }
  return <>{props.children}</>;
};

export default Authorized;
