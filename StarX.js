// output:

// ***      ***
//   ***  ***
//     ***
//   ***  ***
// ***      ***



let chaine = "";
  
for(let i=0; i<5; i++) {
  for(let j=0; j<5; j++) {
    if(j == 5-1-i || i == j) {
      console.log(j == 5-1-i);
      console.log(5-1-i);
      console.log(i+ "ma j " + j);
      chaine += "***";
    } else {
      chaine += "  ";
    }
  }
  chaine += "\n";
}

console.log(chaine);