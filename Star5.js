// output :
// 
// ***********
//  *********
//   *******
//    *****
//     ***
//      *
//     ***
//    *****
//   *******
//  *********
// ***********



etoile = "";

let count = 0

for(let i=5;i>=0;i--)
{

for (let l = 5; l >=i; l--) {
    etoile = etoile + " ";
    count++
}

for(let j=0;j<=i*2;j++)
{    
etoile = etoile + "*";
}
etoile = etoile +"\n"
if (i==0) {
    
}
}


for(let i=1;i<6;i++)
    {
    
    for (let l = 5; l >=i; l--) {
        etoile = etoile + " ";
    }
    
    for(let j=0;j<=i*2;j++)
    {    
    etoile = etoile + "*";
    }
    etoile = etoile +"\n"
    }
console.log(etoile);