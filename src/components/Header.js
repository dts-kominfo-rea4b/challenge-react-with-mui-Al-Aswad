// Kalian bisa menambahkan CSS di src/components/Header.css
// atau langsung tambahkan dengan sx={{}}
import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';

// Header berisi judul dan subtitle
// Judul: Call a Friend
// Subtitle: Your friendly contact app
const Header = () => {
  return (
      <Card sx={{ marginBottom: '40px' }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Call a Friend
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Your friendly contact app
          </Typography>
        </CardContent>
      </Card>
  );
};

export default Header;
