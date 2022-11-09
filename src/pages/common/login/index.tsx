import * as React from 'react';
import { Form, Input, Button, Spin } from 'antd';
import userImg from '@/assets/images/user_img.png';
import codeImg from '@/assets/images/code_img.png';
import pswordImg from '@/assets/images/psword_img.png';
import backImg from '@/assets/images/back.png';
import IconFont from '@/components/IconFont';
import { history } from 'umi';
import './index.less';
import { setLocalStorageItem } from '@/utils/storage';

const Login = () => {
  const onFinish = () => {
    setLocalStorageItem('token', 1);
    history.push('/systemManage/accountSetting');
  };

  return (
    <div className="wrapper">
      <div className="login-container">
        <div className="login-body">
          <div className="uname">
            <ul className="login-tabs">
              <li className="active normal-tab">账号密码登录</li>
              <li className="normal-tab">手机号登录</li>
            </ul>
            <Form name="uname_form" className="form" onFinish={onFinish}>
              <Form.Item
                name="account"
                validateTrigger={['onChange', 'onBlur']}
                rules={[{ required: true, message: '请输入用户名/手机号！' }]}
                // getValueFromEvent={(event) => event.target.value.replace(/\s+/g, '')}
              >
                <Input
                  bordered={false}
                  placeholder="用户名/手机号"
                  className="form-item-input user-input"
                  prefix={<img src={userImg} />}
                />
              </Form.Item>
              <Form.Item
                name="password"
                validateTrigger={['onChange', 'onBlur']}
                rules={[{ required: true, message: '请输入密码！' }]}
                getValueFromEvent={(event) =>
                  event.target.value.replace(/\s+/g, '')
                }
              >
                <Input.Password
                  bordered={false}
                  autoComplete="new-password"
                  placeholder="请输入密码"
                  className="form-item-input psword-input"
                  prefix={<img src={pswordImg} />}
                  iconRender={(visible: any) =>
                    visible ? (
                      <IconFont type="iconchakan" />
                    ) : (
                      <IconFont type="iconyincang" />
                    )
                  }
                />
              </Form.Item>
              <div className="input-code">
                <Form.Item
                  name="captcha"
                  validateTrigger={['onChange', 'onBlur']}
                  // getValueFromEvent={(event) => event.target.value.replace(/\s+/g, '')}
                  rules={[{ required: true, message: '请输入图形验证码！' }]}
                >
                  <Input
                    bordered={false}
                    className="form-item-code-ipt code-input"
                    prefix={<img src={codeImg} />}
                    placeholder={'请输入图形验证码'}
                  />
                  {/* <Input bordered={false} placeholder="请输入图形验证码" className='form-item-code-ipt code-input' prefix={<img src={codeImg}/>}/> */}
                </Form.Item>
                <Spin spinning={false}>
                  <div
                    className="form-item-code-img"
                    dangerouslySetInnerHTML={{ __html: '' }}
                  ></div>
                </Spin>
                <span className="changeImg">看不清?换一张</span>
              </div>
              <Form.Item>
                <Button
                  type="primary"
                  className="login-btn"
                  htmlType="submit"
                  loading={false}
                >
                  登录
                </Button>
              </Form.Item>
              <Form.Item>
                <div className="forget">忘记密码?</div>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
      <div style={{ display: 'none' }}>版权所有 2020 杭州宇链科技有限公司</div>
    </div>
  );
};

export default Login;
