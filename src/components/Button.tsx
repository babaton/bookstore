import React, { ButtonHTMLAttributes } from 'react'

export default function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className='bg-slate-500 rounded px-3 py-2 text-slate-100 hover:bg-slate-600 w-full' {...props}/>
  )
}
