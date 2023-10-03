import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import {useFormik} from 'formik';
import * as yup from 'yup';
import {API} from "./global";

const formValidationSchema = yup.object({
  name:yup
  .string()
  .required(),
  img:yup
  .string()
  .required()
  .min(4)
  .url(),
});

export function AddContent() {
  const {handleSubmit, handleBlur, values, touched, errors,handleChange} = useFormik({
    initialValues: {name: "" , img: ""},
    validationSchema:formValidationSchema,
    onSubmit: (newContent) => {
    console.log(newContent)
  addContent(newContent)
  },
  });
  const navigate = useNavigate();
  const addContent = async ({newContent}) => {
    // const newContent = {
    //   name: name,
    //   img: img,
    // };
    // setContentList([...contentList, newcontent]);
    await fetch(`${API}/cms`,{
      method:"POST",
      body:JSON.stringify(newContent),
      headers:{
        "Content-Type":"application/json",
      },
    });
    navigate("/cms")
  };

  return (
    <form onSubmit={handleSubmit} className='form'>
      <TextField 
      name="name"
      onChange={handleChange} 
      onBlur={handleBlur}
      value={values.name}
      id="outlined-basic" 
      label="Name" 
      variant="outlined" 
      error={touched.name && errors.name}
      helperText={touched.name && errors.name ? errors.name : null}
      />
      

      <TextField 
      name="img"
      onChange={handleChange} 
      onBlur={handleBlur}
      value={values.img}
      id="outlined-basic" 
      label="Image" 
      variant="outlined" 
      error={touched.img && errors.img}
      helperText={touched.img && errors.img ? errors.img : null}
      />
     

      {/* <button onClick={() => {
                  const newcontent = {
                    name:name,
                    img:img,
                };
                setContentList([...contentList, newcontent]);
                }}> Add Content</button> */}
      <Button variant="contained"
       type="submit"
      >Add Content</Button>
      {/* <p>{name}- {img}</p> */}
    </form>
  );
}
