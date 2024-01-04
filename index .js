let count = 0;
let saveEl =document.getElementById("save-el")
let countEl = document.getElementById("count-el");
function increment() {
  count += 1;
  countEl.innerText = count;
}

function dec() {
  count -= 1;
  countEl.innerText = count;
}
function save(){
let countStr= count+" - "
// diffrence between innertext orr text content
saveEl.textContent += countStr


console.log(count)
}

//                                                       string in java script
// let Name = "John";
// let message = "Hello !";
// console.log(Name + "," + message);

// let name = "hy"
// let messsage ="how are you" 

// let welcomeEl = document.getElementsByid(welcome-el)
// welcomeEl.innerText = Name + message
