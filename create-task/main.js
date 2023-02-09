import './style.css'

/* const cat = "https://catfact.ninja/fact?max_length=140"
const dog = "https://dog-facts-api.herokuapp.com/api/v1/resources/dogs/all"
 */

const fact = "https://official-joke-api.appspot.com/random_joke";

const DOMselectors = {
button: document.getElementById ("api")
}

async function getData(url) {
    try{
      const response = await fetch(url);
      if(response.status <200 || response.status >299){
        console.log(response.status);
        throw error(response);
      }else {
        const data = await response.json();

        document.getElementById("api-response").insertAdjacentHTML("beforeend", `${data.setup} ${data.punchline}`);
        console.log(data)}

    } catch (error){
        console.log(error);
        console.log("sad");
      } 
    }
    
    getData(fact);
    
      DOMselectors.api.addEventListener ("click", function (){
        getData(fact);
        })  
    

