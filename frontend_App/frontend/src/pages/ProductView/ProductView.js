import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { URL } from "../../components/Constants";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from './ProductView.module.css';
import { Carousel } from 'react-responsive-carousel';

export default function ProductView() {
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
                console.log(data);
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

    return (
        <>
            <div className={styles.reset_style}>
                {img}
            </div>

            <div>
                <h1>{info.name}</h1>
                <h3>price: ${info.price}</h3>
                <h4>Description:</h4>
                <p>{info.description}</p>
            </div>

            <button>Buy Now!</button>
            <button> Add to Cart </button>
        </>

    );
}