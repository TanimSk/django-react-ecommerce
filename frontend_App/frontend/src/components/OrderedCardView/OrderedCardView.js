import styles from './styles.module.css';

export default function OrderedCardView(){
    return (
        <div className={styles.cardContainer}>
            <img src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <article>
                <h1>
                    Cat Product
                </h1>
                <p>
                    Quantity: 45
                    price: 450
                </p>
            </article>
        </div>
    );
}