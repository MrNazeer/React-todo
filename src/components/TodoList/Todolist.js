import React from 'react'
import "./Style.scss"
import { AiFillDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
export  function TodoList(data) {
  const {value} = data
  return (
  <>
  <li className='list'>{value}
  <div className='wraper'>
  <span><AiFillDelete /></span>
  <span><AiFillEdit /></span>
  </div>
  </li>
  
  </>
  )
}
