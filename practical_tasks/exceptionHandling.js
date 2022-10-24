//In a try catch construction, wrap the code: console.log (a), let a = 3. And display an error - ‘let must be declared’ before use. 
//When running 1/0, the error 'cannot be divided by zero'


try {
    console.log(a);
    let a = 3;
} catch {
    console.log("let must be declared before use");
};


try {
    let a = 1;
    let b = 0;
    if (b === 0) {
        throw new SyntaxError('cannot be divided by zero');
    }
    console.log(one / two);
} catch (error) {
    console.log(error.message)
}