import { Meteor } from 'meteor/meteor';
import { Players } from './../imports/api/players';

Meteor.startup(() => {

    // // Object Spread operator
    // let user = {
    //     name: 'Nathan',
    //     location: 'DC',
    //     age: 0
    // }

    // let person = {
    //     ...user,
    //     age: 32 ,// to override spread object goes first. Order matters
    // }
    // // console.log(person);

    // let bike = 'Scott';
    // let stuff = {
    //     bike: bike
    // }

    // let house = {
    //     bedrooms: 2,
    //     bathrooms: 1.5
    // }

    // let yearBuilt = 1992;

    // let newHouse = {
    //     ...house,
    //     bedrooms: 3,
    //     yearBuilt,
    //     flooring: 'Carpet'
    // }

    // console.log(newHouse);

    


    // let obj = {
    //     name: 'Nathan',
    //     printName () {
    //         console.log(`Name: ${this.name}`)
    //     }
    // }

    // obj.printName();

    // setTimeout(obj.printName.bind(obj), 1000);


    // Players.insert({
    //     name: 'Mike',
    //     score: 3,
    // });

    // Players.find({name: 'Nathan'});


    // console.log(Players.find().fetch());

    // class Person {
    //     constructor (name = 'Anonymous', age = 32) {
    //         this.name = name;
    //         this.age = age;
    //     }

    //     getGreeting () {
    //         return `Hi! I am ${this.name}`
    //     }
    //     getPersonDescription () {
    //         return `${this.name} is ${this.age} years old.`
    //     }
    // }

    // class Employee extends Person {
    //     constructor (name, age, title) {
    //         super(name, age);
    //         this.title = title;
    //     }

    //     hasJob () {
    //         return !!this.title;
    //     }

    //     getGreeting () {
    //         if (this.title) {
    //             return `Hi! I am ${this.name}. I work as a ${this.title}`;
    //         } else {
    //             return super.getGreeting();
    //         }
    //     }
    // }
    
    // const me = new Person('Nathan');
    // console.log(me.getGreeting());
    // const employee = new Employee('Mike');
    // const employee2 = new Employee('Nate', undefined, 'Programmer');
    // console.log(employee.getPersonDescription());
    // console.log(employee.getGreeting());
    // console.log(employee2.getGreeting());
    // console.log(employee2.getPersonDescription());

    // class Programmer extends Person {
    //     constructor(name, age, preferredLanguage = 'Javascript') {
    //         super(name, age);
    //         this.preferredLanguage = preferredLanguage;
    //     }

    //     getGreeting () {
    //         return `Hi! I'm ${this.name}. I am a ${this.preferredLanguage} developer.`
    //     }
    // }

    // const nathan = new Programmer('Nathan')
    // console.log(nathan.getGreeting());
    // console.log(nathan.getPersonDescription());

});
