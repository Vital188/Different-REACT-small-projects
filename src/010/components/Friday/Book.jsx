function Book ({props}) {
 
    return (

         
       <div>
            <img src={props.img} alt={props.books}></img>
            {props.title} {props.author}{props.price}
       </div>

        );
    }
    
    export default Book;