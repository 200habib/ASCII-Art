//  output :
// ***********
//  *********
//   *******
//    *****
//     ***
//      *

etoile = "";

let count = 0

for(let i=5;i>=0;i--)
{

for (let l = 4; l >=i; l--) {
         console.log(l);
    etoile = etoile + " ";
    count++
}

for(let j=0;j<=i*2;j++)
{    
etoile = etoile + "*";
}
etoile = etoile +"\n"
}

console.log(etoile);