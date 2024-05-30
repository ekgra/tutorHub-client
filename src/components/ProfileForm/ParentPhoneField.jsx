import styles from './ProfileForm.module.css';
import { Form } from 'react-bootstrap';

const ParentPhoneField = ({ isEditing, value, formName, handleChange }) => {
  return (
    <Form.Group controlId={formName}>
      <Form.Label className={styles.fieldLabel}>Parent Phone</Form.Label>
      {isEditing ? (
          <Form.Control
              type="text"
              name="parentPhone"
              value={value}
              onChange={handleChange}
          />
        ) : (
          <p>{value}</p>
        )}
    </Form.Group>
  );
};

export default ParentPhoneField;

