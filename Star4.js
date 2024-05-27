//  output :

// ***************
//  ************
// * ********* *
// ** ****** **
// *** *** ***
// **** * ***


etoile = "";

let count = 4

for(let i=5;i>=0;i--)
{

for (let l = 4; l >=i; l--) {
    
    // console.log("count ecco "+i);
    // console.log("sotto insieme di i ecco "+l);
    if (l==i) {
        etoile = etoile + " ";
        // console.log(count);
        count+=l
    } else {
        etoile = etoile + "*";
    }
    
}

for(let j=0;j<=i*2;j++)
{    
etoile = etoile + "*";
}

for (let l = 0; l <4; l++) {
    
    if (1+l==i) {
        etoile = etoile + " ";
        console.log(count);
        count+=l
    } else {
        if (l==0 && i==0) {
            etoile = etoile + " ";
        } else {
            console.log("valore di l "+l);
        console.log("risultato della valore  di i "+l);
        etoile = etoile + "*";
        }
        
    }
    
}

etoile = etoile +"\n"
}

console.log(etoile);