import './App.css';
import Form from './components/form'
import Main from "./components/main"
import Update from "./components/update"
import ProductInfo from "./components/ProductInfo"
import { Router, Link } from "@reach/router";

import 'bootstrap/dist/css/bootstrap.min.css'; //add this line for bootstrap

function App() {
  return (
    <div className="App">
      <h1>Product Manager</h1>
      <Link to="/new" className="btn btn-primary m-1"> Add a new Product</Link>
      <Link to="/" className="btn btn-secondary m-1"> Home</Link>
      <Router>
        <Main path="/" />
        <Form path="/new" />
        <ProductInfo path="/product/:id" />
        <Update path="/product/update/:id" />
        {/* <ProductInfo path="/product/:id" /> */}
      </Router>
      
    </div>
  );
}

export default App;
