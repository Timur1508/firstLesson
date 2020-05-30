'use strict';


let money, time;
function start() {
	money = prompt("Ваш бюджет на месяц?", '');
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

	while(isNaN(money) || money == "" || money == null) {
		money = prompt("Ваш бюджет на месяц?", '');
	}
}

start();




let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: true
};


function chooseExpenses() {
	for (let i = 0; i < 2; i++) {
		let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
		b = prompt("Во сколько обойдется?", '');
		if ((typeof(a))==='string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
				console.log("done");
				appData.expenses[a] = b;
		} else {
			console.log ("bad result");
			i--;
		}
		
	}
}
chooseExpenses();

function detectDayBudget() {  
	appData.moneyPerDay = (appData.budget / 30).toFixed();
	alert ("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");
}
detectDayBudget();


function detectLevel() {                                                // Расчет уровня достатка
    if (appData.moneyPerDay < 100) {
        console.log ("Это минимальный уровень достатка!");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log ("Это средний уровень достатка!");
    } else if (appData.moneyPerDay > 2000) {
        console.log ("Это высокий уровень достатка!");
    } else {
        console.log ("Ошибочка...!");
    }
}
detectLevel();



function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

            appData.monthIncome = save/100/12*percent;
            alert("Доход с Вашего депозита в месяц: " + appData.monthIncome);
    }
}
checkSavings();


function chooseOptExpenses() {                             // Функция для определения необязательных расходов

    for (let i = 1; i <= 3; i++) {
        let questionOptExpenses = prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i] = questionOptExpenses;
        console.log(appData.optionalExpenses);
    }


}
chooseOptExpenses();

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
