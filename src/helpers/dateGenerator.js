export function pipeDate(date) {
	let [day, month, year] = date.split('/');
	day = +day < 10 ? `0${day}` : day;
	month = +month < 10 ? `0${month}` : month;
	return `${day}.${month}.${year}`;
}
export function generateDate() {
	const today = new Date();
	let date = `${today.getDate()}/${
		today.getMonth() + 1
	}/${today.getFullYear()}`;

	return date;
}
