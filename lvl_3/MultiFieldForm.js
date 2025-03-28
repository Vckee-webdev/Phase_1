import React from 'react';
import { useFormik } from 'formik';

function MultiFieldForm() {
    const formik = useFormik({
        initialValues: { 
            name: '', 
            email: '', 
            age: '', 
            city: '' 
        },
        onSubmit: (values) => {
            console.log("Form Submitted:", values);
        },
    });

    return (
        <div>
            <h2>Multi-Field Form with Formik</h2>
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

                <label>
                    Age:
                    <input 
                        type="number" 
                        name="age" 
                        value={formik.values.age} 
                        onChange={formik.handleChange} 
                    />
                </label>
                <br /><br />

                <label>
                    City:
                    <input 
                        type="text" 
                        name="city" 
                        value={formik.values.city} 
                        onChange={formik.handleChange} 
                    />
                </label>
                <br /><br />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default MultiFieldForm;
