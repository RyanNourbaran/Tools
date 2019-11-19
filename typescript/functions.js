//parameters can be typed, and so can return value
function getSum(n1, n2) {
    return n1 + n2;
}
// optional parameter using ?
function getName(firstName, lastName) {
    if (typeof lastName == "undefined")
        return firstName;
    return firstName + " " + lastName;
}
getName("arya");
//can also return void
function getNothing() {
    //return 5;     // gives error
    return;
}
