var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        console.log("user created");
    }
    User.prototype.registerMethod = function () {
        console.log("Registering " + this.name);
    };
    return User;
}());
var arya = new User("arya", "@.com", 23);
//arya.registerMethod(); //method protected and only accesible from class or other inherited classes
// inheritance
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member(id, name, email, age) {
        var _this = _super.call(this, name, email, age) || this;
        _this.id = id;
        return _this;
    }
    Member.prototype.registerMethod = function () {
        _super.prototype.registerMethod.call(this);
    };
    return Member;
}(User));
var mike = new Member(10, "mike", "@", 25);
mike.registerMethod();
