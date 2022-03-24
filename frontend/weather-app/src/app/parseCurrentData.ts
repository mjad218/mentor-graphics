const parseCurrentData = (data : any) => {
    const currentData = {
      time: data.time || 'now',
      temperature: data.temp_C,
      icon: data.weatherIconUrl[0].value,
      description: data.weatherDesc[0].value,
      windSpeed: data.windspeedkmph,
      windDirection: data.winddireDegree,
      humidity: data.humidity,
      pressure: data.pressure,
      feelsLike: data.FeelsLikeC
    }
    return currentData;
  }

  export default parseCurrentData;