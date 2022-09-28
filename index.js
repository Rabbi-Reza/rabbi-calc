let firstNumGL = 0
let secondNumGL = 0

const AddTwo = (firstNum, secondNum) => {
    firstNumGL = firstNum
    secondNumGL = secondNum

    return firstNum + secondNum;
}

const CheckEven = (input) => {
    if(input === 0)
        return true;
    else if (input % 2 === 0) {
        return true;
    }
    else if (input % 2 !== 0) {
        return false;
    }
}

const ViewResultAdd = () => {
    var tag = document.createElement("p"); // <p></p>
    var text = document.createTextNode(firstNumGL + secondNumGL); 
    tag.appendChild(text);
    // var element = document.getElementsByTagName("body")[0];
    var element = document.getElementsByTagName("div");
    // var element = document.getElementsByClassName("add-show")
    element.appendChild(tag); 
}

module.exports = {
    AddTwo,
    CheckEven, 
    ViewResultAdd,
}