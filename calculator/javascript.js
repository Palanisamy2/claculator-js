
function display( num ) {
    let output = document.getElementById("screen-display");
    output.value += num;
    return num;
}
 
function alc() {
    let output = document.getElementById("screen-display");
    output.value ="";
}

function del() {
    let output = document.getElementById("screen-display");
    output.value = output.value.slice(0,-1);
}
function result() {
    let output = document.getElementById("screen-display");
    try {
        output.value = eval(output.value);
    }
    catch {
        alert("ivalid calculation")
    }

}