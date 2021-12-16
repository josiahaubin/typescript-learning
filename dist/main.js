//NOTE functions
var getFullName = function (name, surname) {
    return name + " " + surname;
};
console.log(getFullName("Josiah", "Aubin"));
var user = {
    name: "Monster",
    age: 30,
    getMessage: function () {
        return 'Hello' + name;
    }
};
var user2 = {
    name: "Jack",
    getMessage: function () {
        return 'Hello' + name;
    }
};
console.log(user.name);
var popularTags = ["dragon", "coffee"];
var dragons = "dragon"; //can be null as well
var username = "alex";
var pagename = "1";
var errorMessage = null;
var newUser = null;
//NOTE void, any (don't use), never (not very useful), unknown
var doSomething = function () {
    console.log("doSomething");
};
var foo = "foo";
