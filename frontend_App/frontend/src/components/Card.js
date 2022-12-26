import { Link } from "react-router-dom";

export default function Card(props) {
    return (

        <Link to={`/product/${props.id}`} style={{ margin: '0 1rem' }}>
            <article style={{ maxWidth: '15rem' }}>
                <header style={{marginBottom: '.5rem'}}>
                    <img src={props.imageURL} alt="product image" style={{
                        height: '5rem'
                    }}/>
                </header>
                {
                    props.name.length > 17 ? `${props.name.slice(0, 17)}...` : props.name
                }
            </article>
        </Link>
    );
}