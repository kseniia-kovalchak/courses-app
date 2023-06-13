export function generateId() {
	let id = `${getString(8)}-${getString(4)}-${getString(4)}-${getString(
		4
	)}-${getString(12)}`;

	return id;
}

function getString(length) {
	let str = '';

	for (let i = 0; i < length; i++) {
		str += getSymbol();
	}

	return str;
}

function getSymbol() {
	let range = (start, end) =>
		[...Array(end - start).keys(), end - start].map((n) => start + n);
	let a = range(97, 122);
	let dig = range(48, 57);
	let all = a.concat(dig);

	const symbol = String.fromCharCode(
		all[Math.floor(Math.random() * all.length)]
	);

	return symbol;
}
export function generateAuthorId(authorsList) {
	let id;

	do {
		id = generateId();
	} while (authorsList.find((author) => author.id === id));

	return id.toString();
}

export function generateCourseId(coursesList) {
	let id;

	do {
		id = generateId();
	} while (coursesList.find((author) => author.id === id));

	return id.toString();
}
