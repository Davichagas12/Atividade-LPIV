function equacao(num1,  num2)
{
let i = 1; 
let r = 1; 
    
    for(i = num1; i <= num2; i++){ 
        r *= i + 1/i;
        console.log(i)
    }
        return r;
}

export {equacao}