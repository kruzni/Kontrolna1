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
console.log(parni());

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
console.log(tjedan(4));

//! //3 (4 BODA)
//Napisi funkciju koja okrece uneseni string i broji charactere ne uzimajuci u obzir prazna mjesta (eng. whitespaces)
//INPUT: "Pisanje zadataka nije jednostavan posao";
//OUTPUT: ("oasop navatsondej ejin akatadaz ejnasiP", 35)

function okreni(strings){
    for(let i = 0; i<strings.length; i++){
        if(strings.length<1){
            return -1;
        }
        else if(strings.length>1){
            
        }
    }
}

console.log(okreni("Nešto je okej"));