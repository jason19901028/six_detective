/*
 * @Description: 登录
 * @Author: mus
 * @Date: 2019-09-19 20:01:46
 * @LastEditTime : 2020-01-13 21:17:21
 * @LastEditors  : dailinbo
 * @Email: mus@szkingdom.com
 */
import React, { Component } from 'react';
import { connect } from 'dva';
import { formatMessage, FormattedMessage } from 'umi/locale';
import router from 'umi/router';
import { Alert } from 'antd';
import LoginComponent from '@/components/Login';
import styles from './Login.less';
import { setStore } from '@/utils/store';

const { UserName, Password, Submit } = LoginComponent;

@connect(state => ({
  login: state.login,
}))
class Login extends Component {
  state = {
    type: 'account',
    // autoLogin: true,
    submitting: false, // submit loading
  };

  componentDidMount() {}

  onTabChange = type => {
    this.setState({ type });
  };

  handleSubmit = (err, values) => {
    const { loginName, loginPwd } = values;
    this.setState({
      submitting: true,
    });
    if (!err) {
      const { dispatch } = this.props;
      const param = {
        loginname: loginName,
        password: window.kddes.getDes(loginPwd),
        storeId: '100',
        ipAddress: '127.0.0.1',
        loginType: '0',
        loginFromWay: '0',
        // businessCode: '1001',
      };
      dispatch({
        type: 'login/getLogin',
        payload: param,
        callback: response => {
          this.setState({
            submitting: false,
          });
          if (response.bcjson.flag === '0') {
            return;
          }
          const item = response.bcjson.items[0];
          localStorage.setItem('loginName', item.name);
          setStore({ name: 'userInfo', content: item });
          setStore({ name: 'employeeId', content: item.employeeId });
          router.push('/');
        },
      });
    }
    this.setState({
      submitting: false,
    });
  };

  // changeAutoLogin = e => {
  // this.setState({
  //   autoLogin: e.target.checked,
  // });
  // };

  renderMessage = content => (
    <Alert style={{ marginBottom: 24 }} message={content} type="error" showIcon />
  );

  render() {
    const { type, submitting } = this.state;
    return (
      <div className={styles.main}>
        <LoginComponent
          defaultActiveKey={type}
          onTabChange={this.onTabChange}
          onSubmit={this.handleSubmit}
          ref={form => {
            this.loginForm = form;
          }}
        >
          <div>
            <div
              style={{
                marginBottom: 34,
                textAlign: 'center',
                color: '#10416c',
                fontSize: 14,
                fontWeight: 600,
              }}
            >
              USER LOGIN
            </div>
            <UserName
              name="loginName"
              placeholder="User Name"
              rules={[
                {
                  required: true,
                  message: 'User Name is missing',
                },
              ]}
              style={{ height: 40 }}
            />
            <Password
              name="loginPwd"
              placeholder="Password"
              rules={[
                {
                  required: true,
                  message: 'Password is missing',
                },
              ]}
              onPressEnter={e => {
                e.preventDefault();
                this.loginForm.validateFields(this.handleSubmit);
              }}
              style={{ height: 40 }}
            />
          </div>

          {/* <div>
            <Checkbox checked={autoLogin} onChange={this.changeAutoLogin}>
              <FormattedMessage id="记住密码" />
            </Checkbox>
            <a style={{ float: 'right' }} href="">
              <FormattedMessage id="忘记密码" />
            </a>
          </div> */}
          <Submit loading={submitting} style={{ height: 40 }}>
            <FormattedMessage id="LOG IN" />
          </Submit>
        </LoginComponent>
      </div>
    );
  }
}

export default Login;
