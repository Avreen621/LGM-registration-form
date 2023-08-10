import React, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button } from '@mui/material';
import { styled } from '@mui/system';

const StyledFormGroup = styled('div')({
  width: "50%",
  margin: "auto",
  padding: 20,
  border: "1px solid black",
});

const initialFormData = {
  fullName: '',
  email: '',
  website: '',
  imageLink: '',
};

export default function Contact() {
  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can perform additional actions here if needed

    // Clear the form fields after submission
    setFormData(initialFormData);
  };

    return (
      <div>
        <h1>Registration form</h1>
        <StyledFormGroup>
          <form onSubmit={handleSubmit}>
            <FormControl>
              <InputLabel>Full Name</InputLabel>
              <Input
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl>
              <InputLabel>Email</InputLabel>
              <Input
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl>
              <InputLabel>Website</InputLabel>
              <Input
                name="website"
                value={formData.website}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl>
              <InputLabel>Image link</InputLabel>
              <Input
                name="imageLink"
                value={formData.imageLink}
                onChange={handleInputChange}
              />
            </FormControl>
            <Button type="submit" variant="contained" color='secondary'>
              SEND
            </Button>
          </form>
        </StyledFormGroup>
  

      {/* Display entered data */}
      <div>
        <h2>Entered Data:</h2>
        <p>Full Name: {formData.fullName}</p>
        <p>Email: {formData.email}</p>
        <p>Website: {formData.website}</p>
        <p>Image Link: {formData.imageLink}</p>
      </div>
    </div>
  );
}

