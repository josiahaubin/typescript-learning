//NOTE functions
const getFullName = (name: string, surname: string): string => {
    return name + " " + surname;
}

console.log(getFullName("Josiah", "Aubin"));

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

//NOTE Union and Type
type ID = string;
type PopularTag = string;
type MaybePopularTag = PopularTag | null;

interface UserInterface {
    id: ID
    name: string
    surname: string
}

const popularTags: PopularTag[] = ["dragon", "coffee"];
const dragons: MaybePopularTag = "dragon"; //can be null as well
let username: string = "alex";
let pagename: string | number = "1";
let errorMessage: string | null = null;
let newUser: UserInterface | null = null;

//NOTE void, any (don't use), never (not very useful), unknown
const doSomething = (): void => {
    console.log("doSomething");
}

let foo: any = "foo";