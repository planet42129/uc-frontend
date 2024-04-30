import {PageContainer} from '@ant-design/pro-components';
import React from 'react';

const UserManage: React.FC = () => {
  return (
    //这个pageContainer 相当于父层样式， 预先有  管理员/用户管理，我们在这个父标签标签下再写标签
    <PageContainer>
      <div id ="userManage">

      </div>
    </PageContainer>
  );
};

export default UserManage;
