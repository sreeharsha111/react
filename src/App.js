import React, { Component } from 'react';
import './App.css';
import { Layout, Avatar, Menu, Icon, Breadcrumb, Button } from 'antd';
import Title from 'antd/lib/typography/Title';
import SubMenu from 'antd/lib/menu/SubMenu';
////import firebase from './Firebase';


const { Header, Footer, Sider, Content } = Layout;

class App extends Component {
 /* constructor(props){
    super(props);
    this.ref=firebase.firestore.collection('slot');
    this.unsubscribe=null;
    this.state={
      slots:[]
    };
  }

  count(){
    firebase.firestore().collection('slot').get().then(snap =>{
      console.log(snap.size);
    })

  }*/
 render(){
  return (
    <div className="App">
      <Layout>
        <Header style={{ padding: 10}}>
          <Avatar style={{ float: 'right' }} src='./dp.png' />
          <Title style={{ color: 'white' }} level={3}>CarParking App</Title>
        </Header>
        <Layout>
          <Sider>
            <Menu
              defaultSelectedKeys={['Dashboard']}
              mode="inline"
            >
              <Menu.Item key='Dashboard'>
                Dashboard
            </Menu.Item>
              <SubMenu
                title={
                  <span>
                    <Icon type="mail" />
                    <span>About US</span>
                  </span>
                }
              >
                
              </SubMenu>
                
                  
            </Menu>
          </Sider>
          <Layout>
            <Content style={{ padding: '0 50px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home/Dashboard</Breadcrumb.Item>
              </Breadcrumb>
              <div style={{ background: '#fff', padding: 24, minHeight: 580 }}>
                <button onclick={this.count}>delete</button>
              </div>
            </Content>
   
            <Footer style={{ textAlign: 'center' }}>myapp</Footer>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}
}
export default App; 