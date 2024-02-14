import { CORE_CONCEPTS } from "./data"

const Card=({image,title,description})=>{
    return(
      <li>
        <img src={image} alt='Images'/>
      <h1>{title}</h1>
      <p>{description}</p>
      </li>
    )
  
  }
  export default Card;