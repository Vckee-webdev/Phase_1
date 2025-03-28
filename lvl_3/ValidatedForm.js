import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function ValidatedForm() {
    const formik = useFormik({
        initialValues: { 
            name: '', 
            email: '', 
            age: '' 
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .min(3, 'Name must be at least 3 characters')
                .required('Name is required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Email is required'),
            age: Yup.number()
                .positive('Age must be positive')
                .integer('Age must be a whole number')
                .required('Age is required'),
        }),
        onSubmit: (values) => {
            console.log("Form Submitted:", values);
        },
    });

    return (
        <div>
            <h2>Formik Form with Validation</h2>
            <form onSubmit={formik.handleSubmit}>
                <label>
                    Name:
                    <input 
                        type="text" 
                        name="name" 
                        value={formik.values.name} 
                        onChange={formik.handleChange} 
                        onBlur={formik.handleBlur} 
                    />
                </label>
                {formik.touched.name && formik.errors.name ? (
                    <div style={{ color: 'red' }}>{formik.errors.name}</div>
                ) : null}
                <br /><br />

                <label>
                    Email:
                    <input 
                        type="email" 
                        name="email" 
                        value={formik.values.email} 
                        onChange={formik.handleChange} 
                        onBlur={formik.handleBlur} 
                    />
                </label>
                {formik.touched.email && formik.errors.email ? (
                    <div style={{ color: 'red' }}>{formik.errors.email}</div>
                ) : null}
                <br /><br />

                <label>
                    Age:
                    <input 
                        type="number" 
                        name="age" 
                        value={formik.values.age} 
                        onChange={formik.handleChange} 
                        onBlur={formik.handleBlur} 
                    />
                </label>
                {formik.touched.age && formik.errors.age ? (
                    <div style={{ color: 'red' }}>{formik.errors.age}</div>
                ) : null}
                <br /><br />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default ValidatedForm;
