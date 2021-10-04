$(() => {
    $('input[type="submit"]').on('click', (event) => {
        event.preventDefault()

        let cityName = $('input[type="text"]').val()

        $.ajax(
            {
                url: `https://api.weatherbit.io/v2.0/forecast/hourly?city=${cityName}&units=I&key=0580d2877ce9483696ef39fea007e040&hours=36`,
            }
        ).then(
            (info) => {
                console.log(info);
                $('.container').remove()
                for (const obj of info.data){
                    const $carouselIndex = $('<div>').addClass('container').css('background-image', `url('img/${obj.weather.description}.png')` ).appendTo('.currentWeather')
                    const $dateTime = $('<h3>').addClass('weather').text(`Date: ${obj.timestamp_local}`).appendTo($carouselIndex)
                    const $description = $('<h4>').addClass('weather').text(obj.weather.description).appendTo($carouselIndex)
                    const $temp = $('<p>').addClass('weather').text(`Temperature: ${obj.temp} °F`).appendTo($carouselIndex)
                    const $precip = $('<p>').addClass('weather').text(`Precipitation: ${obj.precip}%`).appendTo($carouselIndex)
                    const $wind = $('<p>').addClass('weather').text(`Wind Speed: ${obj.wind_spd} mph`).appendTo($carouselIndex)
                    console.log('.currentWeather');
                }
                let currentDivIndex = 0
                let numOfDiv = $('.currentWeather').children().length - 1

                $('.next').on('click', () => {
                    $('.currentWeather').children().eq(currentDivIndex).css('display', 'none')
                    if (currentDivIndex < numOfDiv){
                        currentDivIndex++
                    }else {
                        currentDivIndex = 0
                    }
                    $('.currentWeather').children().eq(currentDivIndex).css('display', 'block')
                })

                $('.previous').on('click', () => {
                    $('.currentWeather').children().eq(currentDivIndex).css('display', 'none')
                    if (currentDivIndex > 0){
                        currentDivIndex--
                    }else {
                        currentDivIndex = numOfDiv
                    }
                    $('.currentWeather').children().eq(currentDivIndex).css('display', 'block')
                })
            },
            () => {
                console.log('bad result');
            }
        )
    })
})
