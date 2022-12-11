import { useEffect, useState } from "react";
import Card from "../components/Card";
import { URL } from "../components/Constants";

export default function Home() {

    let [products, setProducts] = useState(<article aria-busy="true"></article>);

    useEffect(() => {
        fetch(`${URL}/products/`, {
            method: 'GET',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProducts(data.map(
                    (product, index) =>
                        <Card key={index} name={product.name} imageURL={URL + product.product_images[0]} />
                ))
            })

    }, []);


    return (
        <main className="container">
            <h1>Hello, world!</h1>

            <div className="grid">
                {products}
            </div>

        </main>
    );
}