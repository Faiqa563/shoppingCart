import './App.css';
import Product from "./component/Product"
import data from "./component/Data.js"
import Shoppingcart from './component/Shoppingcart';
function App() {
  return (
    <div>
    <div className="App">
         <h1>Shopping Cart</h1>
          <Shoppingcart/>
          
    </div>
    <div className="App">
         <h1>Products</h1>
          <Product/>
          
    </div>
    </div>
  );
}
export default App;
