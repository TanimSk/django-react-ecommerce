export default function Card(props){
    return(
        <article style={{maxWidth: '20rem'}}>
            <header>
            <img src={props.imageURL} alt="product image" />
            </header>            
            {props.name}
        </article>
    );
}