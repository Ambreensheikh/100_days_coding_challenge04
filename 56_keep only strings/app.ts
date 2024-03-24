//make a mixed array
let mixedArray = [10, "laptops", true, 6 ,  "books", false , "chairs"];
//show only string in new array
let newArray = mixedArray.filter(array=>typeof array === "string");
   console.log(newArray);
