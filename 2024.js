let newAdd = (A ,B) => A + B;
   let A = 12;
   let B = 18;
   let sum = addition(a, b);
   console.log(sum);

   let num1 = 23;
   let num2 = 17;
   function myAddition(num1, num2){
    return num1 + num2;
   }
   let addition = myAddition(num1, num2);
   console.log(addition);

let a = [2, 3, 6, 13,24, 50];
for(let i = 0; i < a.length; i++){
    let b = a[i];
    console.log(b);
}
let person = {
    firstName :'Joanes',
    lastName :'claudio',
    age: 26,
    location:'Kigali',
}
function myFullName(){
    console.log(person.firstName + ' ' + person.lastName);
}
myFullName()

let Dioscese= {
    Nyundo:{ parish: 'MUhororo'}
};
console.log( 'Rwandan Catholic church is composed by different parishes such as' + ' ' 
+ Dioscese.Nyundo.parish);

function greetMyLove(name){
    return function(){
    console.log('Darling'+' ,' + name)
    }
}
   let hello =greetMyLove('Hello');
   let my = greetMyLove("you're mine");
   hello();
   my();

   let p;
   const myName = 'Joannes';
   const myAge= 26;
   x =`Hello my dear friend ${myName} and i know that soon we will turn ${myAge} years old.`;
   console.log(x);

   const myString = 'developer';
   let myNewString;
   myNewString = myString.charAt(0).toUpperCase()+ myString.substring(1);
   console.log(myNewString);
   myNewString = `${myString.charAt(0).toUpperCase} ${myString.substring(1)}`;

   const myX = Math.floor(Math.random() *100 + 1);
   const myP = Math.floor(Math.random() *50 + 1);

   const ThisSum = x + y;
   const sumOutPut = `${myX} + ${myP} = ${ThisSum}`;
   console.log(ThisSum);
   console.log(sumOutPut);

   const diff= x - y;
   const diffOutPut = `${x} - ${y} = ${diff}`;
   console.log(diff);
   console.log(diffOutPut);

   const mult = x * y;
   const multOutPut = `${x} * ${y} = ${mult}`;
   console.log(mult);
   console.log(multOutPut);

   const quot= x / y;
   const quotOutPut = `${x} / ${y} = ${sum}`;
   console.log(quot);
   console.log(quotOutPut);

   const rem = x % y;
   const remOutPut = `${x} % ${y} = ${rem}`;
   console.log(rem);
   console.log(remOutPut);

   //Using for loop

   for(let i = 1; i <= 100; i++){
   if(i % 3 === 0 && i % 5 === 0){
    console.log('FizzBuzz');
   }
   else if(i % 3 === 0){
    console.log('Fizz');
   }
   else if(i % 5 === 0){
    console.log('Buzz');
   } 
   else{
    console.log(i)
   }
   }
   // Using While loop
let j = 1
while(j <= 100){
    if(j % 3 === 0 && j % 5 === 0){
    console.log('FizzBuzz');
   }
   else if(j % 3 === 0){
    console.log('Fizz');
   }
   else if(j % 5 === 0){
    console.log('Buzz');
   } 
   else{
    console.log(j)
   }
   j++;
}
// for...of loop

const favorites = ['beans', 'rice', 'meat', 'chips']
     for(fav of favorites){
        console.log(fav);
     }

     const name = 'Joanes';
     const age = 27;
     const isGood = true;
     const x = null;
     const y= undefined;
     let z;
     console.log(typeof z);
     let descript = `My name is ${name} and i am ${age} years old`;
     
     console.log(descript);
     let str = 'I love you my darling';
     console.log(str.substring(2,6).toUpperCase());
     console.log(str.split(''));
     let myArr = ['mango', 'tomato', 'beans','avocado'];
      myArr.push('apple'); //push: Add the item to the end
      myArr.unshift('pineaple'); // unshift add the item at the beginnning
      myArr.pop(); //take out the last item
     console.log(myArr);

     const thisPerson = {
        firstName: 'Joanes',
        lastname: 'Claudio',
        age: 27,
        hobbies: ['reading', 'jogging', 'swimming'],
        adress: {
            street: '34 GSNY',
            City: 'Gisenyi',
            district: 'Rubavu',

        }
        }
    console.log(thisPerson.hobbies[1]);

    const verify = [
        {
            id: 253,
            text:'Be on guard',
            isWell:true
        },
        {
            id: 326,
            text:'Take your steeps',
            isWell:true
        },
        {
            id: 435,
            text:'Start the battle',
            isWell:false
        },
    ];
   
   for( let i = 0; i<=10; i++){
    console.log(i);
   }
   let i = 0;
   while(i<=10){
    console.log(i);
    i++;
   }
     
verify.forEach(function(ver)
{
    console.log(ver.text);
})
 const verifyText = verify.map(function(ver){
    return ver.text;
 });
console.log(verifyText);
 const verifyId = verify.filter(function(ver){
    return ver.id;
 }).map(function(ver){
    return ver.isWell;
 })
 console.log(verifyId);

 const toX = 10;
 if(toX ===10){
    console.log('x is equal to 10');
 }
 else if(toX> 10){
    console.log('x is greater than 10');  
 }
 else{
    console.log('x is less than 10')
 };

 const beX = 10;
 const answer = beX >=15 ? 'I love you bae' : 'You are not my type';
 console.log(answer);

  const forA= 10;
   const forB = 20;
   let newSum = a + b;
console.log(newSum);

let Thisnum1 = 30;
    num2 = 70;
function myAddition(thisnum1, num2){
    return thisnum1 + num2;
   
}
let mysum = myAddition(num1, num2);
console.log(mysum);

//constructor function

function Person(firstName, lastName, gender){
this.firstName = firstName;
this.lastName = lastName;
this.gender = gender;
this.getFullName = function(){
    return `${this.firstName} ${this.lastName}`
};
}

const person1 = new Person('Joanes', 'Claudio', 'male');
console.log(person1);
console.log(person1.getFullName());
let amount = '100';
console.log(amount, typeof amount)
amount = parseInt(amount);
console.log(amount, typeof amount);

const String = 'developer' //capitalize the first letter
let stringCap = myString[0].toUpperCase() + myString.substring(1,9);
console.log(stringCap);

let K;
K = Math.sqrt(16);
K = Math.round(5.45);
K = Math.ceil(3.2);
K= Math.floor(2.9);
K = Math.abs(-3);
K = Math.pow(5, 4);
K = Math.min(2,4,7);
K = Math.max(4,10,1);
K = Math.random();
console.log(K);

let P;
x = Math.floor(Math.random() * 100 + 1);
let D;
D = Math.floor(Math.random() * 50 + 1);
console.log(P, D);

let Sum;
sum = P + D;
console.log(Sum);
sumOutPut = `${P} + ${D} = ${Sum}`;
console.log(sumOutPut);

let difference;
difference = x - y;
console.log(sum);
diffOutPut = `${x} - ${y} = ${difference}`;
console.log(diffOutPut);

let multipl;
multipl= x * y;
console.log(multipl);
multOutPut = `${x} * ${y} = ${multipl}`;
console.log(multOutPut);

let division;
division = x / y;
console.log(division);
KivOutPut = `${x} / ${y} = ${division}`;
console.log(KivOutPut);

let remainder;
remainder = x % y;
console.log(remainder);
remOutPut = `${x} % ${y} = ${remainder}`;
console.log(remOutPut);

let d;
let e;
d = new Date();
e = d.getMonth();
e = d.getFullYear();
e = d.getDay();
e = d.getTime();
console.log(B);

let MyArr = [10, 20, 30, 40, 50];
let Q;
    MyArr.push(60);
    MyArr.unshift(5);
    MyArr.pop();
    MyArr.shift();
    MyArr.reverse();

   x = myArr.slice(1, 4);
   x = myArr.splice(1, 4);

   x = myArr.splice(2, 1)
console.log(x);
let t;
let fruits = ['mango', 'avocado', 'pineaple', 'orange'];
let crops = ['cassava', 'banana', 'potato', 'beans'];
let allTogether = [fruits, crops];
t = allTogether;
t = allTogether[1][2];
t = fruits.concat(crops)[4];
t = [...fruits, ...crops];

console.log(x);

let myarr =[1, 2, 3,4,5];
 myarr.reverse();
 myarr.unshift(6);
 myarr.push(0);
console.log(myarr);

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [ 5, 6, 7, 8, 9, 10];
let arr3 = arr1 +','+ arr2.slice(1);
let arr4 = `${arr1},${arr2.slice(1)}`;
console.log(arr4);

let v;
let personA = {
    name: 'Joanes Claudio',
    age:26,
    isCourageous: true,
    adress:{
        street: '320-GSN-RBV',
        city:'Gisenyi',
        province: 'west',
    },
    hobbies:['reading', 'jogging', 'swimming'],
}
v = person.name;
v = person['age'];
v = person.adress.street;
v = person.adress['province'];
v = person.hobbies;
v = person.hobbies[1];
delete person.age;
v = person;
person.maritalStatus = function (){
   console.log(`My name is ${person.name} and i'm single`);
};
person.maritalStatus();
console.log(x);

/*let obj1 = {
    a:1, b:2
};
let obj2 = {
    c:3, d:4
}
obj3 = {...obj1,...obj2};
let obj4 = Object.assign({}, obj1, obj2);

let todayTask = [
    {id: 1, task: 'go the market'},
     {id: 2, task: 'wash clothes'},
     {id: 3, task: 'cook the food'},
];
x = todayTask[1].task;
x = Object.keys(todayTask).length;
x = Object.values(todayTask);
x = Object.entries(todayTask);

let number = [10, 20, 30, 40];
let [first,...rest] = number
x = number;
console.log(first, rest);*/

let library = [
    {title:'African culture',
    author:'Ngugi wa Thiong',
    status:{
        own:true,
        reading: false,
        read:false,
    }

    },
    {title:'Thousand Hills',
    author:'A.Kagame',
    status:{
        own:true,
        reading: false,
        read:false,
    }

    },
    {title:'Our Unity',
    author:'A.Bigirumwami',
    status:{
        own:true,
        reading: false,
        read:false,
    }

    },
];
library[0].status.read = true,
library[1].status.read = true,
library[2].status.read = true,

console.log(library);

const libraryJSON = JSON.stringify(library);
console.log(libraryJSON);
let Z = 50;
if(true){
    const x = 100;
  if(x === 100){
   const y = 200;
   console.log(x + y + Z);
  }
} 
console.log(Z);
function add(a, b){
    return a + b;
    
}

const add = (a, b) => {
    a + b;
};

const add = (a, b) => a + b;
console.log(add(10,20));
const createObj = () =>({
    name: 'Joanes',
});
console.log(createObj());

(function(name) {console.log('My name is' + name)
})('Joanes');

function getCelcius(f){
    const celcius = ((f - 32) * 5/9);
    return celcius;
};
console.log( `the temperature is ${getCelcius(60)} \xB0C`);

function minMax(arr){
const min = Math.min(...arr);
const max = Math.max(...arr);
return{
    min,
    max
}
};
console.log(minMax([1, 2, 3, 4, 5]));
//IIFE

((length, width) => {
    const area = length * width;
    const output = `The area of rectangle with the length of ${length} 
    and the width of ${width} is ${area}.`
    console.log(output);

})(10, 5);

const D1= new Date();
const hour = D1.getHours();

if(hour < 12){
console.log('Good morning');
if(hour === 8){
    console.log('wake up and learn JS')
}
}
else if( hour < 18){
    console.log('Good afternoon');
    if(hour === 15){
        console.log('You can go to relax')
    }
}
else{
console.log('Good night')
if (hour === 22){
    console.log("It's enough now, you can go to sleep")
}
};

if(hour >= 10 && hour <= 15){
console.log("It's time to call your love")
};

if (hour <=15 || hour <= 21){
    console.log("It's time to go around the table")
}

console.log(D1);

const Date = new Date(2024, 4, 29, 16, 0, 15);
const month = Date.getMonth();

switch(month){
    case 1: 
    console.log("It's January");
    break;
    case 2: 
    console.log("It's February");
    break;
    case 3:
    console.log("It's March");
    break;
    default:
    console.log("None of the provided months is correct");
};

const children = 0;
if(!isNaN(children)){
    console.log(`You have ${children} children`);
}
else{
    console.log('Number of children is required')
};
let Age = 17;
if(Age >= 18){
console.log('You can vote');
}
else{
    'You cannot vote'
};

Age >= 18 ? console.log('You are mature to vote') : console.log('You are not yet mature');

function addNumber(num1, num2){
 return num1 + num2;
};
console.log(addNumber(21, 9));

let Myarr = [1, 5, 10, 15, 20];
let result = Myarr.reduce((accumulator, currentValue) => {
   return accumulator + currentValue;
}, 0);
console.log(result);

function articulateString(str){
let result = '';
for(let i = 0; i< str.length; i++ ){
    if (str[i]=== str[i].toUpperCase())
    { result += str.toLowerCase();
    }
    else {result += str[i].toUpperCase();
    }
}
return result;
}
console.log(articulateString('Hello Joanes'));

let Sets = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenNumbers = Sets.filter(function(set){
    return set % 2 === 0;
});

console.log(evenNumbers);

const companies = [
    {name: 'MTN', category:'telecommunication', start : 1997, end: 2030},
    {name: 'Bralirwa', category:'Drinking ', start : 1950, end: 2025},
    {name: 'Building Co.Ltd', category:'construction', start : 2005, end: 2015},
    {name: 'Airtel', category:'telecommunication', start : 2020, end: 2031},
    {name: 'Skol co. Ltd', category:'Drinkinng', start : 2000, end: 2005},
    {name: 'NPD co.Ltd', category:'construction', start : 2010, end: 2030},
    {name: 'Young Money co.Ltd', category:'Entertainment', start : 2015, end: 2020},
];

let teleCompany = companies.filter(function(company){
    return company.category === 'telecommunication';
});
console.log(teleCompany);
let oldCompany = companies.filter(function(company){
    return company.start >= 1950 && company.end <= 2020;
});

console.log(oldCompany);

let veryOldComp = companies.filter(function(company){
    return company.end - company.start >= 30;
});

console.log(veryOldComp);


let numbers = [10, 20, 30, 40, 50];
let doubledNumb = numbers.map(function(number){
    return number * 2;

});
console.log(doubledNumb);

let doubledNumb2 = [];
numbers.forEach(function(number){
doubledNumb2.push(number * 2);
});
console.log(doubledNumb2);

let Allnumbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let EvenNumbers = Allnumbers.filter(function(number){
return number % 2 === 0;
})
.map(function(even){
    return even * 2;
})
.map(function(doubledEven){
    return doubledEven - 3;
})
console.log(EvenNumbers);

let NewSum= Allnumbers.reduce(function(accumulator, currentValue){
return accumulator + currentValue;
}, 0);
console.log(NewSum);

let people = [
    {firstName: 'Joanes',
    lastName: 'Claudio',
    email: 'joanesclaudio10@gmail.com',
    age : 25},

    {firstName: 'Beni',
    lastName: 'Dama',
    email: 'benidama02@gmail.com',
    age : 30},

    {firstName: 'Cynthia',
    lastName: 'Niyigena',
    email: 'niyichan1@gmail.com',
    age : 23},

    {firstName: 'Paccy',
    lastName: 'Nziza',
    email: 'paccynziza@gmail.com',
    age : 28},
];

let youngAge = people.filter(function(person){
return person.age <= 25;
})
.map(function(person){
    return {name: person.firstName + ' ' + person.lastName,
        email: person.email}
});
console.log(youngAge);

let Numbers = [2, -30, 50, 20, -12, -9, 7];
let positiveNumbs = Numbers.filter(function(number){
return number >= 0;
}).reduce(function(accumulator, currentValue){
return accumulator + currentValue;
}, 0);
console.log(positiveNumbs);

let words = ['coder', 'programmer', 'developer'];
capitalizedWord = words.map(function(word){
return word[0].toUpperCase() + word.slice(1)
});
console.log(capitalizedWord);