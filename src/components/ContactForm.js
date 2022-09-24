// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card

import { Button, Card, CardContent, TextField, Typography } from "@mui/material";
import { useState } from "react";

const ContactForm = ({handleClick}) => {
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada
    const [newContact, setNewContact] = useState({
        name: "",
        phone: "",
        email: "",
        photo: "",
    });
    const handleChange = (e) => {
        setNewContact({
            ...newContact,
            [e.target.name]: e.target.value,
        });
    }
    return (
       
        <>
            <Card sx={{ marginBottom:'40px' }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Contact Form
                    </Typography>
                    <TextField
                        id="name"
                        fullWidth
                        label="Name"
                        variant="standard"
                        name="name"
                        value={newContact.name}
                        onChange={handleChange}
                    />
                    <TextField
                        id="phone"
                        label="Phone"
                        fullWidth
                        variant="standard"
                        name="phone"
                        value={newContact.phone}
                        onChange={handleChange}
                    />
                    <TextField
                        id="email"
                        label="Email"
                        fullWidth
                        variant="standard"
                        name="email"
                        value={newContact.email}
                        onChange={handleChange}
                    />
                    <TextField
                        id="photo"
                        fullWidth
                        label="Photo"
                        variant="standard"
                        name="photo"
                        value={newContact.photo}
                        onChange={handleChange}
                    />
                </CardContent>

                <Button 
                    sx={{ marginBottom: '20px' }}
                    onClick={() => handleClick(newContact)}
                    variant="contained">Add</Button>
            </Card>
         </>
    );
}

export default ContactForm;