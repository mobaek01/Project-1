$(() => {
    $.ajax(
        {
            url: 'https://api.weatherbit.io/v2.0/current?lat=35.7796&lon=-78.6382&key=0580d2877ce9483696ef39fea007e040&include=minutely'
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
