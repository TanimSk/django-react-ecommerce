import { Link } from "react-router-dom";

export default function Card(props) {
    return (
        <Link to={`/product/${props.id}`} >
            <article style={{ maxWidth: '20rem' }}>
                <header>
                    <img src={props.imageURL} alt="product image" />
                </header>
                {props.name}
            </article>
        </Link>
    );
}