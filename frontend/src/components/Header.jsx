import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Header() {
  const [isLogin, setIslogin] = useState(false)

  useEffect(() => {
    if (isLogin) {
      setIslogin(true)
    }
  }, [])
  
  return (
    <header>
      <span>logo</span>
      <nav>
        <Link to={'#home'}>Home</Link>
        <Link to={'#contact'}>Contact Us</Link>
      </nav>
      <div className="signup">
        {
        
        !isLogin ? 
        <div className="user-signup">
          <Link to={'#contact'}>SignUp</Link>
          <Link to={'#contact'}>lo</Link>
        </div>
        :
        <Link to={'#contact'}>Logout</Link>
        }
      </div>
    </header>
  )
}

export default Header