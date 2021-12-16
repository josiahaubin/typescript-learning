//NOTE functions
// const getFullName = (name: string, surname: string): string => {
//     return name + " " + surname;
// }
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
