/**
 * Copyright (c) OpenSpug Organization. https://github.com/openspug/spug
 * Copyright (c) <spug.dev@gmail.com>
 * Released under the AGPL-3.0 License.
 */
import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { Input } from 'antd';
import { SearchForm, Breadcrumb } from 'components';
import store from '../app/store';
import envStore from 'pages/config/environment/store';
import NavIndex from './Nav';

export default observer(function () {
  useEffect(() => {
    store.fetchRecords();
    if (envStore.records.length === 0) {
      envStore.fetchRecords()
    }
  }, [])
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item>首页</Breadcrumb.Item>
        <Breadcrumb.Item>应用发布</Breadcrumb.Item>
        <Breadcrumb.Item>SVN发布</Breadcrumb.Item>
      </Breadcrumb>
      <SearchForm>
        <SearchForm.Item span={7} title="应用名称">
          <Input allowClear value={store.f_name} onChange={e => store.f_name = e.target.value} placeholder="请输入" />
        </SearchForm.Item>
      </SearchForm>
      <NavIndex/>
    </div>
  );
})
