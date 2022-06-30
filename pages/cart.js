import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from '../redux/cart.slice';
import styles from '../styles/CartPage.module.css';
import Link from 'next/link';
import { Button, PopoverBody, UncontrolledPopover } from "reactstrap";

const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
      0
    );
  };

  return (
    <div className={styles.container}>
      {cart.length === 0 ? (
        <h1>Your Cart is Empty!</h1>
      ) : (
        <>
          <div className={styles.header}>
            <div>Image</div>
            <div>Product</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Actions</div>
            <div>Total Price</div>
          </div>
          {cart.map((item) => (
            <div className={styles.body} key={item}>
              <div className={styles.image}>
                <Image src={item.image} height="90" width="65" alt="" />
              </div>
              <p>{item.title}</p>
              <p>$ {item.price}</p>
              <div>
              <Button
                className=" mt-2"
                color="default"
                id="popover644119284"
                type="button"
              >
                click for description
              </Button>
              <UncontrolledPopover placement="top" target="popover644119284">
               <PopoverBody>
                {item.description}
               </PopoverBody>
               </UncontrolledPopover>
              </div>
              <p>{item.quantity}</p>
              <div className={styles.buttons}>
                <button onClick={() => dispatch(incrementQuantity(item.id))}>
                  +
                </button>
                <button onClick={() => dispatch(decrementQuantity(item.id))}>
                  -
                </button>
                <button onClick={() => dispatch(removeFromCart(item.id))}>
                  x
                </button>
              </div>
              <p>$ {item.quantity * item.price}</p>
            </div>
          ))}
          <h2>Grand Total: $ {getTotalPrice()}</h2>
          <div className={styles.checkout}>
          <Link href="/checkout">checkout</Link> 
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;