const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const generateRandomHexColor = () => {
	let colorCode = "#";
	for (let i = 0; i < 6; i++) {
		colorCode += hex[random(15)];
	}
	return colorCode;
};

const random = (length) => {
	return Math.floor(Math.random() * length);
};

generateRandomHexColor();
console.log(generateRandomHexColor());
