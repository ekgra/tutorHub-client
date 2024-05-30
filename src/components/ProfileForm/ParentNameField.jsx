import styles from './ProfileForm.module.css';
import { Form } from 'react-bootstrap';

const ParentNameField = ({ isEditing, value, formName, handleChange }) => {
  return (
    <Form.Group controlId={formName}>
      <Form.Label className={styles.fieldLabel}>Parent Name</Form.Label>
      {isEditing ? (
          <Form.Control
              type="text"
              name="parentName"
              value={value}
              onChange={handleChange}
          />
        ) : (
          <p>{value}</p>
        )}
    </Form.Group>
  );
};

export default ParentNameField;

