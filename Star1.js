// output :
// *
// ***
// *****
// *******
// *********

etoile = "";

for(let i=0;i<5;i++)
{

    for(let j=i;j>i;j--)
    {       
        for(let s=0;s<5;s++)
            {       
                console.log(s);
                etoile = etoile + "5";
            }
    }

    for(let j=0;j<=i*2;j++)
    {    
        etoile = etoile + "*";
    }
    etoile = etoile +"\n"
}
console.log(etoile);