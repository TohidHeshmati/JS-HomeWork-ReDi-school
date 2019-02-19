let booksArray = [['Anna Karenina','Leo Tolstoy'], ['Madame Bovary', 'Gustave Flaubert'],['War and Peace', 'Leo Tolstoy'] ];
console.log(booksArray[0]);

booksArray.forEach(function (bookName, index){
    // i assume that it returns an array so i will go for first as book name and second as author

    console.log("the book Name is: "+bookName[0]+" and the author is: "+bookName[1]+ " at shelf: "+index);
});
console.log("\nnow push Nabakov at the end of the list using bookArray.push(item)\n");

booksArray.push(["Lolita", "Nabakov"]);
booksArray.forEach(function (bookName, index){
    // i assume that it returns an array so i will go for first as book name and second as author

    console.log("the book Name is: "+bookName[0]+" and the author is: "+bookName[1]+ " at shelf: "+index);
});
console.log("\n");

console.log("\nnow removing Nabakov from the end of the list using bookArray.pop(item)\n");
booksArray.pop();
booksArray.forEach(function (bookName, index){
    // i assume that it returns an array so i will go for first as book name and second as author

    console.log("the book Name is: "+bookName[0]+" and the author is: "+bookName[1]+ " at shelf: "+index);
});
console.log("index = "+ booksArray.indexOf(['Madame Bovary', 'Gustave Flaubert']));
// how is that i get index -1 ? hmmmm

//booksArray.splice(number); cuts the array till number

console.log("\n"+booksArray);