function greeter(persion) {
    return 'hello' + persion.firstName + ' ' + persion.lastName;
}
var user = {
    firstName: "Jane",
    lastName: "User"
};
document.body.innerHTML = greeter(user);
