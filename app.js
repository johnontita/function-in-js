// function average(science,maths){
//     console.log(science,maths);
//     const mean='science was ${} marks maths was${} marks'
// // }

// function averageMarks(science,maths){
//     console.log('you have passed')

// }
// averageMarks();//calling a function

// function fruitProcessor(apples,oranges){
//     console.log(apples,oranges);
//     const juice=`Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;

// } 
// fruitProcessor(10,300);

// function sumMarks(science,maths,english,kiswahili){
//     const total=`John scored science ${science},maths ${maths}, english ${english} and kiswahili ${kiswahili},`
//     console.log(total)
//     return total
// }
// sumMarks(60,70,65,60);
 
function averageWeight(Sam,Ruth,John,Paul){
    return(Sam+Ruth+John+Paul)/4;//returns the result

}
const average=averageWeight(60,58,68,70)
console.log(`the average is ${average}kg`)


//function expression method
const meanHeight=function(Dennis,Erick,Justine,Joshua){
    return (Dennis+Erick+Justine+Joshua)/4

} 
const height=meanHeight(1.56,1.68,1.46,1.40)
console.log(height)


//arrow functions,we use curly braces when the codes are many
const yearsLeftRetirement=birthYear=>{
    const age =2023-birthYear
    const retirement=60-age
    return`${retirement} years remaining to retirement`
     
}
console.log(yearsLeftRetirement(1975))

