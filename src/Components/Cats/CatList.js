import React from 'react';
// import CatIndex from './CatIndex';
 
const CatList = (props) => {
 return (
   <div>
     {props.breeds.map((cats,index) => <li key={index}>{cats}</li> )}
   </div>
 )
}
 
export default CatList;
