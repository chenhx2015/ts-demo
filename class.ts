// 类
// 基于类的面向对象编程
// 还要注意的是，在构造函数的参数上使用 public 等同于创建了同名的成员变量
// 成员变量 vs 局部变量
// 1.属于类，可以被public,private,static 修饰 vs 方法中的变量或者方法的参数，成员变量和局部变量都能被 final 修饰
// 2.是对象的一部分，存在堆内存 vs 存在栈内存
// 3.生存时间看：随着对象创建而存在 vs 随着方法的调用而自动消失
// 4.如果没有被赋初始值，会自动以类型的默认值而赋值（一种例外：被final修饰但是没有被static修饰的则必须显示的赋值） vs 不会自动赋值

class Student {
    fullname: String;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullname = firstName + " " + middleInitial + " " + lastName;
    }
}
interface Person{
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "hello" + person.firstName + ' ' + person.lastName
}

let user = new Student("Jane", "M.", "User")

document.body.innerHTML = greeter(user)