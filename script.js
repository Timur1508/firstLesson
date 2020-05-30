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
	if ((typeof(a))==='string' && (typeof(a)) != null) && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
			console.log("done");
			appData.expenses[a] = b;
	} else {

	}
	
};

appData.moneyPerDay = appData.budget / 30;

alert("Ежеднеынй бюджет: " + appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
	console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
	console.log("Средний уровень достатка");
} else if (appData.moneyPerDay < 2000) {
	console.log("Высокий уровень достатка");
} else {
	console.log("Ошибка");
}
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
