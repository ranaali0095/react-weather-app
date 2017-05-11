function getTempCallback(location, callback) {
		callback(undefined, 78);
		callback('City not found');
}
getTempCallback('Lahore', function(err, temp) {
		if (err) {
				console.log('error', err);
		} else {
				console.log('success', temp);
		}
});

function getTempPromise(location) {
		return new Promise(function(resolve, reject) {
				setTimeout(function() {

						reject("City can't be found");
				}, 1000);

		});
}

getTempPromise('Lahore').then((temp) => {
		console.log(temp);
}).catch((err) => {
		console.log(err);
});

function addPromise(a, b) {

		return new Promise((resolve, reject) => {
				if (typeof a === 'number' && typeof b === 'number') {
						resolve(a + b);
				}
				else {
						reject('Please pass the number');
				}
		});
}

addPromise(22, 44).then((result) => {
		console.log(result);
}).catch((err) => {
		console.log(err);
});

addPromise('Hello', 44).then((result) => {
		console.log(result);
}).catch((err) => {
		console.log(err);
});