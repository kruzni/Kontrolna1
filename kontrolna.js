//1 (3 BODA)
//Napisi funkciju koja ispisuje parne brojeve od 0 do 100 (ukljucujuci 100)
function parni(){
    for(let i =0; i<101;i++){
        if(i%2==0){
            console.log(i);
        }
        else continue;
    }
}
//* console.log(parni());

//2 (3 BODA)
//Napisi funkciju koja koristi switch selekciju za pretvaranje numerickog unosa u dan u tjednu. Za neispravan unos ispisi prikladnu poruku.
//INPUT: 1; OUTPUT: "Ponedjeljak";
//INPUT: 5; OUTPUT: "Petak"; 

function tjedan(x){
    switch(x){
        case 1:
            console.log("Ponedeljak");
            break;
        case 2:
            console.log("Utorak");
            break;    
        case 3:
            console.log("Srijeda");
            break;
        case 4:
            console.log("Četvrtak");
            break;
        case 5:
            console.log("Petak");
            break;
        case 6:
            console.log("Subota");
            break;
        case 7:
            console.log("Nedelja");
            break;       
        default:
            console.log("Krivi unos!");
    }
}
//* console.log(tjedan(4));

//! //3 (4 BODA)
//Napisi funkciju koja okrece uneseni string i broji charactere ne uzimajuci u obzir prazna mjesta (eng. whitespaces)
//INPUT: "Pisanje zadataka nije jednostavan posao";
//OUTPUT: ("oasop navatsondej ejin akatadaz ejnasiP", 35)

function okreni(strings){
    var brojac = 0;
    for(let i = 0; i<strings.length; i++){
        if(strings.length<1){
            return 0;
        }
        else if(strings.length>1){
            for(let j = strings.length; j>i; j--){
                return(strings[j-1]);
            }
        }
    }
}

console.log(okreni("Nešto je oke"));




//ZAMJENA ZA 5 (4 BODA)
//Napisi funkciju u obliku arrow functiona koja kvadrira i vraca dane inpute
//INPUT: [2, 4, 6, 0, 1]
//OUTPUT: [4, 16, 36, 0, 1]

const arrow = (x) => {
    var sum = 0;
    for(let i = 0; i<x.length; i++){
        return x[i] * x[i];
        
    }
};

console.log(arrow([11,12]));

//6 (4 BODA)
//! Napisi funkciju koja vraca sve dogadaje koji su se dogodili prije od vrijednosti iz ulaznog parametra
//INPUT: (someEvents, 1992)
//OUTPUT: [{eventName: "Izasao je Python", eventYear: 1991}, {eventName: "Izasao je C++", eventYear: 1985}]
/*
function dam(godina < someEvents.evenetYear){
    for(let i = 0; i<someEvents.length;i++){
        if(godina){

        }
    }
}


const someEvents = [
    {
        eventName: "Izasla je Java",
        eventYear: 1995,
    },
    {
        eventName: "Izasao je C#",
        eventYear: 2000,
    },
    {
        eventName: "Izasao je Python",
        eventYear: 1991,
    },
    {
        eventName: "Izasao je C++",
        eventYear: 1985,
    },
    {
        eventName: "Izasao je JavaScript",
        eventYear: 1995,
    },
];
*/