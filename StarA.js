//  output :

//      **     
//     ** **
//    **   **
// ***********
//  **       **
// **         **





let chaine = "";

for(let i=0; i<7; i++) {

  for(let j=0; j<11; j++) {
    if (i==3) {
        for (let index = 1; index < 1.5; index++) {
            chaine += "*";
        }
    } else {
         if(j==i+5 || j == 5-i) {
          console.log(j==i+5);
                  chaine += "**";
                } else {
                  chaine += " ";
            }
    }
           
  }
  chaine += "\n";
}

console.log(chaine);