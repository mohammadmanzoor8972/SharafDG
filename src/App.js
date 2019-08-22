import React from 'react';
import logo from './logo.svg';
import { Provider } from 'react-redux'
import { store } from './redux/store'
import './App.css';
import ProductListComponent from './containers/products.container'
import ProductDetailComponent from './containers/products-details.container'
import { Header } from './components/header/header';
import  {Route, Switch, BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Header/>
      <BrowserRouter>
      <Switch>
            <Route path='/products/' component={ProductListComponent} />
            <Route path="/productdet/:productId" component={ProductDetailComponent}/>
            </Switch>
            </BrowserRouter>
    </div>
    </Provider>
  );
}

export default App;
