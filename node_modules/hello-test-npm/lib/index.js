function helloWorld() {
	return "hello test world.....!!!"
}

function HelloWorldNPM() {
	return "hello test world npm.....!!!!"
}

module.exports = HelloWorldNPM;
HelloWorldNPM.helloWorld = helloWorld;