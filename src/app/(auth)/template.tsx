"use client"
import {useState} from 'react'

export default function AuthLayout({
    children,
}:{children:React.ReactNode}){
/** Get Active Links */
const [state,setState] = useState('')
    return (
        <div>
            Template
      <input type="text" value={state} onChange={e => setState(e.target.value)}/>
       {children}
        </div>
    )
}