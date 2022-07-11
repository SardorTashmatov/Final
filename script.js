const myCity = {
city:'New york'

}

myCity.city = 'Las VEgas'
console.log(myCity);

const a = 10
let b = a

b = 30
console.log(a);
console.log(b);

const person = {
    name: "bob",
    age: 25
}

const person2 = Object.assign({}, person)

person2.age = 26

console.log(person2.age);
console.log(person.age);

const myArray = [1, 2, 3]

console.log(myArray);

const myArray2 = new Array(1, 2, 3)

console.log(myArray2);

for (let i = 0; i < 5; i++) {
    console.log(i);
}


async function getDashboardData(url = '/data.json') {
    const response = await fetch(url);
    const data = await response.json();

    return data;

}



    