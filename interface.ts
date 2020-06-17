// 接口
// 只要保证包含了接口要求的结构就可以，而不必明确地使用 implements 语句
interface Person {
    firstName: string;
    lastName: string; 
}

function greeter(persion: Person) {
    return 'hello' + persion.firstName + ' ' + persion.lastName
}

let user2 = {
    firstName: "Jane",
    lastName: "User"
}

document.body.innerHTML = greeter(user2);
