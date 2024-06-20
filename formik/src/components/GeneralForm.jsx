import React from 'react'
import { Formik ,useFormik } from 'formik';
import { basicSchema } from '../schemas/Index';
import {Link} from 'react-router-dom'


export default function GeneralForm() {
    const onSubmit = async (values,actions) => {
        console.log(values)
        console.log(actions)


        await new Promise((resolve) => {
            setTimeout(resolve,1000)
        })

        actions.resetForm();
    }

    const {values,errors,isSubmitting,handleChange,handleSubmit} = useFormik({
        initialValues: {
        email: '',
        age: '',
        password : '',
        repeatPassword : '',
        },
        validationSchema:basicSchema,
        onSubmit
    });

    //console.log(formik)
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className='inputDiv'>
                <label>Email</label>
                <input 
                type="text"
                value={values.email} 
                onChange={handleChange}
                id='email'
                placeholder='your mail'
                className={errors.email ? 'input-error' : ''}
                />
                {/* eger error geldiyse basar p içinde */}
                {errors.email && <p className='error'>{errors.email}</p>}
            </div>
            <div className='inputDiv'>
                <label>Age</label>
                <input 
                type="number"
                value={values.age} 
                onChange={handleChange}
                id='age'
                placeholder='your age'
                className={errors.age ? 'input-error' : ''}
                />
                {errors.age && <p className='error'>{errors.age}</p>}
            </div>
            <div className='inputDiv'>
                <label>Password</label>
                <input 
                type="password"
                value={values.password} 
                onChange={handleChange}
                id='password'
                placeholder='your password'
                className={errors.password ? 'input-error' : ''}
                />
                {errors.password && <p className='error'>{errors.password}</p>}
            </div>
            <div className='inputDiv'>
                <label>Repeat Password</label>
                <input 
                type="password"
                value={values.repeatPassword} 
                onChange={handleChange}
                id='repeatPassword'
                placeholder='repeat your password'
                className={errors.repeatPassword ? 'input-error' : ''}
                />
                {errors.repeatPassword && <p className='error'>{errors.repeatPassword}</p>}
            </div>
            <button disabled={isSubmitting} type='submit' className='btnHero'
            style={{backgroundColor : isSubmitting ? 'gray' : 'green' }}>Save</button>
            <Link to={'/portal'} className='formLink'>Go to portal</Link>
        </form>
    </div>
  )
}
