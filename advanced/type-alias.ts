// 类型别名会给一个类型起个新名字。 类型别名有时和接口很像，但是可以作用于原始值，联合类型，元组以及其它任何你需要手写的类型
type Name = string
type NameResolver = () => string
type NameOrResolver = Name | NameResolver

function getName(n: NameOrResolver): Name {
    if(typeof n === 'string') {
        return n
    } else {
        return n()
    }
}
// 起别名不会新建一个类型 - 它创建了一个新 名字来引用那个类型。 给原始类型起别名通常没什么用，尽管可以做为文档的一种形式使用

// 同接口一样，类型别名也可以是泛型 - 我们可以添加类型参数并且在别名声明的右侧传入

type Container<T> = { value: T }

// 我们也可以使用类型别名来在属性里引用自己
type Tree<T> = {
    value: T;
    left: Tree<T>;
    right: Tree<T>;
}

// 然而，类型别名不能出现在声明右侧的任何地方
type Yikes = Array<Yikes> // error

// 接口 vs. 类型别名
// 区别：1.其一，接口创建了一个新的名字，可以在其它任何地方使用。 类型别名并不创建新名字—比如，错误信息就不会使用别名
type Alias = { num: number }
interface Interface {
    num: number;
}
declare function aliased(arg: Alias): Alias
declare function interfaced(arg: Interface): Interface
// 区别2: 另一个重要区别是类型别名不能被 extends和 implements（自己也不能 extends和 implements其它类型）
// 使用场景： 如果无法通过接口来描述一个类型并且需要使用联合类型或元组类型，这时通常会使用类型别名 **