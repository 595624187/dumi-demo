import React, { useState, useEffect, useRef } from 'react';
import {
  Button,
  InputNumber,
  Collapse,
  Card,
  Select,
  Tabs,
  Input,
  Descriptions,
  Popconfirm,
  message,
} from 'antd';
import 'antd/dist/antd.less';
import './index.less';

const { Panel } = Collapse;
const { Option } = Select;
const { TabPane } = Tabs;
const { TextArea } = Input;
function Index(props) {
  const [panels, setPanels] = useState([
    {
      name: '名称' + 0,
      valuable: true,
      source: 'a',
      type: 'rectangular',
      coordinate: [0, 0, 0, 0],
    },
  ]);
  const [selectPanel, setSelectPanel] = useState(0);
  function addPanel(e) {
    e.stopPropagation();
    const obj = {
      name: '名称' + (panels.length + 1),
      valuable: true,
      source: 'a',
      type: 'rectangular',
      coordinate: [panels.length + 1, 0, 0, 0],
    };
    setPanels([...panels, obj]);
  }
  const handleDClick = (e, index) => {
    e.stopPropagation();
    const element = e.target;
    var oldhtml = element.innerHTML;
    //创建新的input元素
    var newobj = document.createElement('input');
    //为新增元素添加类型
    newobj.type = 'text';
    //为新增元素添加value值
    newobj.value = oldhtml;
    //为新增元素添加光标离开事件
    newobj.style.outline = 'none';
    newobj.style.background = 'none';
    newobj.style.width = '80px';
    newobj.style.width = '80px';
    newobj.onblur = function(e) {
      element.innerHTML = e.target.value == oldhtml ? oldhtml : e.target.value;
      panels[index].name = element.innerHTML;
      setPanels([...panels]);
      //当触发时判断新增元素值是否为空，为空则不修改，并返回原有值
    };
    //设置该标签的子节点为空
    element.innerHTML = '';
    //添加该标签的子节点，input对象
    element.appendChild(newobj);
    //设置选择文本的内容或设置光标位置（两个参数：start,end；start为开始位置，end为结束位置；如果开始位置和结束位置相同则就是光标位置）
    newobj.setSelectionRange(0, oldhtml.length);
    //设置获得光标
    newobj.focus();
  };
  const delPanel = index => {
    panels.splice(index, 1);
    setPanels([...panels]);
    setSelectPanel([]);
  };

  const confirm = (event, index) => {
    // event.stopPropagation();
    message.success('删除成功！');
    delPanel(index);
  };

  const cancel = e => {
    e.stopPropagation();
  };
  return (
    <Card
      className="main"
      size="small"
      title="我是标题"
      extra={
        <>
          <Button
            type="link"
            onClick={() => {
              const [x1, y1, x2, y2] = panels[selectPanel].coordinate;
              panels[selectPanel].coordinate = [
                x1 + 100,
                y1 + 100,
                x2 + 100,
                y2 + 100,
              ];
              setPanels([...panels]);
            }}
          >
            测试
          </Button>
          <Button type="primary" onClick={addPanel}>
            添加
          </Button>
        </>
      }
      actions={[]}
    >
      <Collapse
        defaultActiveKey={[]}
        activeKey={[selectPanel]}
        onChange={e => {
          setSelectPanel(e[1]);
        }}
      >
        {panels.map((panel, index) => {
          return (
            <Panel
              header={
                <div
                  onClick={e => {
                    e.stopPropagation();
                  }}
                  onDoubleClick={event => handleDClick(event, index)}
                >
                  名字1
                </div>
              }
              key={index}
              extra={
                <>
                  <Button
                    type="ghost"
                    onClick={e => {
                      e.stopPropagation();
                    }}
                  >
                    隐藏
                  </Button>
                  <Popconfirm
                    title="确定要删除吗？"
                    onConfirm={(event, index) => confirm(event, index)}
                    onCancel={cancel}
                    okText="Yes"
                    cancelText="No"
                  >
                    &nbsp;
                    <Button
                      onClick={() => {
                        setSelectPanel(selectPanel);
                      }}
                    >
                      删除
                    </Button>
                  </Popconfirm>
                </>
              }
            >
              <Descriptions>
                <Descriptions.Item span={2}>是否有效:</Descriptions.Item>
                <Descriptions.Item span={1.5}>
                  <Select defaultValue={true} size="middle">
                    <Option value={true}>有效</Option>
                    <Option value={false}>无效</Option>
                  </Select>
                </Descriptions.Item>
                <Descriptions.Item span={2}>ROI来源:</Descriptions.Item>
                <Descriptions.Item span={1.5}>
                  <Select defaultValue={0} size="middle">
                    <Option value={0}>本地</Option>
                    <Option value={1}>远程</Option>
                    <Option value={2}>文件</Option>
                  </Select>
                </Descriptions.Item>
                <Descriptions.Item span={2}>本地ROi类型:</Descriptions.Item>
                <Descriptions.Item span={1.5}>
                  <Select defaultValue={0} size="middle">
                    <Option value={0}>本地</Option>
                    <Option value={1}>远程</Option>
                    <Option value={2}>文件</Option>
                  </Select>
                </Descriptions.Item>
              </Descriptions>
              <Tabs
                defaultActiveKey={'1'}
                onChange={e => {
                  console.log(e);
                }}
              >
                <TabPane tab="矩形" key={1}>
                  <InputNumber
                    className="location-number"
                    addonBefore="x1"
                    value={panel.coordinate[0]}
                    onStep={e => {
                      panels[index].coordinate[0] = e;
                      setPanels([...panels]);
                    }}
                    onInput={e => {
                      panels[index].coordinate[0] = e;
                      setPanels([...panels]);
                    }}
                  />
                  <InputNumber
                    className="location-number"
                    addonBefore="y1"
                    value={panel.coordinate[1]}
                    onStep={e => {
                      panels[index].coordinate[1] = e;
                      setPanels([...panels]);
                    }}
                    onInput={e => {
                      panels[index].coordinate[1] = e;
                      setPanels([...panels]);
                    }}
                  />
                  <br />
                  <InputNumber
                    className="location-number"
                    addonBefore="x2"
                    value={panel.coordinate[2]}
                    onStep={e => {
                      panels[index].coordinate[2] = e;
                      setPanels([...panels]);
                    }}
                    onInput={e => {
                      panels[index].coordinate[2] = e;
                      setPanels([...panels]);
                    }}
                  />
                  <InputNumber
                    className="location-number"
                    addonBefore="y2"
                    value={panel.coordinate[3]}
                    onStep={e => {
                      panels[index].coordinate[3] = e;
                      setPanels([...panels]);
                    }}
                    onInput={e => {
                      panels[index].coordinate[3] = e;
                      setPanels([...panels]);
                    }}
                  />
                </TabPane>
                <TabPane tab="多边形" key={2}>
                  <TextArea size="middle" />
                </TabPane>
              </Tabs>
            </Panel>
          );
        })}
      </Collapse>
    </Card>
  );
}

export default Index;
