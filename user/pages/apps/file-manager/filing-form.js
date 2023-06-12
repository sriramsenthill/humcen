import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

const PatentFilingForm = () => {
  const [inventorName, setInventorName] = useState('');
  const [inventionTitle, setInventionTitle] = useState('');
  const [description, setDescription] = useState('');
  const [claims, setClaims] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // You can access the form values using the state variables
    console.log('Form submitted');
    console.log('Inventor Name:', inventorName);
    console.log('Invention Title:', inventionTitle);
    console.log('Description:', description);
    console.log('Claims:', claims);

    setIsSubmitted(true);
  };

  const handleOk = () => {
    setIsSubmitted(false);
    // You can add any additional logic here
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Inventor Name:
          <input
            type="text"
            value={inventorName}
            onChange={(e) => setInventorName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Invention Title:
          <input
            type="text"
            value={inventionTitle}
            onChange={(e) => setInventionTitle(e.target.value)}
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <br />
        <label>
          Claims:
          <textarea
            value={claims}
            onChange={(e) => setClaims(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>

      <Dialog open={isSubmitted} onClose={handleOk}>
        <DialogTitle>Success</DialogTitle>
        <DialogContent>
          <p>Your form has been submitted successfully.</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleOk}>OK</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default PatentFilingForm;
