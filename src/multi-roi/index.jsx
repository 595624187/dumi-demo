import React, { useState } from 'react';
import { InputNumber, Card } from 'antd';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import './index.css';
export default function index() {
  const [hide, setHide] = useState(false);
  return (
    <Card
      title="矩形网格阵列"
      extra={
        <span
          onClick={() => {
            setHide(!hide);
          }}
        >
          {hide ? (
            <EyeInvisibleOutlined style={{ fontSize: '20px' }} />
          ) : (
            <EyeOutlined style={{ fontSize: '20px' }} />
          )}
        </span>
      }
      style={{ width: '400px' }}
      size="small"
      className="rect-main"
    >
      <div className="rect-init">
        <div className="rect-title">起始矩形</div>
        <div className="rect-content">
          {['0', '1'].map((item, index) => {
            return (
              <div className="rect-item">
                <InputNumber
                  addonBefore={`x${item} :`}
                  min={-10000}
                  max={10000}
                  defaultValue={0}
                ></InputNumber>
                <InputNumber
                  addonBefore={`y${item} :`}
                  min={-10000}
                  max={10000}
                  defaultValue={0}
                ></InputNumber>
              </div>
            );
          })}
        </div>
      </div>
      <div className="rect-prop">
        {['x', 'y'].map((item, index) => {
          return (
            <div className="rect-item">
              <InputNumber
                addonBefore={item + '方向个数 :'}
                min={0}
                max={10000}
                defaultValue={0}
              ></InputNumber>
              <InputNumber
                addonBefore={item + '方向间距 :'}
                min={0}
                step="0.0001"
                defaultValue={0}
              ></InputNumber>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
