const answer = 'Сік'
switch (answer) {
	case 'Сік':
		console.log('Ви вибрали Сік')
		break
	case 'Чай':
		console.log('Ви вибрали Чай')
		break
	case 'Кава':
		console.log('Ви вибрали Кава')
		break

	default:
		console.log('Немае такого')
		break
}

const day = 'субота'
switch (day) {
	case 'понеділок':
	case 'вівторок':
	case 'середа':
	case 'четвер':
	case 'п’ятниця':
		console.log('Це робочий день.')
		break
	case 'субота':
	case 'неділя':
		console.log('Це вихідний день.')
		break
	default:
		console.log('errorr')
}

const month = 5

switch (month) {
	case 12:
	case 1:
	case 2:
		console.log('Зима')
		break
	case 3:
	case 4:
	case 5:
		console.log('Весна')
		break
	case 6:
	case 7:
	case 8:
		console.log('Літо')
		break
	case 9:
	case 10:
	case 11:
		console.log('Осінь')
		break
	default:
		console.log('errorr')
}

const color = 'жовтий'

switch (color.toLowerCase()) {
	case 'червоний':
		console.log('стоп')
		break
	case 'жовтий':
		console.log('чекати')
		break
	case 'зелений':
		console.log('йти')
		break
	default:
		console.log('errorr')
}
const num1 = 10
const num2 = 0
const operator = '/'

switch (operator) {
	case '+':
		console.log(`Результат: ${num1 + num2}`)
		break
	case '-':
		console.log(`Результат: ${num1 - num2}`)
		break
	case '*':
		console.log(`Результат: ${num1 * num2}`)
		break
	case '/':
		if (num2 === 0) {
			console.log('ділення на нуль!')
		} else {
			console.log(`Результат: ${num1 / num2}`)
		}
		break
	default:
		console.log('error')
}
