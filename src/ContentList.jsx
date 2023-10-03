import { Content } from './Content';
import { AddContent } from './AddContent';
import { useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Navigate } from 'react-router-dom';
import {API} from "./global";
import { useState } from 'react';





export function ContentList() {
  const [contentList, setContentList] = useState([]);
  const getContent = () =>{
    fetch(`${API}/cms`,{
      method:"GET",
    })
    .then((data) => data.json())
    .then((mvs) => setContentList(mvs));
  }
  useEffect(() => getContent(),[]);
  //render props 
  const  deleteContent = (id)=> {
    Console.log("delete content....",id);
    //delete -> content for refresh data
    fetch(`${API}cms/${id}`, {
      method:"DELETE",
    }).then(() => getContent());
  };
  // const navigate = useNavigate();
return (
    <div>
      <div className='content-list'>
        {contentList.map((cn) => (
          <Content 
          key={cn.id} 
          content={cn} 
          id={cn.id}
          deleteButton={<IconButton sx={{marginLeft:"auto"}}
           onClick={() => deleteContent(cn.id)}>
            Delete
            <DeleteIcon />
            </IconButton>}
          />
          // editButton = {<IconButton sx={{marginLeft:"auto"}}
          //  onClick={() => Navigate(`/cms/edit/${cn.id`})}>
           
          //   <EditIcon />
          //   </IconButton>}
          // />
        ))}
       
      </div>
      
    </div>
  );
}

