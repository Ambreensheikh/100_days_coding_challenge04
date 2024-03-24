"use strict";
//make a mixed array
let mixedArray = [10, "laptops", true, 6, "books", false, "chairs"];
let newArray = mixedArray.filter(array => typeof array === "string");
console.log(newArray);
