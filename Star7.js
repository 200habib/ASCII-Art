//  output  :

//       *
//      ***
//     *****
//    *******
//   *********

etoile = "";

let count = 0
for(let i=0;i<5;i++)
{

for (let l = 4; l >=i; l--) {
    console.log();
    etoile = etoile + " ";
    
}

for(let j=0;j<=i*2;j++)
{    
etoile = etoile + "*";
}
etoile = etoile +"\n"
}

console.log(etoile);