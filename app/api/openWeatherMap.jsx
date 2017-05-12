let axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&appid=36a3d7f639d0d468cb1ba9a5333cc9ed';

module.exports = {
		getTemp: (location) => {
				let encodedLocation = encodeURIComponent(location);
				let requestURL = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

				return axios.get(requestURL).then((res) => {
						if (res.data.cod && res.data.message) {
								throw new Error(res.data.message);
						} else {
								console.log(res.data.main.temp);
								return res.data.main.temp;
						}
				}).catch((err) => {
						throw new Error(err.data.message);
				});
		}
};
