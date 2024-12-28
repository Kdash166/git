import './ImageList.css';

import ImageShow from "./ImageShow";

function ImageList({ images }) {

  const renderedImages = images.map((image) =>{
    return <ImageShow key={image.id} image={image} />;

    // keys must be in the top most element 
    //  must be a string or number
    // inside a single array all keys should be unique. 
    // don't want to use maths.random - should be consistent across rerenders.
    // what to pick as a key - probably the APIs id that it has assigned which it fetches from a database. 
    //  you can either use an incremented index, or you could make and assign your own unique id. 
  })
  return <div className ="image-list"> {renderedImages} </div>;
}

export default ImageList;
