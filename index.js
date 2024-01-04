let countEl= document.getElementById("count-el");
let saveEl= document.getElementById("save-el");
console.log(countEl);
console.log(saveEl);

let count=0;

function increment(){
    count += 1;
    countEl.textContent=count;
}
function save(){ 
    let countMsg = count+" - ";
    // saveEl.innerText+= countMsg; 
    console.log(count);
    saveEl.textContent += countMsg;
    countEl.textContent=0;
    count=0;    
}