# Parse

对象原型上的属性不会被解析：

```js
qs.parse("valueOf=1")
```

to

```json
{}
```

支持编码后的字符串：

```js
qs.parse("a%5Bb%5D=1")
```

to

```json
{
  a: {
    b: "1"
  }
}
```

## API

| 选项名              | 描述                                         | 类型                 | 默认值  |
| ------------------- | -------------------------------------------- | -------------------- | ------- |
| `allowDots`         | 嵌套对象使用点语法                           | `boolean`            | `false` |
| `depth`             | 最多能解析多少层嵌套对象                     | `number`             | `5`     |
| `plainObjects`      | 允许解析原型上的属性，但解析后的对象没有原型 | `boolean`            | `false` |
| `allowPrototypes`   | 允许解析原型上的属性，且解析后的对象有原型   | `boolean`            | `false` |
| `parameterLimit`    | 最多能解析多少个参数                         | `number`             | `1000`  |
| `ignoreQueryPrefix` | 是否忽略前置问号                             | `boolean`            | `false` |
| `delimeter`         | 自定义参数的分隔符                           | `string` \| `RegExp` | `&`     |





allowEmptyArrays????

duplicates???无效