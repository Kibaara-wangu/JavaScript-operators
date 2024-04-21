let fruits = ["Mango","Banana","Orange"];

let arr= new Array(20,3);

console.log({fruits});
console.log({arr});

// replace
console.log('fruits',fruits[1]);
fruits[2]="Kiwi";
console.log({fruits});

// last element using indexes
console.log('last item',fruits[fruits.length-1]);

// using slice methed to find the last element
let slicefruits = fruits.slice(-1);
console.log({slicefruits});

// add items at the end of an array
let addEnd = fruits.push('pawpaw');
console.log({fruits});

// add items at the beginning of an array
let addStart = fruits.unshift('pinapple');
console.log({fruits});

// remove at the end of an array
let removeEnd = fruits.pop();
console.log({fruits});

// remove at the start
let removeStart = fruits.shift();
console.log({fruits});

// adding an array
let items = [20,30,40,50,60]
let add = items.reduce((acc,curr)=> acc+ curr);
console.log({add});

let multiply = items.map(item =>item*2);
console.log({multiply});

let square = [];
items.forEach(item => {
    const multiply = item * item;
    console.log({multiply});
    square.push(multiply)
});
console.log({square});