// output :

// ******
// *****
// ****
// ***
// **
// *

etoile = "";

for(let i=5;i>=0;i--)
    {

    for(let j=0;j<=i;j++)
    {    
    etoile = etoile + "*";
    }
    etoile = etoile +"\n"
}
console.log(etoile);