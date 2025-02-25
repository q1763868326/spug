/**
 * Copyright (c) OpenSpug Organization. https://github.com/openspug/spug
 * Copyright (c) <spug.dev@gmail.com>
 * Released under the AGPL-3.0 License.
 */
import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { Input } from 'antd';
import { SearchForm, AuthDiv, Breadcrumb } from 'components';
import ComTable from '../app/Table';
import ComForm from '../app/Form';
import Ext1Form from '../app/Ext1Form';
import Ext2Form from '../app/Ext2Form';
import AddSelect from '../app/AddSelect';
import AutoDeploy from '../app/AutoDeploy';
import store from '../app/store';
import envStore from 'pages/config/environment/store';

export default observer(function () {
  useEffect(() => {
    store.fetchRecords();
    if (envStore.records.length === 0) {
      envStore.fetchRecords()
    }
  }, [])
  return (
    <AuthDiv auth="deploy.app.view">
      <Breadcrumb>
        <Breadcrumb.Item>首页</Breadcrumb.Item>
        <Breadcrumb.Item>应用发布</Breadcrumb.Item>
        <Breadcrumb.Item>代码审核</Breadcrumb.Item>
      </Breadcrumb>
      <SearchForm>
        <SearchForm.Item span={7} title="应用名称">
          <Input allowClear value={store.f_name} onChange={e => store.f_name = e.target.value} placeholder="请输入"/>
        </SearchForm.Item>
        <SearchForm.Item span={7} title="描述信息">
          <Input allowClear value={store.f_desc} onChange={e => store.f_desc = e.target.value} placeholder="请输入"/>
        </SearchForm.Item>
      </SearchForm>
      <ComTable/>
      {store.formVisible && <ComForm/>}
      {store.addVisible && <AddSelect/>}
      {store.ext1Visible && <Ext1Form/>}
      {store.ext2Visible && <Ext2Form/>}
      {store.autoVisible && <AutoDeploy/>}
    </AuthDiv>
  );
})
