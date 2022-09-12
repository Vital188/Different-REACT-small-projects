import { useEffect } from "react";
import { useState } from "react";
import Book from "./Book";



function Books (props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("https://in3.dev/knygos/")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        // (error) => {
        //   setIsLoaded(true);
        //   setError(error);
        // }
      )
  }, [])

  
    return (
      <ul>
        {items.length>0 ? items.map(item => (
          <Book key={item.id} props={item}/>
        )): <div className="loader">
        <div className="container">
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
        </div>
    </div>}
      </ul>
    );
  }


export default Books;