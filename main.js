"use strict";
// Array of magician's name
const magicianNames = ["Harry Porter", "David Copperfield", "Professor Albus Dumbledore", "Ron Weasley"];
function show_magicians(magicians) {
    for (const item of magicians) {
        console.log(item);
    }
}
//Call the function to show the magician's names
show_magicians(magicianNames);
