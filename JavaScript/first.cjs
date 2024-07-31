let a={
    name:"Priya",
    address:"Sonarpur",
};

function printDetails(){
    return "My name is"+a.name;
}

exports.myfun=printDetails;

//exports --> object
// console.log(typeof exports);