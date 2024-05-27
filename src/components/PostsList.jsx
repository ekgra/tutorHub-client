import { useState } from 'react';

import styles from './PostsList.module.css';

import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';


function PostsList(props) {
    const [ enteredGreeting, setEnteredGreeting ] = useState('');
    const [ enteredText, setEnteredText ] = useState('');

    function greetingChangeHandler(event) {
        setEnteredGreeting(event.target.value);
    }

    function textChangeHandler(event) {
        setEnteredText(event.target.value);
    }

    return (
        <>  
            { props.isPosting && (
                <Modal onClose={props.onStopPosting}>
                    <NewPost 
                        onGreetingChange={greetingChangeHandler} 
                        onTextChange={textChangeHandler} 
                        onCancel={props.onStopPosting}
                    />
                </Modal> ) }
            
            <ul className={styles.posts}>
                <Post greeting={enteredGreeting} text={enteredText} />
                <Post greeting="Pranamam" text="Cool Runnings!" />
                <Post greeting="Suprabhatam" text="Cool Runnings!" />
            </ul>
        </>
    );
}

export default PostsList;