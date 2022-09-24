// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import { RoundedCorner } from '@mui/icons-material';
import { Card, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
    // Contact berisi foto, nama, telepon, dan email
    // console.log('contact ',data);

    return (
    <Card 
        sx={{
        display:'flex', 
        // flexDirection:'column', 
        alignItems:'center', 
        justifyContent:'center', 
        height:'100px', 
        margin:'2px'}}>
        <Box sx={{width:'50px', height:'50px', borderRadius:'50%', overflow:'hidden', margin:'10px'}}>
            <img width={100} src={data.photo} alt={data.name} />
        </Box>
        <Box 
            sx={{ display:'flex', 
            alignItems:'start', 
            justifyContent:'center', 
            flexDirection:'column',  margin:'10px'}}>
            <Typography variant="h6">{data.name}</Typography>
            <Typography variant="subtitle1">{data.phone}</Typography>
            <Typography variant="subtitle1">{data.email}</Typography>
        </Box>
    </Card>
    );
};

export default Contact;
