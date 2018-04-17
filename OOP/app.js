// Person constructor

function Person(name, date) {
    this.name = name;
    // this.age = age;
    this.birthday = new Date(date);
    this.calculateAge = function() {
        const dif = Date.now() - this.birthday.getTime();
        const ageDate = new Date(dif);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

/*
console.log(this);
this.alert("Hi it's me: this keyword");

const brad = new Person('Mitica', 61);

console.log(brad);*/

const mrn = new Person('Mrn', '12-12-91');
console.log(mrn.calculateAge());


// String primitive value
const name1 = 'Jeff';
const name2 = new String('Jeff');

console.log(name1, name2);