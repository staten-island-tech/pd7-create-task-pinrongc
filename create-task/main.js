import './style.css'

//const cat = "http://shibe.online/api/cats"

const history = [];

async function getData(url) {
    try{
      const response = await fetch(url) 
      if(response.status <200 || response.status >299){
        console.log(response.status);
        throw error(response);
      }else {
        const data = await response.json();
        function createCards(data) {
      document.getElementById("box").insertAdjacentHTML ("beforeend",`<img src="${data}" alt="">`)};
        console.log(data)
        data.forEach((cat) => createCards(cat));
        data.forEach((cat) => history.push(cat));
        console.log(history)
      }
      } catch (error){
        console.log(error);
        console.log("sad");
      } 
    
    }
    getData(cat);

const DOMselectors = {
  cat: document.getElementById ("cat"),
  form: document.getElementById ("form"),
  input: document.getElementById ("input"),
  theme: document.getElementById("theme"),
  history: document.getElementById("history"),
  remove: document.getElementById("reset"),
  display: document.getElementById("apiresponse")
}
console.log(DOMselectors.theme);

DOMselectors.form.addEventListener("submit", function (event){
let result = DOMselectors.input.value
const url = `http://shibe.online/api/cats?count=${result}`;
event.preventDefault();
getData(url);
clear();
})

function clear(){
  DOMselectors.input.value= "";
}

const restart = 
document.getElementById(`reset`);
restart.addEventListener("click", () => {
  document.getElementById("box").innerHTML = "";
})


DOMselectors.theme.addEventListener("click", function() {
  if(document.body.classList.contains("dark")){
  document.body.classList.add("light");
  document.body.classList.remove("dark");
  }
  else{
   document.body.classList.add("dark");
   document.body.classList.remove("light");
 } 
 }); 

/* function remove(){
  let removebtn = document.getElementById(`remove`)
  removebtn.addEventListener("click", function(){
    document.getElementById(`display`).remove()
  })
}
remove();   */  

DOMselectors.history.onclick =() => {
  console.log(history);
  document.getElementById("box").innerHTML = "";
  history.forEach((cat) => createCards(cat));
  function createCards(cat) {
    document.getElementById("box").insertAdjacentHTML("beforeend",`<img src="${cat}" alt="">`)};
 } 

