// let age = 18;

// if(age >= 18){
//     console.log(`you are not eligible to enter this site`);
// }
// else{
// console.log(`you are eligible to enter`);
// }


// let isStudent = false;

// if(isStudent){
//     console.log(`you are a student`);
// }
// else{
//     console.log(`you are not a student`)
// }


    let isStudent = false;
// if(age >=18){
//     console.log(`you are ready to get a license `);
//     if(isStudent){
//         console.log(`you are a student`);
//     }
//     else{
//         console.log(`you are not a student`);
//     }
//     }
//     else{
//     console.log(`you are not ready to get a license `);

// }


const  ageBox = document.getElementById(`ageBox`);
const btn = document.getElementById(`btn`);
const textBox = document.getElementById(`textBox`);

let age ;

btn.onclick = function(){
    age = ageBox.value;
    age = Number(age);
    if (age >=100){
            textBox.textContent = (`you are too old to brouse `);
         
        }
    else if(age >=18){
        textBox.textContent = (`you are ready to get a license `);
     
        }
        else if(age < 0){
            textBox.textContent = (`age cant be les than 0`);
     
        }
        else if (age == 0){
                textBox.textContent = (`you are just new born baby `);
             
            }
            
        else{
        textBox.textContent = (`you are not ready to get a license `);
    
    }
}