import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Header from './Components/Header';
import ProductListing from './Components/ProductListing';
import ProductDetails from './Components/ProductDetails';

function App() {
  return (
 <>
 <Router>
 <Header/>
 <Switch>
 <Route path='/' exact component={ProductListing}/>
 <Route path='/product/:productId' exact component={ProductDetails}/>
 </Switch>
 </Router>

 </> 
    
  );
}

export default App;
