const getRandomUpper = () => {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

const getRandomLower = () => {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

const getRandomNumber = () => {
	return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};

const getRandomSymbol = () => {
	const symbols = "!@#$%^&*=_";
	return symbols[Math.floor(Math.random() * symbols.length)];
};

const randomFunc = {
	uppercase: getRandomUpper,
	lowercase: getRandomLower,
	number: getRandomNumber,
	symbol: getRandomSymbol,
};

export default randomFunc;
