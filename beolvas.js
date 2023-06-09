
class Beolvas {
constructor() {
  console.log("beolvas")
  
  
  fetch('adatok.json').then(response => response.json())
  .then(data => {
    cicafule(data);
   
    
      
    }
    )
   
    }
  }
  function cicafule(data) {
    for (let index = 0; index < data.doboz.length; index++) {
      document.getElementById("tarolo").innerHTML += "<div class='kartya'>"+"<img src="+data.doboz[index].kupa+" alt='kupa'>"+"<br>"+data.doboz[index].name +"<br>"+data.doboz[index].prize+
      "<button id='kedvenc"+index+"'>"+"kedvencek"+"</button>"+"</div>"

    }
    
    
  }
  export default Beolvas;
  
