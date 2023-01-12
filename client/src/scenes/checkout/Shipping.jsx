import React from 'react';
import { Box, Checkbox, FormControlLabel, Typography } from '@mui/material';
import AddressForm from './AddressForm';


const Shipping = ({
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
  setFieldValue,
}) => {
  return (
    <Box m='30px auto'>
      {/* BILLING FORM */}
      <Box>
        <Typography sx={{ mb: '15px'}} fontSize='18px'>
          Billing Information
        </Typography>
        <AddressForm 
          type='billingAddress'
          value={values.billingAddress}
          errors={errors}
          touched={touched}
          handleBlur={handleBlur}
          handleChange={handleChange}
        />
      </Box>
    </Box>
  )
};

export default Shipping;