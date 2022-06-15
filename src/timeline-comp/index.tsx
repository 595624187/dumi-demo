import React, { useEffect, useRef, useState } from 'react';
import { Button } from 'antd';
import { Timeline, TL } from '@knight-lab/timelinejs';
import '@knight-lab/timelinejs/dist/css/timeline.css';
import './index.less';
interface IProps {
  title: string;
  events: Array<eventType>;
}
type eventType = {
  start_date: {
    millisecond: number | string;
  };
  end_date: {
    millisecond: number | string;
  };
  text: {
    headline: string;
    text: string;
  };
};
export default function index(props: IProps) {
  const myRef = useRef(null);
  let data = {};
  const handleClick = () => {
    console.log(data);
  };
  useEffect(() => {
    data = {
      title: {
        text: {
          headline: (props.title ?? '默认流程') + '的时间线',
        },
      },
      events: props.events ?? [],
    };
    new Timeline(myRef.current, data);
  }, [data]);
  return (
    <>
      <div ref={myRef}>abc</div>
      <Button type="primary" onClick={handleClick}>
        打印数据
      </Button>
    </>
  );
}
