let person = {
    name : "scott",
    familyName: "fitzgerald",
    book: " This Side of Paradise",
    toText : function () {
        console.log("the "+this.book+ " by "+ this.name);
    }
}
let person2 = {
    name : "leo",
    familyName: "tolstoy",
    book: " war and peace",
    toText : function () {
        console.log("the "+this.book+ " by "+ this.name);
    }
}
let person3 = {
    name : "charlz",
    familyName: "Dickens",
    book: " Great Expectations",
    toText : function () {
        console.log("the "+this.book+ " by "+ this.name);
    }
}


let personArray = [person,person2,person3];

for (let i= 0; i<personArray.length ; i++){
    console.log(personArray[i].name);
}
personArray.forEach(function (personOfInterest) {
    personOfInterest.toText();
});

