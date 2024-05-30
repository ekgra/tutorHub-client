import styles from './About.module.css';

import { Container } from 'react-bootstrap';

const HomePage = () => {
    return (
      <div className={styles.aboutContent}>
        <Container className="mt-4">
          <h1 className={styles.aboutText}> Here to help you build from basics </h1> 
        </Container>
      </div>
    );
};

export default HomePage;
