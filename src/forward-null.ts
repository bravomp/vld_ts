function forward_null_1(x: any) {
    if(x !== null) {
    // Cond: x will be null on the 'else' case of the if.
    // Fixed code 1
    // Desc: call x only on not null
    // x();
    }
    // Defect code 1
    // Desc: x can possibly null, but calling x anyway
    x();
    return;
}

function forward_null2(userInput: string) {
    // Defect code 2
    // Desc: name is implicitly assigned to undefined
    var name;  
    // Fixed Code 2
    // initialize name
    // var name = "";
    var pos = userInput.indexOf("name:");
    if (pos >= 0) {
        name = userInput.substring(pos + "name:".length);
    }
    // Cond: name will be undefined on the 'else' if not init.
    return name.substring(0,8);
}