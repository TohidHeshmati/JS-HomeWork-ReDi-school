let booksArray = ['Anna Karenina', 'Madame Bovary', 'War and Peace'];
console.log(booksArray[0]);

booksArray.forEach(function (bookname, inPositionNumber){
    console.log("the book Name is: "+bookname, " and it is in Position: "+inPositionNumber);
});