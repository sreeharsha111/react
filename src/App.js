import React, { Component } from 'react';
import './App.css';
import { Layout, Avatar, Menu, Icon, Breadcrumb, Button } from 'antd';
import Title from 'antd/lib/typography/Title';
import SubMenu from 'antd/lib/menu/SubMenu';
import firebase from './Firebase';

const { Header, Footer, Sider, Content } = Layout;
const carparking=document.querySelector('#slot');

function App(doc) {
  let li =document.createElement('li');
  let del=document.createElement('div');   

  li.setAttribute('data-id',doc.id);
  del.textContent=Button;

  carparking.appendChild(li);

  //delete function
  /*deleteCollection('slot') {
    firebase.firestore().collection('slot').listDocuments().then(val => {
        val.map((val) => {
            val.delete()
        })
    })
}*/


  

  return (
    <div className="App">
     <Layout>
     <Header style={{padding:10,background:'skyblue'}}>
     <Avatar style={{float:'right'}} src="./vk1.png" />
     <Title style={{color:'white'}} level={3}>carparking</Title>
     </Header>
      <Layout>
         <Sider style={{background:'grey'}} >
           <Menu
           style={{background:'grey'}}
            defaultSelectedKeys={['Dashboard`']}
            mode="inline">
             <Menu.Item key='Dashboard'>
               Dashboard
             </Menu.Item>
             <SubMenu  
          title={
            <span>
              <Icon type="mail" />
              <span>about us</span>
            </span>
          }
          >
               <Menu.ItemGroup style={{background:'grey'}} key='country' title='country'>
                 <Menu.Item key='location 1'>location1</Menu.Item>
                 <Menu.Item key='location 2'>location2</Menu.Item>
               </Menu.ItemGroup>
             </SubMenu>
           </Menu>
         </Sider>
        <Layout> 
        <Content style={{ padding: '0 50px' }}>
         
          <Breadcrumb style={{ margin: '16px 0' }}>
           <Breadcrumb.Item key='Home'>Home</Breadcrumb.Item>
           <Breadcrumb.Item >Dashboard</Breadcrumb.Item>
        
      </Breadcrumb>
      <div style={{ background: '#fff', padding: 24, minHeight: 500 }}> 
      <Button >delete</Button></div>
    </Content>   
    <Footer style={{ textAlign: 'center' }}>Ant Design  Created by software ag</Footer>
         </Layout>
       </Layout>  
    </Layout>

 
    </div>
  );
}

export default App;
