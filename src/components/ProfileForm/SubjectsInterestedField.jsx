import styles from './ProfileForm.module.css';
import { Form } from 'react-bootstrap';

const SubjectsInterestedField = ({ isEditing, value, formName, handleChange }) => {
  return (
    <Form.Group controlId={formName}>
      <Form.Label className={styles.fieldLabel}>Subjects Interested In</Form.Label>
      {isEditing ? (
          <Form.Control
              type="text"
              name="subjectsInterested"
              value={value}
              onChange={handleChange}
          />
        ) : (
          <p>{value}</p>
        )}
    </Form.Group>
  );
};

export default SubjectsInterestedField;

