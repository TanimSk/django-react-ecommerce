import { useEffect, useState } from "react";
import { URL } from "../components/Constants";
import { GetCookie } from "../functions/Cookies";
import OrderedCardView from "../components/OrderedCardView/OrderedCardView";
import MsgDiv from "../components/MsgDiv";

export default function Cart() {
    let [cards, setCards] = useState(<></>);
    let [price, setPrice] = useState(0);
    let [msg, setMsg] = useState(<></>);

    let [hasProduct, setProduct] = useState(<>Please Wait ...</>);

    useEffect(() => {
        fetch(`${URL}/order-products/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${GetCookie('access')}`
            }
        })
            .then(response => response.json())
            .then(data => {
                let price_trace = 0;

                if (data.length !== 0) {
                    setProduct(
                        <>
                            <p>
                                Total price: {price} USD
                                {msg}
                            </p>
                            <button onClick={confirmOrder}>
                                Confirm Order
                            </button>
                        </>
                    );
                    setCards(data.map((datum, index) => {
                        price_trace += parseInt(datum.product_price) * parseInt(datum.quantity);
                        return <OrderedCardView info={datum} key={index} />
                    }));
                    setPrice(price_trace);
                }
                else {
                    setProduct(
                        <h1>
                            Your Cart is Empty!
                        </h1>
                    );
                }
            });
    }, []);

    const confirmOrder = () => {
        fetch(`${URL}/order-confirm/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${GetCookie('access')}`
            }
        })
            .then(response => response.json())
            .then(data => {
                data['status'] === 'OK' ?
                    setMsg(<MsgDiv msg="Order Confirmed!" success={true} />) :
                    setMsg(<MsgDiv msg="Something's Wrong!" success={false} />)
            });
    }

    return (
        <div className="container" style={{ maxWidth: '40rem' }}>
            {cards}
            {hasProduct}
        </div>
    );
}