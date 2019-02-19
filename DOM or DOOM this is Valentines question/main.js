let booksArray = [['Anna Karenina','Leo Tolstoy'], ['Madame Bovary', 'Gustave Flaubert'],['War and Peace', 'Leo Tolstoy'] ];
console.log(booksArray[0]);

booksArray.forEach(function (bookName, index){
    // i assume that it returns an array so i will go for first as book name and second as author

    console.log("the book Name is: "+bookName[0]+" and the author is: "+bookName[1]+ " at shelf: "+index);
});

