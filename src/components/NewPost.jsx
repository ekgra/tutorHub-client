import styles from './NewPost.module.css';

function NewPost({ onGreetingChange, onTextChange, onCancel}) {
    
    return (
            <form className={styles.form}>
                <p>
                    <label htmlFor="greeting">Greeting</label>
                    <input type="text" id="greeting" required onChange={onGreetingChange}/>
                </p>
                <p>
                    <label htmlFor="text">Text</label>
                    <textarea id="text" required rows={3} onChange={onTextChange} />
                </p>
                <p className={styles.actions}>
                    <button type="button" onClick={onCancel}>Cancel</button>
                    <button>Submit</button>
                </p>
            </form>
    );
}

export default NewPost;