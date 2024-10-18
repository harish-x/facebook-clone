"use client"
import React from 'react';
import {useFormStatus} from "react-dom"

const AddButton = () => {
    const {pending} = useFormStatus();
  return (
    <div>
          <button disabled={pending} className='bg-blue-500 p-2 mt-2 rounded-md text-white disabled:bg-blue-300 disabled:cursor-not-allowed'>{ pending ? 'Sending...' : 'Send'}</button>
    </div>
  )
}

export default AddButton
