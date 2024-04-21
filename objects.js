const cup = {
    color: 'red',
    shape: 'circular',
    weight: '50grams',
    size: 'medium',
    description:{
        drinkType: 'Tea',
        temperature:'Hot'
    },
    drink: function(){
        console.log('Use me to drink');
        console.log((`The main purpose of this cup is to drink ${this.description.temperature} ${this.description.drinkType}`));
    }
};
console.log({color: cup.color});
console.log('size',cup['size']);
console.log('temperature', cup.description.temperature);

cup.material = 'ceramic';
console.log({cup});

cup.color = 'green'
console.log({cup});


// delete a property
delete cup.material;
console.log({cup});


// methods
cup.drink();


const keys =Object.keys(cup)
console.log({keys});


const values =Object.keys(cup)
console.log({values});


Object.keys(cup).forEach(item =>{
    console.log({key:item, values:cup[item]});
});


