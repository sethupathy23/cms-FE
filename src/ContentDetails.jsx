import { useParams, useNavigate } from "react-router-dom";
import { Card } from '@mui/material';
import Button from '@mui/material/Button';
import { useEffect, useState } from "react";
import {API} from "./global";

export function ContentDetails() {
  const { id } = useParams();

  const [content, setContent] = useState([]);
  // useEffect(()=>{
  //   fetch(`${API}cms/${id}`)
  //   // .then((data) => data.json())
  //   console.log(data)
  //   .then((cms) => SetContent(cms));
  //   },[]);
 console.log(API);
    useEffect(() => {
      fetch(`${API}/cms/${id}`)
        .then((response) => response.json()) // Parse the response as JSON
        .then((cms) => setContent(cms)) // Update the content state
        .catch((error) => console.error(error)); // Handle any errors
    }, [API, id]);
 
  console.log(content);
  const navigate = useNavigate();
  const deletecontent = () => {
    console.log("deleting movie");
  }
  return (
    <Card className='content-detail-container'>
      <div className='content-detail-image'>
        <img className='content-detail-image1' src={content.img} alt="" />
      </div>
      <div>
        <div className='content-details-list'>
          <h1>{content.name}?</h1>
          <h3>{content.summary}</h3>
          <h2>History</h2>
          <h3>{content.creation}</h3>
          <h2>Other usage and Functions</h2>
          <h3>{content.otherusage}</h3>
          <Button className='btn' onClick={() => navigate(-1)}>back</Button>
          <Button className='btn'  onClick={()=> deletecontent()}>Delete</Button>
        </div>
      </div>
    </Card>
  );
}
