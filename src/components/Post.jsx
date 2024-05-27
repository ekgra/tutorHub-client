import styles from './Post.module.css';

function Post({ greeting, text }) {

    return (
            <li className={styles.post}>
                <p className={styles.greeting}>{greeting}</p>
                <p className={styles.text}>{text}</p>
            </li>
    );
}

export default Post;