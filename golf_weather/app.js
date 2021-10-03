$(() => {
    $('input[type="submit"]').on('click', (event) => {
        event.preventDefault()

        let cityName = $('input[type="text"]').val()


        $.ajax(
            {
                url: `https://api.weatherbit.io/v2.0/forecast/hourly?city=${cityName}&units=I&key=0580d2877ce9483696ef39fea007e040&hours=5`,
            }
        ).then(
            (info) => {
                console.log(info);
                $('.container').remove()
                for (const obj of info.data){
                    const $carouselIndex = $('<div>').addClass('container').css('background-image', `url('/Users/mosesbaek/dev/Project-1/golf_weather/img/${obj.weather.description}.png')` ).appendTo('.currentWeather')
                    const $dateTime = $('<h3>').addClass('weather').text(`Date: ${obj.timestamp_local}`).appendTo($carouselIndex)
                    const $description = $('<h4>').addClass('weather').text(obj.weather.description).appendTo($carouselIndex)
                    const $temp = $('<p>').addClass('weather').text(`Temperature: ${obj.temp} °F`).appendTo($carouselIndex)
                    const $precip = $('<p>').addClass('weather').text(`Precipitation: ${obj.precip}%`).appendTo($carouselIndex)
                    const $wind = $('<p>').addClass('weather').text(`Wind Speed: ${obj.wind_spd} mph`).appendTo($carouselIndex)
                }

                // console.log(data.data[0].weather.description);

            },
            () => {
                console.log('bad result');
            }
        )
    })
})
