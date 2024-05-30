import styles from './ProfileForm.module.css';
import { Form } from 'react-bootstrap';

const YearField = ({ isEditing, value, formName, handleChange }) => {
  return (
    <Form.Group controlId={formName}>
      <Form.Label className={styles.fieldLabel}>Year</Form.Label>
      {isEditing ? (
          <Form.Control
              type="text"
              name="year"
              value={value}
              onChange={handleChange}
          />
        ) : (
          <p>{value}</p>
        )}
    </Form.Group>
  );
};

export default YearField;