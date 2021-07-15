
const squareDigits = (n) =>{
    let all = '';
    (String(n).length > 1) ? String(n).split('').forEach(num => all += String(num * num)) :  all += n * n
    if(String(n).length > 1) return all
    else return all
}

console.log(squareDigits(12)); //write positive number