import React from 'react';
import logo from './logo.svg';
import { Provider } from 'react-redux'
import  {store}  from './redux/store'
import './App.css';

import ProductListComponent from './containers/products.container'
import ProductDetailComponent from './containers/products-details.container'
import { Header } from './components/header/header';
import  {Route, Switch, BrowserRouter, Redirect} from 'react-router-dom'
import { Footer } from './components/footer/footer';

function App() {
  return (
    <div className="App">

  <Provider store={store}>
      <Header/>
      <BrowserRouter>
        <Switch>
          <Route path='/products/' component={ProductListComponent} />
          <Route path="/productdet/:productId" component={ProductDetailComponent}/>
          <Redirect from="/" to="products" />
        </Switch>
      </BrowserRouter>
      <Footer/>
      </Provider>
    </div>
  );
}
export default App;
