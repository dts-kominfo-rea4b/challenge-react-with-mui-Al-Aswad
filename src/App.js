import { Box, Grid } from "@mui/material";
import { display, flexbox } from "@mui/system";
import { useState } from "react";
import "./App.css";
import Contact from "./components/Contact";
import ContactForm from "./components/ContactForm";
import Header from "./components/Header";
import contactJSON from "./data/contacts.json";

// Uncomment untuk memuat daftar kontak
// import contactsJSON from './data/contacts.json';
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm

  // console.log(contactJSON);
  const [contacts, setContacts] = useState(contactJSON);
  const [newContact, setNewContact] = useState({
        name: "",
        phone: "",
        email: "",
        photo: "",
    });

  const handleSubmit = (event) => {
    console.log("event ",event);
        setContacts([...contacts, event]);
    }

  return (
    <>
    <Header />
    
    <Box
      className="App"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "100px",
      }}
    >
      <Grid container spacing={2} sx={{ maxWidth: "md" }}>
        <Grid item xs={6}>
          <ContactForm  handleClick={handleSubmit}/>
        </Grid>
        <Grid item xs={6}>
          {contacts.map((contact, index) => (
            <Contact key={index} data={contact} />
          ))}
        </Grid>
      </Grid>
    </Box>
    </>
  );
};

export default App;
