// This is the entry point of our app (not a component)

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

/**** workshop begin  ****/

function Welcome(props) {
    return <h1>Hello {props.name}</h1>;
};

// ES6 arrow functions are awesome
// const Welcome = (props) => <h1>Hello {props.name} {props.lastName}</h1>;

ReactDOM.render(<Welcome name="Marco" />, document.getElementById('root'));


// Better example starts here

// const url = "https://api.flickr.com/services/rest/?&method=flickr.people.getPublicPhotos&api_key=bbe6aa739ed8d4f2e922193fa6ebe4c5&format=json&user_id=36587311@N08&per_page=100";

// jsonp(url, function (data) {
//     ReactDOM.render(<App photos={data.photos.photo} />, document.getElementById('root'));
// });

// function jsonp(url, callback) {
//     var callbackName = 'jsonFlickrApi';
//     window[callbackName] = function (data) {
//         delete window[callbackName];
//         document.body.removeChild(script);
//         callback(data);
//     };

//     var script = document.createElement('script');
//     script.src = url + (url.indexOf('?') >= 0 ? '&' : '?') + 'callback=' + callbackName;
//     document.body.appendChild(script);
// }


/**** workshop end  ****/

registerServiceWorker();
