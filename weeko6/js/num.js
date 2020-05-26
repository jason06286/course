// Number
let add = document.querySelector('#add');
let remove = document.querySelector('#remove')
var num = document.querySelector('#numInput').value
console.log(num);
console.log(add);
console.log(remove);
function numInput(e) {  
    for (let i =parseInt(num); i <100; i++){
        let number=i+e;  
        document.querySelector('#numInput').setAttribute('value',number)
        console.log(number);
        return
    }
        // let number=parseInt(num)+e;

};
