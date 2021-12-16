//NOTE functions
// const getFullName = (name: string, surname: string): string => {
//     return name + " " + surname;
// }

// console.log(getFullName("Josiah", "Aubin"));

//NOTE interfaces
//? makes it not mandatory
interface IUser {
    name: string;
    age?: number;
    getMessage(): string
}
const user: IUser = {
    name: "Monster",
    age: 30,
    getMessage() {
        return 'Hello' + name;
    }
};

const user2: IUser = {
    name: "Jack",
    getMessage() {
        return 'Hello' + name;
    }
};

console.log(user.name)