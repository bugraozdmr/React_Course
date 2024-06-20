import React from "react";
import { Form, Formik } from "formik";
import CustomInput from "./CustomInput";
import { advancedSchema } from "../schemas/Index";
import CustomSelect from "./CustomSelect";
import CustomCheckbox from "./CustomCheckbox";
import {Link} from 'react-router-dom'

export default function PortalForm() {

const onSubmit = async (values, actions) => {
  actions.resetForm();
};

  return (
    <>
      <Formik
        initialValues={{ username: "", university: "", isAccepted: false}}
        onSubmit={onSubmit}
        validationSchema={advancedSchema}
      >
        {({isSubmitting}) => (
          <Form>
            <CustomInput
            label='Username'
            name='username'
            type='text'
            placeholder='enter your username'
            />

            <CustomSelect
            label='Select Your University'
            name='university'
            placeholder='choose your University'>
                <option value="">Select</option>
                <option value="Medeniyet">Medeniyet University</option>
                <option value="ITU">ITU</option>
                <option value="Marmara">Marmara University</option>
                <option value="YTU">YTU</option>
            </CustomSelect>

            <CustomCheckbox
            label='Accept terms'
            type='checkbox'
            name='isAccepted'></CustomCheckbox>

            <button disabled={isSubmitting} type='submit' className="btnHero"
                        style={{backgroundColor : isSubmitting ? 'gray' : 'green' }}>Save</button>
            <Link to={'/'} className="formLink">Go to home</Link>
          </Form>
        )}
      </Formik>
    </>
  );
}
