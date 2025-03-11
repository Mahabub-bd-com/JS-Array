// Array includes
const friend = ['balam', 'kalam', 'karim', 'rahim', 10, 20, 30, '40'];

console.log(friend.includes('karim')); // includes মানে ভেতরে মান আছে কি নাই এটা চেকের জন্য। output true
console.log(friend.includes('malek')); // includes মানে ভেতরে মান আছে কি নাই এটা চেকের জন্য। output false

if(friend.includes('balam')){
    console.log('balam bari ache');
}

else{
    console.log('balam bari nai');
}