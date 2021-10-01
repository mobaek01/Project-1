$(() => {
    $('input[type="submit"]').on("submit", (event) => {
        event.preventDefault()

        cityName = $('input[type="text"]').val()
        console.log(cityName);

        $.ajax(
            {
                url: `https://api.weatherbit.io/v2.0/forecast/hourly?city=${cityName}&units=I&key=0580d2877ce9483696ef39fea007e040&hours=120`
            }
        ).then(
            (data) => {
                console.log(data);
            },
            () => {
                console.log('bad result');
            }
        )
    })
})
