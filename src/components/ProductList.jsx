import { useDispatch } from 'react-redux'
import { addItem } from '../store/cartSlice'

const products = [
  { title: 'Навушники', price: 1200 },
  { title: 'Клавіатура', price: 850 },
  { title: 'Миша', price: 420 },
  { title: 'Монітор', price: 5600 },
  { title: 'Флешка 64GB', price: 300 }
]

function ProductList() {
  const dispatch = useDispatch()

  const handleAdd = (product) => {
    const newItem = {
      id: Date.now() + Math.random(),
      name: product.title,
      price: product.price
    }
    dispatch(addItem(newItem))
  }

  return (
    <div className="box">
      <h2>Товари</h2>
      {products.map((p, index) => (
        <div className="row" key={index}>
          <span>{p.title} - {p.price} грн</span>
          <button onClick={() => handleAdd(p)}>Додати</button>
        </div>
      ))}
    </div>
  )
}

export default ProductList
