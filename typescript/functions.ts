//parameters can be typed, and so can return value
function getSum(n1: number, n2: number): number {
  return n1 + n2;
}

// optional parameter using ?
function getName(firstName: string, lastName?: string): string {
  if (typeof lastName == "undefined") return firstName;
  return firstName + " " + lastName;
}
getName("arya");

//can also return void

function getNothing(): void {
  //return 5;     // gives error
  return;
}
