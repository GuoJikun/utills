# Utils 工具函数

提供常用的函数方法


## Array 方法

|方法名| 描述| 参数| 返回值|
|---|---|---|---|
|sum| 求和| `(Array<T extends object | number>)` | `number` |
|average| 求平均值| `(Array<number>)` | `number` |
|min| 最小值| `(Array<number>)` | `number` |
|max| 最大值| `(Array<number>)` | `number` |
|isEmpty| 是否为空| `(Array<any>)` | `boolean` |


## Type

获取变量的类型 `Type.is()`，Type是一个class且只有静态方法

|方法名| 描述| 参数| 返回值|
|---|---|---|---|
|is| 求和| `(<T>)` | `string` |
|isNull| 是否是 null 类型| `(any)` | `boolean` |
|isString | 是否是 string 类型| `(any)` | `boolean` |
|isBoolean| 是否是 boolean 类型| `(any)` | `boolean` |
|isObject| 是否是 object 类型| `(any)` | `boolean` |
|isArray| 是否是 array 类型| `(any)` | `boolean` |
|isFunction| 是否是 function 类型| `(any)` | `boolean` |
|isReg| 是否是 regExp 类型| `(any)` | `boolean` |
|isNumber| 是否是 number 类型| `(any)` | `boolean` |
|isDate| 是否是 date 类型| `(any)` | `boolean` |
|average| 是否是 null 类型| `(any)` | `boolean` |
|average| 是否是 null 类型| `(any)` | `boolean` |
|average| 是否是 null 类型| `(any)` | `boolean` |

## Cookie

cookie 的相关操作

|方法名| 描述| 参数| 返回值|
|---|---|---|---|
|setItem| 设置cookie| `(sKey: string, sValue: string, vEnd?: any, sPath?: string, sDomain?: string, bSecure?: any)` | `boolean` |
|getItem| 获取cookie| `(sKey: string)` | `string | null` |
|removeItem| 移除cookie| `sKey: string, sPath?: string, sDomain?: string)` | `boolean` |
|has| 是否有| `(sKey: string)` | `boolean` |
|keys| 所有cookie的key| `()` | `string[]` |
|clear| 清除所有的cookie| `()` | `avoid` |

## Func

函数相关的方法

|方法名| 描述| 参数| 返回值|
|---|---|---|---|
| debounce | 防抖 | `(func: Function, wait: number = 200, immediate: boolean = false)` | `function` |
| throttle | 节流 | `(func: Function, wait: number = 200, type: number = 2)` | `function` |

## String

字符串处理相关的方法


|方法名| 描述| 参数| 返回值|
|---|---|---|---|
| trim| 移除前后的空格| `(val: string)` | `string` |
| trimStart| 移除前面的空格| `(val: string)` | `string` |
| trimEnd| 移除后面的空格| `(val: string)` | `string` |
| unicode| 获取字符串的unicode数字| `(val: string)` | `number[]` |
| thousandsSeparator| 千分位分隔符| `(val: string | number)` | `string` |


