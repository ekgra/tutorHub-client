import styles from './ProfileForm.module.css';
import { Form } from 'react-bootstrap';

const NameField = ({ value, formName }) => {
  return (
    <Form.Group controlId={formName}>
      <Form.Label className={styles.fieldLabel}>Name</Form.Label>
      <p>{value}</p>
    </Form.Group>
  );
};

export default NameField;

