---
nav:
  type: 通用
  path: /components
---

# Timeline-comp

```tsx
import React from 'react';

import { TimelineComp } from 'heils-dumi';

const now = new Date();
const obj = {
  start_date: {
    millisecond: now.getMilliseconds(),
  },
  end_date: {
    millisecond: now.getMilliseconds() + 20,
  },
  text: {
    headline: `算子5`,
    text: `
          <b><code>
          开始时间：${now.toLocaleString()}:${now.getMilliseconds()}<br/>
          结束时间：${now.toLocaleString()}:${now.getMilliseconds()}<br/>
          执行时间：${2000} ms
          </code></b>
          `,
  },
};
const obj1 = {
  start_date: {
    millisecond: now.getMilliseconds() + 10,
  },
  end_date: {
    millisecond: now.getMilliseconds() + 30,
  },
  text: {
    headline: '算子6',
    text: `
          <b><code>
          开始时间：${now.toLocaleString()}:${now.getMilliseconds()}<br/>
          结束时间：${now.toLocaleString()}:${now.getMilliseconds()}<br/>
          执行时间：${2000} ms
          </code></b>
          `,
  },
};
const events = [obj, obj1];
const title = '算法看看';
export default () => <TimelineComp title={title} events={events} />;
```
