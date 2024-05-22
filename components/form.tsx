

import type { NextPage } from "next";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import styles from "./form.module.css";
import { FormEvent } from "react";
import React, { useState } from 'react';

const DemoForm1: NextPage = () => {
  const [Name, setName]=useState('')
  const [Contactdetails, setContactdetails]=useState('')
  const [Email, setEmail]=useState('')
  const [Howcanweimprove, setHowcanweimprove]=useState('')

  

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const form = {
        Name,
        Contactdetails,
        Email,
        Howcanweimprove,
      }
  
      // submit via api
      const response = await fetch('/api/submit',{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      })
  

    const content = await response.json();
    alert("Your review has been submitted.")

    setName('')
    setContactdetails('')
    setEmail('')
    setHowcanweimprove('')


  }



  
  return (
    <div className={styles.demoForm1}>
      <div className={styles.shareYourTravelsForm}>
        
        <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formHeader}>
        <div className={styles.yourFeedbackIs}>YOUR FEEDBACK IS VALUABLE</div>
        </div>        <div className={styles.formFields}>
        <div className={styles.nameInput}>
           <TextField
            className={styles.input}
            color="primary"
            name="Name"
            id="Name"
            label="Name"
            required={true}
            variant="outlined"
            sx={{ "& .MuiInputBase-root": { height: "56px" } }}
            value={Name}
            onChange={e=>setName(e.target.value)}
          />
        </div>
        <div className={styles.nameInput}>
          <TextField
            className={styles.input}
            color="primary"
            name="Contactdetails"
            id="Contactdetails"
            label="Contact details"
            size="medium"
            required={true}
            variant="outlined"
            type="text"
            sx={{ "& .MuiInputBase-root": { height: "56px" } }}
            value={Contactdetails}
            onChange={e=>setContactdetails(e.target.value)}
          />
        </div>
        <div className={styles.nameInput}>
          <TextField
            className={styles.input}
            color="primary"
            name="Email"
            id="Email"
            label="Email"
            required={true}
            variant="outlined"
            sx={{ "& .MuiInputBase-root": { height: "56px" } }}
            value={Email}
            onChange={e=>setEmail(e.target.value)}
          />
        </div>
        <div className={styles.nameInput}>
          <TextField
            className={styles.input3}
            color="primary"
            name="Howcanweimprove"
            id="Howcanweimprove"
            rows={4}
            label="How can we improve"
            placeholder="How can we improve"
            required={true}
            variant="outlined"
            multiline
            value={Howcanweimprove}
            onChange={e=>setHowcanweimprove(e.target.value)}
          />
        </div>
      </div>

          <button type='submit' className={styles.formSubmitButton}>
            <div className={styles.submit}>Submit</div>
          </button>
        </form> 
        
      </div>
      
      
      
    </div>

    

  );
};

export default DemoForm1;

