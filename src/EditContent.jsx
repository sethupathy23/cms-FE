import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate, useParams } from 'react-router-dom';
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

export function EditContent() {

  const { id } = useParams();

  const [content, SetContent] = useState(null);
  useEffect(()=>{
    fetch(`cms/${id}`)
    .then((data) => data.json())
    .then((cms) => SetContent(cms));
  },[]);
 
  console.log(content);
  return content ? <EditContentForm content={content} /> : <h2>"Loading..."</h2> 
}

function EditContentForm({content}){
  const {handleSubmit, handleBlur, values, touched, errors} = useFormik({
    initialValues: {name: "" , img: ""},
    validationSchema:formValidationSchema,
    onSubmit: (updateContent) => {
    console.log(updateContent);
  updateContent(updateContent);
  },
  });
  const navigate = useNavigate();
  const updateContent = async ({updateContent}) => {
    console.log(updateContent);
   // setContentList([...contentList, newcontent]);
    await fetch(`${API}/cms${content.id}`,{
      method:"PUT",
      body:JSON.stringify(updateContent),
      headers:{
        "Content-Type":"application/json",
      },
    });
    navigate("/cms")
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <Button color='success' variant="contained"
       type="submit"
      >Save</Button>
      <p>{name}- {img}</p>
    </form>
  );
}
