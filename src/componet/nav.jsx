import React from 'react'
import { Link } from 'react-router-dom'
import "../componet/nav.css"

export default function Nav() {
  return (
    <div className='Nav'>
        <Link to="/sampel">Home</Link>
        <Link to="/select">selet</Link>
    </div>
  )
}
