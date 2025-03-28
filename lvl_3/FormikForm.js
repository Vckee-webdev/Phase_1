import React from 'react';
import { useFormik } from 'formik';

function FormikForm() {
    const formik = useFormik({
        initialValues: { name: '', email: '' },
        onSubmit: (values) => {
            console.log("Form Submitted:", values);
        },
    });

    return (
        <div>
            <h2>Basic Form with Formik</h2>
            <form onSubmit={formik.handleSubmit}>
                <label>
                    Name:
                    <input 
                        type="text" 
                        name="name" 
                        value={formik.values.name} 
                        onChange={formik.handleChange} 
                    />
                </label>
                <br /><br />
                <label>
                    Email:
                    <input 
                        type="email" 
                        name="email" 
                        value={formik.values.email} 
                        onChange={formik.handleChange} 
                    />
                </label>
                <br /><br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default FormikForm;
