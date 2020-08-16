---
title: 高阶函数map和filter的用法
date: 2020-03-08 13:45:47
tags:
---

## 示例

现在有一个数组，要让所有大于10的奇数变为"BANG!"，小于10的奇数变为"BOOM!"，其他的全部舍弃。

<!-- end -->

#### Haskell

```haskell
filterPrint xs = [if x > 10 then "BOOM!" else "BANG!" | x <- xs, odd x]
```

#### JavaScript

```javascript
const filterPrint = (xs) => xs.filter(x => x % 2 != 0).map(x => x < 10 ? "BOOM!" : "BANG!");
```

#### Ruby

```ruby
def filterPrint(xs) xs.select(&:odd?).map(&->(x) {x > 10 ? "BOOM!" : "BING!"}) end
```