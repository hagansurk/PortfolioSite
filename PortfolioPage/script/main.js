function validateForm() {
    var textin = document.getElementById('textar').value;
    var firstlast = document.getElementById('name').value;
    var names = twonames(firstlast);
    if (!names) {
        return false;
    }
    var message = textval(textin);
    if (!message) {
        return false;
    } 
}
function textval(textin) {
    var textRGEX = /\S/;
    var textResult = textRGEX.test(textin);
    if (textResult == false) {
        alert("Please enter Message");
        return false;
    }
    else {
        return true;
    }
}
function twonames(firstlast) {
    var nameRGEX = /^[a-zA-Z]+\s[a-zA-Z]+$/;
    var nameResult = nameRGEX.test(firstlast);
    if (nameResult == false) {	
        alert("Please enter first and last name");
        return false;
    }
    else {
        return true;
    }
}
