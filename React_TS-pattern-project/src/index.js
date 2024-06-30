import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';
import "./sass/normalize.css"
import './sass/index.scss';
import { setupStore } from './redux/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <Provider store={setupStore()}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
