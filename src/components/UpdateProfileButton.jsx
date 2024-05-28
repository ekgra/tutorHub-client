import styles from './UpdateProfileButton.module.css';

import { FaUserEdit } from 'react-icons/fa';

const UpdateProfileButton = ({onUpdateProfile}) => {

    return (
            <button className={styles.button} type="submit" onClick={onUpdateProfile}>
                <FaUserEdit size={18} />
                Update Profile
            </button>
    )
}

export default UpdateProfileButton;