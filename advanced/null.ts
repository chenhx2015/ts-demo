// 可以为 null 的类型
//1. 默认情况下，类型检查器认为 null与 undefined可以赋值给任何类型
// null与 undefined是所有其它类型的一个有效值
// --strictNullChecks 标记可以解决此错误：当声明一个变量时，它不会自动地包含 null或 undefined。 可以使用联合类型明确的包含它们

let s = 'foo'
s = null // // 错误, 'null'不能赋值给'string'
let sn: string | null = 'bar'
sn = null // ok

sn = undefined // error, 'undefined'不能赋值给'string | null'
// 注意：TypeScript会把 null和 undefined区别对待。 string | null， string | undefined和 string | undefined | null是不同的类型

// 2.可选参数和可选属性
// 使用了 --strictNullChecks，可选参数会被自动地加上 | undefined
function f(x: number, y?: number) {
    return x + (y || 0)
}
f(1, 2)
f(1)
f(1, undefined)
f(1, null) // error, 'null' is not assignable to 'number | undefined'

// 可选属性
class C {
    a: number;
    b?: number;
}
let c = new C();
c.a = 12
c.a = undefined; // error, 'undefined' is not assignable to 'number'
c.b = 13;
c.b = undefined; // ok
c.b = null; // error, 'null' is not assignable to 'number | undefined'

// 类型保护和类型断言
function f2(sn: string | null):string {
    if(sn == null) {
        return "default"
    } else {
        return sn
    }
}
// 很明显的去除了 null, 也可以使用短路运算符
function f3(sn: string | null): string {
    return sn || 'default'
}