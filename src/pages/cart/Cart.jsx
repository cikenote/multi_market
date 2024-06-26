import Helmet from './../../components/Helmet/Helmet';
import CommonSection from './../../components/UI/CommonSection/CommonSection';
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";
import { cartActions } from "../../redux/slices/cartSlice.jsx";
import { useSelector, useDispatch} from "react-redux";
import { Link } from "react-router-dom";

import "./cart.css";

const Cart = () => {

  const cartItems = useSelector(state => state.cart.cartItems);

  console.log(cartItems)

    const totalAmount = useSelector(state => state.cart.totalAmount);
  return (
    <Helmet>
      <CommonSection title={"Shopping Cart"}/>

      <section>
        <Container>
          <Row>
            <Col lg="9">
              {
                cartItems.length === 0 ? (
                    <h2 className="fs-4 text-center">No item added to the cart</h2>
                ) : (
                    <table className="table bordered">
                      <thead>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Delete</th>
                      </thead>

                      <tbody>
                      {cartItems.map((item, index) => (
                        <Tr item={item} key={index}/>
                      ))}
                      </tbody>
                    </table>
                )
              }
            </Col>
            <Col lg="3">
                <div>
                    <h6 className="d-flex align-items-center justify-content-between">
                        Subtotal
                        <span className="fs-4 fw-bold">${totalAmount}</span>
                    </h6>
                </div>
                <p className="fs-6 mt-2">Taxes and shipping will calculator in checkout</p>
                <div>
                    <button className="buy_btn w-100"><Link to="/shop">Continue Shopping</Link></button>
                    <button className="buy_btn w-100 mt-3"><Link to="/shop">Checkout</Link></button>
                </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}


const Tr = ({item}) => {
  const dispatch = useDispatch();

  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id))
  }
  return (
      <tr>
        <td><img src={item.imgUrl} alt="Anh ne"/></td>
        <td>{item.productName}</td>
        <td>${item.price}</td>
        <td>{item.quantity}</td>
        <td><motion.i whileTap={{scale: 1.2}} onClick={deleteProduct} className="ri-delete-bin-6-line"></motion.i></td>
      </tr>
  )
}

export default Cart