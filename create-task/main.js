import './style.css'

//const cat = "https://randomfox.ca/floof"
//const dog = "https://dog-facts-api.herokuapp.com/api/v1/resources/dogs/all"
//const fact = "https://official-joke-api.appspot.com/random_joke";

//const cat = "http://shibe.online/api/cats"

//const apikey =
//"live_xiXRiLpizUwPBdLWpw9miwbyUjWdKECZjiGDjhaGRA1FsdiLQRUOUfUgfmbtZRqj";

async function getData(url) {
    try{
      const response = await fetch(url) //{ headers: { "x-api-key": apikey } });
      if(response.status <200 || response.status >299){
        console.log(response.status);
        throw error(response);
      }else {
        const data = await response.json();
        function createCards(data) {
      document.getElementById("api-response").insertAdjacentHTML ("beforeend",`<img src="${data}" alt="">`)};
        console.log(data)
        data.forEach((cat) => createCards(cat));
        //document.getElementById("api-response").textContent = data.fact;
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
  changetheme: document.getAnimations("theme"),
  history: document.getElementById("history"),
  remove: document.getElementById("remove")
}
console.log(DOMselectors);
  
DOMselectors.cat.addEventListener ("click", function (){
  getData(cat);
  })  

 // const cards = function (menu){ 
  //}, 
function remove(){
  let removebtn = document.getElementById(`remove`)
  removebtn.addEventListener("click", function(){
    document.getElementById(`display-card`).remove()
  })
}
remove(); 

DOMselectors.form.addEventListener("submit", function (event){
let result = DOMselectors.input.value
const url = `http://shibe.online/api/cats?count=${result}`;
event.preventDefault();
getData(url)
})