'use strict';

let money = prompt("Ваш бюджет на месяц?", ''),
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};


for (let i = 0; i < 2; i++) {
	let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
	b = prompt("Во сколько обойдется?", '');

	appData.expenses[a] = b;
}

alert(appData.budget / 30);

//let num = 80;

//if (num < 49) {
//	console.log("False")
//} else if (num > 100) {
//	console.log("More")
//} else {
//	console.log(true)
//}

//switch (num) {
//	case num < 49:
//		console.log("false");
//		break;
//	case num > 100:
//		console.log("more");
//		break;
//	case 50:
//		console.log(true);
//		break;
//	default:
//		console.log("error");
//		break;
//}




//let num = 40;
//while (num < 55) {
//	console.log(num);
//	num++;
//}
//do {
//	console.log(num);
//	num++;
//}	
//while (num <55);
//
//for (let i = 1; i < 8; i++) {
//	if (i == 6) {
//		continue;
//	}
//	console.log(i);
//}
