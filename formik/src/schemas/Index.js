import * as yup from 'yup'

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema = yup.object().shape({
    email:yup.string().email('Invalid email').required('Email can not be blank'),
    age:yup.number().positive('Age can not be negative').integer('Age has to be number').required('Age can not be blank'),
    password:yup.string().min(5,'Minimum password length is 5 characters')
    .matches(passwordRules,{
        message:'at least 1 number 1 lowercase 1 Uppercase required',
    }).required('Age can not be blank'),
    repeatPassword:yup
    .string()
    .oneOf([yup.ref('password')],'passwords doesnt match')
    .required('Password repeat can not be blank')
})




export const advancedSchema = yup.object().shape({
    username:yup.string().required('Username can not be blank').min(3,'Minimum password length is 3 characters'),
    university:yup.string().oneOf(['Medeniyet','ITU','Marmara','YTU'],'please choose your university').required('University can not be blank'),
    isAccepted:yup.boolean().oneOf([true],'accept terms of use')
})