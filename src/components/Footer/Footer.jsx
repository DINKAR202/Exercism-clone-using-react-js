import React, { useState } from 'react';

const Footer = () => {
    const myBioData = [
        {
            id:0,
            name:"Dinkar",
            age:'29'
        },
        {
            id:1,
            name:"Nikki",
            age:'29'
        },
    ]
    
    const [myArray, setmyArray] = useState(myBioData)
    const clearArray = () => {
        setmyArray([]);
    }

return (
    <>
      {
        myArray.map((curElm) => {
            return <h1 className='h1style' key={curElm.id}>Name: {curElm.name} & age is : {curElm.age}</h1>
        })
      }
      <button className='btn button-17' onClick={clearArray}>Clear</button>
    </>
  );
}

export default Footer;
