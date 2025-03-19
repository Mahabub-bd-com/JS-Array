/**
 * looping technic
 * for loop
 * while loop
 * do while ----> ignore
 * for of -----> array loop korar jonno use kori
 * for in -----> object loop korar jonno use kori
 * 
 */

const friends = ['Habib', 'Ruhan', 'Jamil', 'Jamir', 'Rob'];

for (const friend of friends){
    console.log ('Dear Friend =', friend);
}

for (let i = 0; i < 10; i++){
    console.log('i values', i)
}

console.log('length Position =', friends[2], friends[0], friends[1]);   // multi position findout 
console.log('length =', friends.length);    // lenght means total values 