function greeter(person) {
    console.log('hello' + person);
    return 'hello' + person;
}
var user = 'lemeng lee';
document.body.innerHTML = greeter(user);
