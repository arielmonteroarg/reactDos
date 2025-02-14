import { FaCartShopping } from "react-icons/fa6";
import "./CartWidget.css";
function CartWidget(){

    return(
        <div className="cart-widget">
        <FaCartShopping className="cart-icon" />
        <p className="cart-count">0</p>
      </div>
            

    );
}
export default CartWidget;