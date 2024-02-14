


const Notes=({date,name, address, title})=>{


    
    return(
    



        <article className="product">
            <h1>{date}</h1>
            <h2>{name}</h2>
            <p className="price">${address}</p>
            <p>{title}</p>
        </article>


        

 
);
};
export default  Notes;