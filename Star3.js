// **** * ***
// *** *** ***
// ** ****** **
// * ********* *
//  ************



etoile = "";

let count = 4

for(let i=0;i<5;i++)
{

for (let l = 4; l >=i; l--) {

    if (l==i) {
        etoile = etoile + " ";
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
        etoile = etoile + "*";
        }
        
    }
    
}

etoile = etoile +"\n"
}

console.log(etoile);