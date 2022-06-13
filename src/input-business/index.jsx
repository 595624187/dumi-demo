import React from 'react';
import { Button, Input } from 'antd';
function index(props) {
  return (
    <div>
      <Input type="number" style={{ width: '500px' }}></Input>
      <Button type="primary">提交</Button>
      <Button type="danger">取消</Button>
    </div>
  );
}

export default index;
