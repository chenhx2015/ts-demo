// 类型注释
function greeter(person: string) {
    console.log('hello' + person)
    return 'hello' + person
}
let user = 'lemeng lee'
document.body.innerHTML = greeter(user);