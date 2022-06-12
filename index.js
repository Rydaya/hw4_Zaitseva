//Hw1

const user = {
    name: 'Kseniia'
}

function bindFunc(someFunc, obj) {
    return someFunc.bind(obj);
}

function someFunc(obj) {
    return (`Привет, ${this.name}!`)
}

const funcUser = bindFunc(someFunc, user);
console.log(funcUser(user));

//Hw2

const objectA = {
    a: 1,
    b: 2,
    c: 3,
}

function getSum() {
    let sum = 0;
    const arr = Object.values(this)
    for (let elem of arr) {
        if (elem > 0) {
            sum += elem;
        }
    }
    return sum;
}

const result = getSum.bind(objectA);
console.log(result());

//Hw3

const valObject0 = {
    values: [1, '2', 4, 8, '8', 3, 10, null, false],
};

function getNewArray() {
    if (this.hasOwnProperty('values')) {
        const newArr = this.values.filter(elem => {
            if (typeof elem === 'number' && elem % 2 === 0 && elem > 2 && elem < 10) {
                return elem;
            }
        }, this)
        return newArr;
    }
    return 'Не найдено';
}

const result2 = getNewArray.bind(valObject0);
console.log(result2());

//Hw4

const citiesAndCountries = {
    'Киев': 'Украина',
    'Нью-Йорк': 'США',
    'Амстердам': 'Нидерланды',
    'Берлин': 'Германия',
    'Париж': 'Франция',
    'Лиссабон': 'Португалия',
    'Вена': 'Австрия',
};

function getCity(obj) {
    const arr = [];
    for (let subArr of Object.entries(obj)) {
        arr.push(`${subArr[0]} - это ${subArr[1]}`);
    }
    return arr;
}

console.log(getCity(citiesAndCountries));

//Hw5

const namesOfDays = {
    ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday ', 'Saturday ', 'Sunday'],
}

function getNameOfDay(lang, datNumber) {
    return namesOfDays[lang][datNumber - 1];
}
console.log(getNameOfDay('en', 7));
console.log(getNameOfDay('ru', 3));

//Hw6

const person1 = {
    name: 'Vlad'
};
const person2 = {
    age: 1
};
function setProto(currentObj, protoObj) {
    currentObj.__proto__ = protoObj;
}
setProto(person2, person1);
console.log(person2);

//Hw7

const person = {
    setName(name) {
        return this.name = name;
    },
    getName() {
        return this.name;
    },
    setAge(age, func = this.ageValidation) {
        if (func(age)) {
            return this.age = age;
        }
        return this.age = 'Validation Error';
    },
    getAge() {
        return this.age;
    },
    ageValidation(age) {
        if (age > 18) {
            return true;
        }
    },
}

const person3 = Object.create(person);

person3.setName('Kseniia');
console.log(person3.getName());
person3.setAge(1);
console.log(person3.getAge());
person3.setAge(20);
console.log(person3.getAge());

