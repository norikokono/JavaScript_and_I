// https://www.geeksforgeeks.org/how-to-create-a-read-more-component-in-reactjs/?ref=leftbar-rightbar

import React, { useState } from "react";

  
const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text" style={{color: "LightSkyBlue"}}>
      {isReadMore ? text.slice(0, 150) : text}
      <span onClick={toggleReadMore} className="read-or-hide" style={{color: "Salmon", cursor: "pointer"}}>
        {isReadMore ? "...read more" : " show less"}
      </span>
    </p>
  );
};
  
const ReadMoreContent = () => {
  return (
    <div className="container" style={{marginBottom: 70}}>
      <h4>How to create a Read More component in ReactJS?</h4>
        <ReadMore>
          Pushed the mug off the table as lick i the shoes for stuff and things.
          Lick yarn hanging out of own butt. I just saw other cats inside the house 
          and nobody ask me before using my litter box kitty scratches couch bad kitty 
          and lick the curtain just to be annoying murf pratt ungow ungow yet lounge 
          in doorway bathe private parts with tongue then lick owner's face. 
        </ReadMore>
    </div>
  );
};
  
export default ReadMoreContent;