import styles from './ProfileForm.module.css';
import { Form } from 'react-bootstrap';

const CityField = ({ isEditing, value, formName, handleChange }) => {
  return (
    <Form.Group controlId={formName}>
      <Form.Label className={styles.fieldLabel}>City</Form.Label>
      {isEditing ? (
          <Form.Control
              type="text"
              name="city"
              value={value}
              onChange={handleChange}
          />
        ) : (
          <p>{value}</p>
        )}
    </Form.Group>
  );
};

export default CityField;

