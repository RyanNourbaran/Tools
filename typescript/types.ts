// normal types
let myString: string;
let myString2: string = "string stuff";
let myNum: number;
let myBool: boolean;
let myVar: any;

myString = "hello world";
myNum = 22;
myBool = true;
myVar = "hello";

// array types
let strArr: string[];
let numArr: number[];
let strArr2: Array<string>;
let boolArr: Array<boolean>;

strArr = ["hello", "world"];
numArr = [1, 2, 3];

// tuples
let strNumTuple: [string, number];

strNumTuple = ["stringggg", 23];

// void, undefined, null

let myVoid: void = undefined;
let myNull: null = null || undefined;
let myUndefined: undefined;
myUndefined = null;
