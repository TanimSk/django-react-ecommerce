import { URL } from '../Constants';
import styles from './styles.module.css';

export default function OrderedCardView(props) {
    return (
        <div className={styles.cardContainer}>
            <img src={URL + props.info.images[0]} alt="product image" />
            <article>
                <h1>
                    {props.info.product_name}
                </h1>
                <p>
                    Quantity: {props.info.quantity}
                    <br />
                    price: {props.info.product_price}
                </p>
            </article>
        </div>
    );
}