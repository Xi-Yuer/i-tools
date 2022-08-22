# i-tools# 介绍

> 开发过程中遇到过得一些通用函数工具库

# 安装

```
npm install itool
```

# 导入

```js
import { formatTime, htmlEscape,htmlUnEscape,formatMoney } form 'itool'
```

## 格式化时间

```js
//时间格式化
const time = new Date()

const formatTime = formatTime(time) //2022年1月22日 21:03:55

const formatTime = formatTime(time, false) //21:03:55
```

```js
// 人民币格式化
const formatMoney = formatMoney(12345.678) // ￥12,345.68
```

```js
// html转义（防止xxs攻击）
const htmlEscape = htmlEscape('<h1>hello</h1>') // &lt;h1&gt;hello&lt;/h1&gt;
```

```js
// 浏览器缓存
cache.setCache(key, value) // 设置
cache.getCache(key) // 获取
cache.deleceCache(key) // 删除
cache.clearCache() // 清空
```

# 开源协议

ISC
