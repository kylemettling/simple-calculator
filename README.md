# Calculator

A functional calculator with numpad and number key support.

**Link to project:** https://weather-app-936b28.netlify.app/

![alt tag](/public/img/pic01.png)

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, Node.js, Express

A somewhat simple Node.js app that takes in user city, state choice on the client side. This app talks to OpenWeatherMap's API and brings back info related to the user's requested selection. It presents the data to the user, providing weather details including variably color-coded temperature, wind speed/direction and appropriate weather condition icon.

## Optimizations

The original build was a client-side only implementation. In order to access the public API and keep keys secret, the project needed to transform into a server architecture. Implemented a node server to handle requests from the front end and abstract the secrets away from the client-side.

## Lessons Learned:

It was a great opportunity to work with a public API driven by client-side input. It was also a fun challenge to hook up a node server to handle the initial request and then hands it off to another request reflecting the original build but also helps keep the project's secrets just that.

## Examples:

Take a look at other examples in my portfolio:

**Baseball Pitch Guesser:** https://github.com/alecortega/palettable

**theNunGram:** https://github.com/alecortega/twitter-battle

**Codewars Solutions:** https://github.com/alecortega/patch-panel
