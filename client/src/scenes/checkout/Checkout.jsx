import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Box, Button, Stepper, Step, StepLabel } from  '@mui/material';
import * as yup from 'yup';
import { shades } from '../../theme';
import { Formik } from 'formik';
import Shipping from './Shipping';

const initialValues = {
  billingAdress: {
    firstName: "",
    lastName: "",
    country: "",
    street1: "",
    street2: "",
    city: "",
    state: "",
    zipCode: "",
  },
  shippingAdress: {
    isSameAdress: true,
    firstName: "",
    lastName: "",
    country: "",
    street1: "",
    street2: "",
    city: "",
    state: "",
    zipCode: "",
  },
  email: '',
  phoneNumber: ''
};

const checkoutSchema = [
  yup.object().shape({
    billingAdress: yup.object().shape({
      firstName: yup.string().required('required'),
      lastName: yup.string().required('required'),
      country: yup.string().required('required'),
      street1: yup.string().required('required'),
      street2: yup.string(),
      city: yup.string().required('required'),
      state: yup.string().required('required'),
      zipCode: yup.string().required('required'),
    }),
    shippingAdress: yup.object().shape({
      isSameAdress: yup.boolean(),
      firstName: yup.string().when('isSameAdress', {
        is: false,
        then: yup.string().required('required'),
      }),
      lastName: yup.string().when('isSameAdress', {
        is: false,
        then: yup.string().required('required'),
      }),
      country: yup.string().when('isSameAdress', {
        is: false,
        then: yup.string().required('required'),
      }),
      street1: yup.string().when('isSameAdress', {
        is: false,
        then: yup.string().required('required'),
      }),
      street2: yup.string(),
      city: yup.string().when('isSameAdress', {
        is: false,
        then: yup.string().required('required'),
      }),
      state: yup.string().when('isSameAdress', {
        is: false,
        then: yup.string().required('required'),
      }),
      zipCode: yup.string().when('isSameAdress', {
        is: false,
        then: yup.string().required('required'),
      }),
    }),
  }),
  yup.object().shape({
    email: yup.string().required('required'),
    phoneNumber: yup.string().required('required')
  })
]


const Checkout = () => {

  const [activeStep, setActiveStep] = useState(0);
  const cart = useSelector((state) => state.cart.cart);
  const isFirstStep = activeStep === 0;
  const isSecondStep = activeStep === 1;

  const handleFormSubmit = async (value, actions) => {
    setActiveStep(activeStep + 1);
  }

  async function makePayment(values) {

  }

  return (
    <Box width="80%" m="100px auto">
      <Stepper activeStep={activeStep} sx={{ m: "20px 0" }}>
        <Step>
          <StepLabel>Billing</StepLabel>
        </Step>
        <Step>
          <StepLabel>Payment</StepLabel>
        </Step>
      </Stepper>

      <Box>
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={checkoutSchema[activeStep]}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
            setFieldValue
          }) => (
            <form onSubmit={handleSubmit}>
              {isFirstStep && (
                <Shipping 
                  values ={values}
                  errors={errors}
                  touched={touched}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  setFieldValue={setFieldValue}
                />
              )}
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  );
}

export default Checkout;