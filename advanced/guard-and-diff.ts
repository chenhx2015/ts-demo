// 类型保护与区分了类型
// 联合类型适合于那些值可以为不同类型的情况。 但当我们想确切地了解是否为 Fish时怎么办？ 
// JavaScript里常用来区分2个可能值的方法是 ：检查成员是否存在
// 如之前提及的，我们只能访问联合类型中共同拥有的成员

interface Bird {
    fly();
    layEggs();
}

interface Fish {
    swim();
    layEggs();
}

function getSmallPet(): Fish | Bird {
  return null
}

let pet = getSmallPet()
pet.layEggs() // ok
pet.swim() // errors

// 改为如下,进行类型断言
if((<Fish>pet).swim) {
    (<Fish>pet).swim()
} else {
    (<Bird>pet).fly()
}

// 1.用户自定义的类型保护
// 谓词为 parameterName is Type 这种形式
// parameterName 必须是来自于当前函数签名里的一个参数名
// 函数签名组成：函数名 + 参数 + 参数次序
function isFish(pet: Fish | Bird): pet is Fish {
    return (<Fish>pet).swim !== undefined
}
// 调用 isFish 函数时，则兼容了
if(isFish(pet)) {
    pet.swim()
} else {
    pet.fly()
}

// 注意 TypeScript 不仅知道在 if 分支里 pet 是 Fish 类型； 它还清楚在 else 分支里，一定 不是 Fish 类型，一定是 Bird 类型

// 2.typeof 类型保护
// 利用断言类型来书写 padLeft 代码
function isNumber(x: any): x is number {
    return typeof x === 'number'
}
function isString(x: any): x is string {
    return typeof x === 'string'
}
function padLeft(value: string, padding: string | number) {
    if(isNumber(padding)) {
        return Array(padding + 1).join(' ') + value
    }
    if(isString(padding)) {
        return padding + value
    }
    throw new Error(`Expected string or number, got '${padding}'.`);
}
// 然而，必须要定义一个函数来判断类型是否是原始类型，这太痛苦了。 幸运的是，现在我们不必将 typeof x === "number"抽象成一个函数，因为TypeScript可以将它识别为一个类型保护。 也就是说我们可以直接在代码里检查类型了

function padLeft(value: string, padding: string | number) {
    if(typeof padding === 'number') {
        return Array(padding + 1).join(' ') + value
    }
    if(typeof padding === 'string') {
        return padding + value
    }
    throw new Error(`Expected string or number, got '${padding}'.`);
}

// 注意："typename"必须是 "number"， "string"， "boolean"或 "symbol"
// 只有两种形式能被识别：typeof v === "typename"和 typeof v !== "typename"
// 但是TypeScript并不会阻止你与其它字符串比较，语言不会把那些表达式识别为类型保护

// 3.instanceof 类型保护
// instanceof类型保护是通过构造函数来细化类型的一种方式
interface Padder {
    getPaddingString(): string
}
class SpaceRepatingPadder implements Padder {
    constructor(private numSpaces: number) {}
    getPaddingString() {
        return Array(this.numSpaces + 1).join(' ')
    }
}
class StringPadder implements Padder {
    constructor(private value: string) {}
    getPaddingString() {
        return this.value
    }
}
function getRandomPadder() {
    return Math.random() < 0.5 ? 
        new SpaceRepatingPadder(4) :
        new StringPadder( '  ')
}
// 类型为SpaceRepeatingPadder | StringPadder
let padder: Padder = getRandomPadder()
if(padder instanceof SpaceRepatingPadder) {
    padder // 类型细化为'SpaceRepeatingPadder'
}
if(padder instanceof StringPadder) {
    padder // 类型细化为'StringPadder'
}
