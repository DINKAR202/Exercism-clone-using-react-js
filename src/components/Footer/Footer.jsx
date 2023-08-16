import React, { useState } from 'react';

const Footer = () => {
    // const myBioData = [
    //     {
    //         id:0,
    //         name:"Dinkar",
    //         age:'29'
    //     },
    //     {
    //         id:1,
    //         name:"Nikki",
    //         age:'29'
    //     },
    // ]
    
    // const [myArray, setmyArray] = useState(myBioData)
    // const clearArray = () => {
    //     setmyArray([]);
    // }
        const [myObject, setMyObject] = useState({
            myName:'Dinkar Kumar', myAge:21, degree:"B.E", rollNo: 28, channel: "Apna channel"
        });
        const changeObject = () => {
            setMyObject({...myObject, myAge:23});
        }
    

return (
    <>
      {/* {
        myArray.map((curElm) => {
            return <h1 className='h1style' key={curElm.id}>Name: {curElm.name} & age is : {curElm.age}</h1>
        })
      } */}
      <h1>Name: {myObject.myName} & Age: {myObject.myAge} & Degree {myObject.degree}</h1>

      <button className='btn button-17' onClick={changeObject}>Update</button>
      jmhewnsb jwehmndcb
    </>
  );
}

export default Footer;
