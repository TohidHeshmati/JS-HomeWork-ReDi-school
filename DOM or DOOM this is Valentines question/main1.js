let nameGetter = document.createElement("input");
nameGetter.placeholder = "put your friends name";
document.getElementById("addFriendHTML").appendChild(nameGetter);

// why this happens and how the hirarchy works should be investigated ;)
//let addFriendButtun = document.createElement("button");
//addFriendButtun.value = "add this friend";
//addFriendButtun.appendChild(nameGetter);

let friendsArray = [];
let orderedListElement = document.getElementById("orderedList");

function friendsAdder(){
    let tempFriendsName = nameGetter.value;
    friendsArray.push(tempFriendsName);

    let str = friendsArray.toString();
    orderedListElement.value = str;


}




