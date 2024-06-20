import React from 'react'
import { Link ,Outlet} from 'react-router-dom'

export default function History() {
  return (
    <div>
        <nav>
            {/* başına / koyma */}
            <Link to='company'>Our Companies</Link>
            <Link to='team'>Team</Link>
        </nav>

        {/* outlet ile iç içe root kullanılabilir oluyor */}
        <Outlet></Outlet>
    </div>
  )
}
