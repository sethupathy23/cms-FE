import { useState } from 'react' //named import 
  
//named export
 function Counter() {
  // let like=10;
  const [like, setLike] = useState(0);
  const [dislike, setDisLike] = useState(0);
  return (
    <div>
      <button onClick={() => setLike(like + 1)}>Like {like}</button>
      <button onClick={() => setDisLike(dislike + 1)}>Dislike {dislike + 1}</button>
      <p></p>
    </div>
  );
}

export {Counter}; //named export
