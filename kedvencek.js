
class Kedvencek{
    
    constructor(){
        for (let index = 0; index < array.length; index++) {
            document.getElementById("kedvenc"+index).addEventListener("click",hozzad(index))
            
        }}
   

}
function hozzad(index) {
    document.getElementById("tarolo2").innerHTML += doboz[index].name;
    
    
   

}
export default Kedvencek
