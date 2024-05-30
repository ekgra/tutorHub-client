import styles from './ProfileForm.module.css';
import { Form } from 'react-bootstrap';

const PhoneField = ({ isEditing, value, formName, handleChange }) => {
  return (
    <Form.Group controlId={formName}>
      <Form.Label className={styles.fieldLabel}>Phone</Form.Label>
      {isEditing ? (
          <Form.Control
              type="text"
              name="phone"
              value={value}
              onChange={handleChange}
          />
        ) : (
          <p>{value}</p>
        )}
    </Form.Group>
  );
};

export default PhoneField;

