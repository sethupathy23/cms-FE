
import HomeIcon from '@mui/icons-material/Home';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Card from '@mui/material/Card';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Counter } from './Counter';



export function Content({ content, id, deleteButton,editButton}) {
  // const content = {
  //   name:"What is Javascript",
  //   img:"https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_1280.png",
  // }
  const navigate = useNavigate();
  return (
    <Card  className='content-container'>
      <img className="content-img" src={content.img} alt={content.name} />
     <div>
      <Button onClick={()=> navigate(`/cms/${id}`)} className='content-name'>{content.name} </Button>
    {/* <button>
    {deleteButton} {editButton}
    </button> */}
    {/* <Counter /> */}
    {/* <Button  className='content-name' >{content.name}     </Button> */}
    </div>
    </Card >
  );
}
