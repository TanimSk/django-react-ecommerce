import { useEffect } from "react";
import { URL } from "../components/Constants";
import { GetCookie } from "../functions/Cookies";
import OrderedCardView from "../components/OrderedCardView/OrderedCardView";

export default function Cart() {
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
                console.log(data);
            })
    }, []);

    return (
        <div className="container" style={{ maxWidth: '40rem' }}>
            <OrderedCardView />
        </div>
    );
}