import ProductList from './components/ProductList'
import Cart from './components/Cart'

function App() {
  return (
    <div className="wrapper">
      <h1>Магазин</h1>
      <div className="columns">
        <ProductList />
        <Cart />
      </div>
    </div>
  )
}

export default App
