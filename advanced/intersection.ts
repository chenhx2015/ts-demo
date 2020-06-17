// 交叉类型
// 是将多个类型合并为一个类型
// 就是说这个类型的对象同时拥有了这三种类型的成员

function extend<T, U>(first: T, second: U): T & U {
    let result = <T & U>{}
    for(let id in first) {
        (<any>result)[id] = (<any>first)[id]
    }
    for(let id in second) {
        if(result.hasOwnProperty(id)) {
            (<any>result)[id] = (<any>second)[id]
        }
    }
    return result
}
class Person {
    constructor(public name:string) {}
}

interface Loggable {
    log(): void
}
// 主需要包含了类的就可以
class ConsoleLogger implements Loggable {
    log() {

    }
}

var jim = extend(new Person('Jim'), new ConsoleLogger())
var n = jim.name
jim.log()