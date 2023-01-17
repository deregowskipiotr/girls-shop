import React from 'react';
import { useTheme } from '@mui/material';
import { Box, Typography } from '@mui/material';
import { shades } from '../../theme';

const Footer = () => {

    const {
      palette: { neutral },
    } = useTheme();

  return (
    <Box mt="70px" p="40px 0" backgroundColor={neutral.light}>
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Box width="clamp(20%, 30%, 40%)">
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="30px"
            color={shades.secondary[500]}
          >
            Girls Shop
          </Typography>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo dicta
            molestias odio mollitia dolorum deleniti, minima, cumque a possimus
            in quas, ipsum facilis aliquid sit autem aspernatur voluptatem iusto
            sunt. Suscipit molestiae perspiciatis earum ad accusamus, dicta
            excepturi ex voluptatum.
          </div>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            About Us
          </Typography>
          <Typography mb="30px">Careers</Typography>
          <Typography mb="30px">Our Stores</Typography>
          <Typography mb="30px">Terms & Conditions</Typography>
          <Typography mb="30px">Privacy Policy</Typography>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Customer Care
          </Typography>
          <Typography mb="30px">Help Center</Typography>
          <Typography mb="30px">Track Your Order</Typography>
          <Typography mb="30px">Corporate & Bulk Purchasing</Typography>
          <Typography mb="30px">Return & Refundd</Typography>
        </Box>

        <Box width="clamp(20%, 25%, 30%)">
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Contact Us
          </Typography>
          <Typography mb="30px">Warsaw, some address</Typography>
          <Typography mb="30px">Email: something@gmail.com</Typography>
          <Typography mb="30px">mobile: 123 123 123</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;