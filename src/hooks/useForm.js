import { useState } from "react";

function useForm(submitHandler, initialValues, validate) {
    const [formData, setFormData] = useState(initialValues);
    const [errors, setErrors] = useState(initialValues);

    const onChange = (e) => {
        if (e.target.type === 'checkbox') {
            setFormData((state) => ({
                ...state,
                [e.target.name]: e.target.checked,
            }));

        } else {
            setFormData((state) => ({
                ...state,
                [e.target.name]: e.target.value,
            }));
            
        }
        
    };

    const onBlur = (e) => {
        setFormData(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
        setErrors(validate(formData));
        console.log(formData)
        console.log(errors)
    };

    const onSubmit = (e) => {
        e.preventDefault();
        submitHandler(formData);
    };


    return {
        formData,
        onChange,
        onSubmit,
        onBlur,
        errors
    };
}

export default useForm