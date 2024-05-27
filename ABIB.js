//      **     
//     ** **
//    **   **
// ***********
//  **       **
// **         **

// *******
//  **    **
//  **    **
// *******
//  **    **
//  **    **
// *******

//    ***
//    ***
//    ***
//    ***
//    ***

// *******
//  **    **
//  **    **
// *******
//  **    **
//  **    **
// *******





let chaine = "";


for(let i=0; i<7; i++) {

    for(let j=0; j<11; j++) {
      if (i==3) {
          for (let index = 1; index < 1.5; index++) {
              chaine += "*";
          }
      } else {
           if(j==i+5 || j == 5-i) {
                    chaine += "**";
                  } else {
                    chaine += " ";
              }
      }
             
    }
    chaine += "\n";
  }


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
  chaine += "\n";

for(let i=0;i<5;i++)
    {
    for(let j=0;j<10;j++)
    {    if (j==3) {
         chaine += "***";
    } else {
        chaine += " ";
    }
           
    }
    chaine +="\n"
} 

chaine += "\n";

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