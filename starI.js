// output:

//    ***
//    ***
//    ***
//    ***
//    ***

etoile = "";

for(let i=0;i<5;i++)
    {
    for(let j=0;j<10;j++)
    {    if (j==3) {
         etoile += "***";
    } else {
        etoile += " ";
    }
           
    }
    etoile +="\n"
}
console.log(etoile);