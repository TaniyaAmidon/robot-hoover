import { readFileSync } from 'fs';

var array = readFileSync('input.txt').toString().split("\n");

const room = {x: parseInt(array[0].split(" ")[0]), y: parseInt(array[0].split(" ")[1])};
const robot = {x: parseInt(array[1].split(" ")[0]), y: parseInt(array[1].split(" ")[1])};

const dirtPatch = {x:0, y: 0};

const dirts =  array.slice(2,array.length-1).forEach( dirt => {
    const eachDirt = dirt.split(" ");
    dirtPatch.x = parseInt(eachDirt[0]);
    dirtPatch.y = parseInt(eachDirt[1]);
    console.log(dirtPatch);
});

const directions = array[array.length -1];
let  dirtPatchesCleaned = 0
console.log(dirts);