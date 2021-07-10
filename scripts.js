


function nacrtajBrojcanik(id){
    
    var sviSegmenti = [];
    var mainDiv = document.getElementById('clock');
    var wrapperDiv = document.createElement('div');
   
    wrapperDiv.className='main';
    mainDiv.appendChild(wrapperDiv);

   
    for( let i = 1; i < 8; i++){
        var segment = document.createElement('div');
        segment.className = 'segment s'+i;
        wrapperDiv.appendChild(segment);
        sviSegmenti.push(segment);
    
    }
    mainDiv.appendChild(wrapperDiv);

function ukljuci(segment){
    segment.classList.remove('ugasen');
}



 function postaviBroj(broj){
     for( let i = 0; i < sviSegmenti.length; i++ ){
     sviSegmenti[i].classList.add('ugasen');

     }
   

     switch (broj) {

        case 0:
        ukljuci(sviSegmenti[0]);
        ukljuci(sviSegmenti[1]);
        ukljuci(sviSegmenti[2]);
        ukljuci(sviSegmenti[4]);
        ukljuci(sviSegmenti[5]);
        ukljuci(sviSegmenti[6]);
        break;

        case 1:
        ukljuci(sviSegmenti[2]); 
        ukljuci(sviSegmenti[5]);  
        break;

        case 2:
        ukljuci(sviSegmenti[1]);
        ukljuci(sviSegmenti[2]);
        ukljuci(sviSegmenti[3]);
        ukljuci(sviSegmenti[4]);
        ukljuci(sviSegmenti[6]);
        break;

        case 3:
        ukljuci(sviSegmenti[1]);
        ukljuci(sviSegmenti[2]);
        ukljuci(sviSegmenti[3]);
        ukljuci(sviSegmenti[5]);
        ukljuci(sviSegmenti[6]);
        break;

        case 4:
        ukljuci(sviSegmenti[0]);
        ukljuci(sviSegmenti[3]);
        ukljuci(sviSegmenti[2]);
        ukljuci(sviSegmenti[5]);
        break;

        case 5:
        ukljuci(sviSegmenti[0]);
        ukljuci(sviSegmenti[1]);
        ukljuci(sviSegmenti[3]);
        ukljuci(sviSegmenti[5]);
        ukljuci(sviSegmenti[6]);
        break;

        case 6:
            ukljuci(sviSegmenti[0]);
            ukljuci(sviSegmenti[1]);
            ukljuci(sviSegmenti[3]);
            ukljuci(sviSegmenti[5]);
            ukljuci(sviSegmenti[6]);
            ukljuci(sviSegmenti[4]);
            break;

        case 7:
            ukljuci(sviSegmenti[1]);
            ukljuci(sviSegmenti[2]);
            ukljuci(sviSegmenti[5]);
            break;

        case 8:
            ukljuci(sviSegmenti[0]);
            ukljuci(sviSegmenti[1]);
            ukljuci(sviSegmenti[2]);
            ukljuci(sviSegmenti[3]);
            ukljuci(sviSegmenti[4]);
            ukljuci(sviSegmenti[5]);
            ukljuci(sviSegmenti[6]);
            break;
    
        case 9:
            ukljuci(sviSegmenti[0]);
            ukljuci(sviSegmenti[1]);
            ukljuci(sviSegmenti[2]);
            ukljuci(sviSegmenti[3]);
            ukljuci(sviSegmenti[5]);
            ukljuci(sviSegmenti[6]);
            break;


     }

  
 }

 return {
    setTime: postaviBroj
   
}





    
}


var date = new Date();
var sati = date.getHours().toString().split('');





  
var br1 =  nacrtajBrojcanik('clock');
br1.setTime(+sati[0]);

var br2 = nacrtajBrojcanik('clock');
br2.setTime(+sati[1]);


var minute1 = nacrtajBrojcanik('clock');
var minute2 = nacrtajBrojcanik('clock');
  
var secnd1 =  nacrtajBrojcanik('clock');
var secnd2 = nacrtajBrojcanik('clock');




setInterval(function(){

    var min = new Date().getMinutes().toString().split('');
    minute1.setTime(+min[0]);
    minute2.setTime(+min[1]);
  
  

  },100
  
  )

setInterval(function(){
    var sec = new Date().getSeconds().toString().split('');
    secnd1.setTime(+sec[0]);
    secnd2.setTime(+sec[1]);

},100)



function dvijeTacke(){
    var mainDiv = document.getElementById('clock');
    var tacke = document.createElement('div');
    var tacka1 = document.createElement('span');
    var tacka2 = document.createElement('span');
    var tacka3 = document.createElement('span');
    var tacka4 = document.createElement('span');
    tacka1.classList.add('tacka1');
    tacka2.classList.add('tacka2');
    tacka3.classList.add('tacka3');
    tacka4.classList.add('tacka4');
    tacke.appendChild(tacka1);
    tacke.appendChild(tacka2);
    tacke.appendChild(tacka3);
    tacke.appendChild(tacka4);

    mainDiv.appendChild(tacke);

    

}

dvijeTacke();


   
