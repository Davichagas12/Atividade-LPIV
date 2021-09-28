function calculo(num1, num2)
{
    let a = Number(num1)
    let b = Number(num2)
    if(num1 == num2){
        return (a + 1/a);
    }else
        return (a + 1/a)*calculo(a+1,b);
}

export{calculo}
