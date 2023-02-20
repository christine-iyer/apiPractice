import { assets } from "./display/Assets";
import React from 'react'

const NewData = ({results}) => {
     let arr1 = [
          ...results

     ];
     
     let arr2 = [
        ...assets
     ];
     
     let arr3 = arr1.map((item, i) => Object.assign({}, item, arr2[i]));
  return (
    <div>{arr3}</div>
  )
}

export default NewData