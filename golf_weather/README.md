
# Project-1: Golf TeeTime Weather CONDITIONS

### Technologies Used:

HTML  
CSS  
Javascript  
Jquery  
Ajax

### Approach Taken:

At first, my initial idea was to find an API that provided information on golf courses within the United States but unfortunately I was unsuccessful in finding a free API with that information. Then, I decided to do an app that would allow the user to search weather conditions of the city that they had their next tee time in and it would give you specific weather conditions that a golfer would look for. The weather conditions consist of date and time , temperature, weather condition description, precipitation percentage, and wind speed.  

Using the carousel UI, the user is able to flip through 36 hours worth of weather conditions. Through the data that was retrieved from the weatherbit.io API, 36 div tags are created using a 'for of' loop that would store the information. Within each div tag, I appended multiple 'h' and 'p' tags that contained the weather condition information. Once each div tag has been created, the first div tag's display property was set to block and the remaining 35 div tag's display property was set to none. As you click the next or the previous button, the next div tag's display property switches to 'block', while the previous div tag's display property changes to 'none'.

Modal

### Struggles:

Some struggles that I encountered during Project 1 were finding an API with the correct set of data, maneuvering through the data of the selected API, and 'on click' event listeners duplicating.

At first, I attempted to find an API with golf course specification data but I was unable to find one that was both free and contained the correct data. After searching and searching, I decided to switch over to a weather API and found one searching through google.com.

After I was able to find a working API, I had a some issues with maneuvering through the data because the data that I needed was several layers deep. I was able to solve this issue by console logging layer by layer and to find the correct syntax I needed to obtain the correct set of data.

Once majority of my website was completed, I ran into the issue of multiple city weather conditions appearing within my carousel when searching multiple cities without refreshing the screen. Through the help of a classmate, we were able to come to the conclusion that every time the submit button was clicked, it was creating a duplicate 'on click' event listener that was placed on my next and previous buttons. The solution that we came up with was to have the 'on click' event listener to first delete any event listeners first and then run the actual event listener.

### Link to Live Website:

https://teetime-weather.netlify.app
