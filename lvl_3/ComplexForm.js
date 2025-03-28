import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function ComplexForm() {
    const formik = useFormik({
        initialValues: { 
            name: '', 
            email: '', 
            password: '',
            confirmPassword: '',
            age: '',
            gender: '',
            terms: false
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .min(3, 'Must be at least 3 characters')
                .required('Name is required'),
            email: Yup.string()
                .email('Invalid email format')
                .required('Email is required'),
            password: Yup.string()
                .min(6, 'Password must be at least 6 characters')
                .required('Password is required'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
                .required('Confirm Password is required'),
            age: Yup.number()
                .positive('Age must be a positive number')
                .integer('Age must be a whole number')
                .required('Age is required'),
            gender: Yup.string()
                .oneOf(['male', 'female', 'other'], 'Select a valid gender')
                .required('Gender is required'),
            terms: Yup.boolean()
                .oneOf([true], 'You must accept the terms and conditions')
        }),
        onSubmit: (values) => {
            console.log("Form Submitted:", values);
            alert("Form submitted successfully!");
        },
    });

    return (
        <div>
            <h2>Complex Form with Validation</h2>
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
                {formik.touched.name && formik.errors.name && (
                    <div style={{ color: 'red' }}>{formik.errors.name}</div>
                )}
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
                {formik.touched.email && formik.errors.email && (
                    <div style={{ color: 'red' }}>{formik.errors.email}</div>
                )}
                <br /><br />

                <label>
                    Password:
                    <input 
                        type="password" 
                        name="password" 
                        value={formik.values.password} 
                        onChange={formik.handleChange} 
                        onBlur={formik.handleBlur} 
                    />
                </label>
                {formik.touched.password && formik.errors.password && (
                    <div style={{ color: 'red' }}>{formik.errors.password}</div>
                )}
                <br /><br />

                <label>
                    Confirm Password:
                    <input 
                        type="password" 
                        name="confirmPassword" 
                        value={formik.values.confirmPassword} 
                        onChange={formik.handleChange} 
                        onBlur={formik.handleBlur} 
                    />
                </label>
                {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                    <div style={{ color: 'red' }}>{formik.errors.confirmPassword}</div>
                )}
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
                {formik.touched.age && formik.errors.age && (
                    <div style={{ color: 'red' }}>{formik.errors.age}</div>
                )}
                <br /><br />

                <label>
                    Gender:
                    <select
                        name="gender"
                        value={formik.values.gender}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    >
                        <option value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </label>
                {formik.touched.gender && formik.errors.gender && (
                    <div style={{ color: 'red' }}>{formik.errors.gender}</div>
                )}
                <br /><br />

                <label>
                    <input
                        type="checkbox"
                        name="terms"
                        checked={formik.values.terms}
                        onChange={formik.handleChange}
                    />
                    Accept Terms & Conditions
                </label>
                {formik.errors.terms && (
                    <div style={{ color: 'red' }}>{formik.errors.terms}</div>
                )}
                <br /><br />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default ComplexForm;
