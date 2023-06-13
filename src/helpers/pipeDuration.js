function pipeDuration(totalMinutes) {
	let hours = Math.floor(totalMinutes / 60);
	let minutes = totalMinutes % 60;
	minutes = minutes < 10 ? `0${minutes}` : minutes;
	return hours + ':' + minutes;
}

export default pipeDuration;
