import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { URL } from "../../components/Constants";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from './ProductView.module.css';
import { Carousel } from 'react-responsive-carousel';
import { GetCookie } from "../../functions/Cookies";
import MsgDiv from "../../components/MsgDiv";

export default function ProductView() {
    let quantityRef = useRef('');

    let [msg, setMsg] = useState(<></>);
    let [img, setImg] = useState(<article aria-busy="true"></article>);
    let [info, setInfo] = useState({
        name: '',
        price: '',
        description: ''
    });

    const { id } = useParams();

    useEffect(() => {
        fetch(`${URL}/products/${id}`, {
            method: 'GET',
        })
            .then(res => res.json())
            .then(data => {
                setImg(
                    <Carousel>
                        {data.product_images.map(
                            (imgUrl, index) =>
                                <div>
                                    <img src={URL + imgUrl} />
                                </div>
                        )}
                    </Carousel>
                );
                setInfo(data);
            });
    }, []);

    const addToCart = () => {
        fetch(`${URL}/order-products/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${GetCookie('access')}`
            },
            body: JSON.stringify({
                quantity: quantityRef.current.value,
                product_id: id
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                data['status'] === 'OK' ?
                    setMsg(<MsgDiv msg='Successfully Added to Cart' success={true} />) :
                    setMsg(<MsgDiv msg='Login First!' success={false} />)
            });
    }

    return (
        <div className="container" style={{ maxWidth: '40rem' }}>
            <div className={styles.reset_style}>
                {img}
            </div>

            <div>
                <h1>{info.name}</h1>

                <div className="grid">
                    <h3 style={{ paddingTop: '1.6rem' }}>
                        price: ${info.price}
                    </h3>
                    <label htmlFor="quantity">
                        Product Quantity
                        <input ref={quantityRef} defaultValue={1}
                            name="quantity" type="number" placeholder="Product Quantity" />
                    </label>
                </div>

                <h4>Description:</h4>
                <p>{info.description}</p>
            </div>
            {msg}
            <button onClick={addToCart}> Add to Cart </button>
        </div>

    );
}