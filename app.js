//here am creating a weakMap
const MyMap = new WeakMap();

//here is my object 
const Details = {
    location: 'Kampale',
    population: 300
}

//here using weakMap to add more infor to my Details object
MyMap.set(Details,{Road: 'Kiraka RD ',Animals:['Sheep','cattle','Goats','Hens']}) 

console.log(MyMap.get(Details) );
console.log(Details);