// output:

// *******
//  **    **
//  **    **
// *******
//  **    **
//  **    **
// *******


let chaine = "";


for(let i=0; i<7; i++) {

  for(let j=0; j<7; j++) {
    if (i==0 || i ==3 || i==6) {

        for (let P = 0; P < 1; P++) {
            chaine += "*";
            
        }
    } else {
        if (j==1 || j==6) {
         chaine += "**";
    } else {
        chaine += " ";
    }
    }
   
                 
          
    
           
  }
  chaine += "\n";
}

console.log(chaine);