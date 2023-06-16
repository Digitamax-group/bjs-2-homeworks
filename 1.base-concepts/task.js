"use strict"
function solveEquation(a,b,c) {
  let arr=[];
  let d = (b**2-4*a*c);
  if (d>0){
   let root1 = (-b + Math.sqrt(d) )/(2*a);
   let root2 =  (-b - Math.sqrt(d) )/(2*a);
    arr.push(root1,root2);
    console.log(arr);
    return arr;
  }
if (d === 0){
  let root0= -b/(2*a);
  arr.push(root0);
    console.log(arr);
  return arr;
}
else {
  console.log("корней нет"+ arr)
}
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let p = parseInt(percent) / 100 / 12; //процентная ставка
    let c = parseInt(contribution); 	  //начальный взнос	
    let a = parseInt(amount);  			  //общая стоимость	
  	if (isNaN(p) || p < 0) {
   		return `Параметр "Процентная ставка" содержит неправильное значение ${percent}`;
   	} else if (isNaN(c) || c < 0) {
   		return `Параметр "Начальный взнос" содержит неправильное значение ${contribution}`;
   	} else if (isNaN(a) || a < 0) {
   		return `Параметр "Общая стоимость" содержит неправильное значение ${amount}`;
   	} else {

  		let today = new Date();
  		if (today.getFullYear() > date.getFullYear()) {
			return `Параметр "срок ипотеки" содержит неправильное значение ${date}`;
		} else {
			let s = a - c;						  //тело кредита
  			let n = date.getMonth() - today.getMonth() + (12*(date.getFullYear() - today.getFullYear())); //срок кредита в месяцах
  			let pay = s*(p+(p/(((1+p)**n)-1)));			//ежемесячная оплата
  			let totalAmount = (pay * n).toFixed(2);
  			console.log(`Общая сумма по ипотеке составляет ${totalAmount}`);
 			return +totalAmount;
    }
  }
}
