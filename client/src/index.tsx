import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './screens/App';
import { ApolloProvider } from 'react-apollo';
import client from "./graphQL/client";
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  (<BrowserRouter>
    <ApolloProvider client={ client }>
      <App />
    </ApolloProvider>
  </BrowserRouter>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
