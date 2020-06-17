// 联合类型
// 联合类型和交叉类型很有关联，但是在使用上完全不同
// 例如遇到的情况：一个代码库希望传入 number 或者 string 类型的参数，如下

function padLeft(value: string, padding: any) {
    if(typeof padding === 'number') {
        return Array(padding + 1).join(' ') + value
    }
    if(typeof padding === 'string') {
        return padding + value
    }
    throw new Error(`Expected string or number, got '${padding}'.`)
}
padLeft('Hello word', 4) // returns "    Hello world"

// any 为任何类型，但是里面却指判断是字符串还是数字，所以，编译阶段通过，但是运行时报错
// 解决：代替 any ,可使用联合类型作为 padding 的参数
// 🌿🌿🌿 使用竖线分隔符

function padLeft(value: string, padding: string | number) {
  // ...
}

// 注意：如果一个值是联合类型，我们只能访问此联合类型的所有类型里共有的成员
interface Bird {
    fly();
    layEggs();
}
interface Fish {
    swim();
    layEggs();
}
function getSmallPet(): Fish | Bird {
    // ...
}
let pet = getSmallPet()
pet.layEggs() // ok
pet.swim() // errors

// 我们不能确定一个 Bird | Fish类型的变量是否有 fly方法
