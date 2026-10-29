import { useSelector, useDispatch } from 'react-redux'
import { removeItem, clearCart } from '../store/cartSlice'

function Cart() {
  const items = useSelector(state => state.cart.items)
  const total_price = useSelector(state => state.cart.total_price)
  const dispatch = useDispatch()

  return (
    <div className="box">
      <h2>Кошик</h2>

      {items.length === 0 && <p>Кошик порожній</p>}

      {items.map(item => (
        <div className="row" key={item.id}>
          <span>{item.name} - {item.price} грн</span>
          <button onClick={() => dispatch(removeItem(item.id))}>Видалити</button>
        </div>
      ))}

      <p className="total">Всього: {total_price} грн</p>

      <button onClick={() => dispatch(clearCart())}>Очистити кошик</button>
    </div>
  )
}

export default Cart
