function GeneratePassword(passwordLength, includeLowerCase, includeUpperCase, includedNumbers, includeSymbols ){

    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = [0,1,2,3,4,5,6,7,8,9];
    const symbolsChars = '!@#$%^&*()_+{}\/><:?';


    let allowedChars = "";
    let password = "";

    allowedChars += includeLowerCase? lowerCaseChars: "";
    allowedChars += includeUpperCase? upperCaseChars: "";
    allowedChars += includedNumbers? numberChars: "";
    allowedChars += includeSymbols? symbolsChars: "";


if(passwordLength <= 0 ){
return 'Password length must be at least 6';
}
if(allowedChars.length === 0 ){
return `password can't be empty`
}

for( i = 0; i < passwordLength; i++){
const randomPass = Math.floor(Math.random() * allowedChars.length);
password += allowedChars[randomPass];
}
 return password;
}

const passwordLength = 10 ;
const includeLowerCase = true;
const includeUpperCase = true;
const includedNumbers = true;
const includeSymbols = true;



const password = GeneratePassword(passwordLength,
                                  includeLowerCase,
                                  includeUpperCase,
                                  includedNumbers,
                                  includeSymbols);

                                  console.log(`generated password: ${password}`);


