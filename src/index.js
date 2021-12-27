import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { FavContextProvider} from "./store/context"

ReactDOM.render(
 <FavContextProvider> <App/></FavContextProvider>,
  document.getElementById('root')
);
