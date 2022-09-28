//1 Given the string 'ahb acb aeb aeeb adcb axeb'. Write a regular expression that matches the strings ahb, acb, aeb by pattern: letter 'a', any character, letter 'b'

let str = 'ahb acb aeb aeeb adcb axeb';

let result = str.match(/[\ba]+[\S]+[b\b]/g);
console.log(result);    


//2 Given the string '2 + 3 223 2223'. Write a regex that finds line 2 + 3 without capturing the rest 

let str2 = '2 + 3 223 2223';

let result2 = str2.match(/[\d] [+] [\d]/);
console.log(result2);
console.log(result2[0]); 


//3 Get the day, month and year of the current date and output it to the console separately

let now = new Date();
console.log(now);