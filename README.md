lets get it started.# Getting Started with Create React App

This project was bootstrapped with [Video](https://www.youtube.com/watch?v=YaioUnMw0mo).

## Available Scripts

In the project directory, you can run:

### ```               
      <Card >
      <Card.Body>
          <Card.Title className="sym-card">{result.fullExchangeName}</Card.Title>
          <Card.Subtitle className="sym-card">{result.symbol}</Card.Subtitle>
          <Card.Text>{result.regularMarketDayHigh}</Card.Text>
          </Card.Body>
    </Card>
    ```

    ```
    import React from "react";
import DisplayTicker from "./DisplayTicker";


const DisplayItem = ({ result}) => {
     return (
          <div className="card">
               <div className="card-inner">
                    <div className="card-front">
                    <h3 className="sym-card">{result.fullExchangeName}</h3>
                         <p className="sym-card">{result.longName}</p>
                    </div>
                    <div className="card-back">
                         <h3>{result.symbol}</h3>
                         <p>{result.regularMarketDayHigh}</p>
                    </div>


               </div>


          </div>     
     )
}
export default DisplayItem;
```

```
https://yh-finance.p.rapidapi.com/market/v2/get-quotes?region=US&symbols=GOOGL%2CAMZN%2CAAPL%2CBA%2CCOIN%2CCVS%2CGS%2CMS%2CNVDA%2CPYPL%2CPFE%2CCRM%2CSBUX%2CTSLA%2CDIS%2CVTI%2CLI```









Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### ```
const Investing = await fetch(() {
  const url = 'https://yh-finance.p.rapidapi.com/market/v2/get-quotes?region=US&symbols=GOOGL%2CAMZN%2CAAPL%2CBA%2CCOIN%2CCVS%2CGS%2CMS%2CNVDA%2CPYPL%2CPFE%2CCRM%2CSBUX%2CTSLA%2CDIS%2CVTI%2CLI';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '5e4d0eeb5bmsh1f0574004d6dfb6p160e9fjsnd9a3ae03ad63',
      'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com'
    }
  };
  ```

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Some thoughts on creating a new dataset from the api data, merging it with another array using the primary key symbol...then mapping through it to print the data on the cards.  
owever we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
