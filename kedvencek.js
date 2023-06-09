class kedvencek{
    constructor(){
        for (let  index  = 0; index  < 3;  ++index) {
            document.getElementById("kedvenc"+index).addEventListener("click",hozzad)
            
        }
    }

}




function hozzad() {
    $("kedvenc").click(function () {
      $.getJSON("adatok.js", function (result) {
        $.each(result, function (i, field) {
          $("tarolo").append(field + " ");
        });
      });
    });
  };

export default kedvencek