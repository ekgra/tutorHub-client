import styles from './UserProfileForm.module.css';

import { useForm } from "react-hook-form"

const UserProfileForm = () => {
    const { register, handleSubmit, watch, formState: { errors }, } = useForm()

    const onSubmit = (data) => console.log(data)
    console.log(watch("name")) 

    return (
        <div className={styles.form}>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Name*</label>
                {/* register your input into the hook by invoking the "register" function */}
                <input defaultValue="test" {...register("name")} />
            </div>
            {/* include validation with required or other standard HTML validation rules */}
            <div>
                <input {...register("exampleRequired", { required: true })} />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}
            </div>
            <div>
                <input type="submit" />
            </div>
            </form>
        </div>
      )
}

export default UserProfileForm;
              

