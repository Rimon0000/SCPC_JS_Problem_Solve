function reverseString(text){
    const len = text.length;
    let reversedStr = "";

    for(let i = len-1; i>=0; i--){
        reversedStr += text[i];
    }
    return reversedStr;
}

const string = 'Hello World';
const result = reverseString(string);
console.log(result)