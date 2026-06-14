import React from 'react'
import{Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <nav>
            <ul className="navbar">
                <li className="list"><Link href="/"className="link">Parent</Link></li>
                <li className="list"><Link href="/useState"className="link">State</Link></li>
                <li className="list"><Link href=""className="link">Effect</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar