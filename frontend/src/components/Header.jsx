import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"

function Header({isLogin, setIsLogin}) {
  // const [isLogin, setIsLogin] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigate = useNavigate();

  async function handleLogout() {
    const apiUrl = import.meta.env.VITE_API_URL

    const refreshToken = localStorage.getItem("refreshToken")

    if (!refreshToken) {
      console.error("No refresh token found");
      return;
    }
    
    const response = await fetch(`${apiUrl}auth/user-logout/`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({refresh: refreshToken}),
      credentials: 'include',
    });

    const result = await response.json();
    if (response.ok) {
      alert(result.message);
      setIsLogin(false)

      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      
      navigate("/login");
    } else {
      alert('Logout failed');
    }
  };
  
  return (
    <>
      <header>
        {/*  lg+  */}
        <div className="mb-2 bg-blue-200 border-b border-gray-200">
          <div className="px-4 mx-auto sm:px-6 lg:px-8">
            <nav className="relative flex items-center justify-between h-16 lg:h-20">
              <div className="hidden lg:flex lg:items-center lg:space-x-10">
                <NavLink to={''} title="Home" className="text-base font-medium text-black"> Home </NavLink>

                <NavLink to={''} title="About" className="text-base font-medium text-black"> About </NavLink>

                <NavLink to={''} title="Contact" className="text-base font-medium text-black"> Contact Us </NavLink>

                <NavLink to={''} title="" className="text-base font-medium text-black"> Profile </NavLink>

                {/* <NavLink to={'/about'} title="About" className="text-base font-medium text-black"> About </NavLink>

                <NavLink to={'/contact'} title="Contact" className="text-base font-medium text-black"> Contact Us </NavLink>

                <NavLink to={'/profile'} title="" className="text-base font-medium text-black"> Profile </NavLink> */}
              </div>

              <div className="lg:absolute lg:-translate-x-1/2 lg:inset-y-5 lg:left-1/2">
                <div className="flex-shrink-0">
                  <NavLink to={''} title="" className="flex">
                    {/* <img className="w-auto h-8 lg:h-10" src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg" alt="" /> */}
                    <span className="relative text-3xl py-1 px-2 rounded-md font-semibold text-white bg-gray-800 sm:text-2xl lg:text-3xl">BlackWhiteLab</span>
                  </NavLink>
                </div>
              </div>

              {/*
                <button type="button" className="flex items-center justify-center ml-auto text-white bg-black rounded-full w-9 h-9 lg:hidden">
                  <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </button>
                */
              }

              <button type="button" onClick={() => setIsMenuOpen(!isMenuOpen)} className={`inline-flex p-2 ml-5 text-black transition-all duration-200 rounded-full hover:bg-slate-600 hover:text-white focus:bg-slate-800 ${isMenuOpen ? 'bg-gray-800/60 text-white focus:bg-red-500 hover:bg-red-600' : ''} lg:hidden focus:text-white`}>
                {
                  isMenuOpen 
                  ?
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  :
                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                }
              </button>

              <div className="hidden lg:flex lg:items-center lg:space-x-10">
                {
                  !isLogin ?
                  <>
                    <NavLink to={'/signup'} title="" className="text-base font-medium text-black"> Sign up </NavLink>
                    <NavLink to={'/login'} title="" className="text-base font-medium text-black"> Login </NavLink>
                  </>
                  :
                  <button onClick={() => handleLogout()} className="text-base font-medium text-black">Logout</button>
                }

                {/* <NavLink to={''} title="" className="flex items-center justify-center w-10 h-10 text-white bg-black rounded-full">
                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </NavLink> */}
              </div>
            </nav>
          </div>
        </div>

        {/*  xs to lg  */}
        <nav className={`py-4 bg-white lg:hidden ${isMenuOpen ? '' : 'hidden'}`}>
          <div className="px-4 mx-auto sm:px-6 lg:px-8">
            {/* <div className="flex items-center justify-between">
              <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Menu</p>

              <button type="button"  className="inline-flex p-2 text-black transition-all duration-200 rounded-md focus:bg-red-600 hover:bg-red-600 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div> */}

            <div className='mt-2 shadow-md' onClick={() => setIsMenuOpen(!isMenuOpen) }>
              <div className="flex flex-col space-y-2">
                <NavLink to={''} title="home" className="py-2 text-base text-center font-medium hover:bg-blue-200 text-black transition-all duration-200 focus:text-blue-600"> Home </NavLink>

                <NavLink to={''} title="about" className="py-2 text-base text-center font-medium hover:bg-blue-200 text-black transition-all duration-200 focus:text-blue-600"> About </NavLink>

                <NavLink to={''} title="contact" className="py-2 text-base text-center font-medium hover:bg-blue-200 text-black transition-all duration-200 focus:text-blue-600"> Contact Us </NavLink>

                {/* <NavLink to={''} title="" className="py-2 text-base font-medium hover:bg-blue-200 text-black transition-all duration-200 focus:text-blue-600"> Pricing </NavLink> */}
              </div>

              <hr className="my-4 border-gray-200" />

              <div className="flex flex-col pb-2 space-y-2">
                {/* {
                  !isLogin ?
                  <>
                    <NavLink to={'/signup'} title="signup" className="py-2 text-base text-center font-medium hover:bg-blue-200 text-black transition-all duration-200 focus:text-blue-600"> Sign up </NavLink>
                    <NavLink to={'/login'} title="login" className="py-2 text-base text-center font-medium hover:bg-blue-200 text-black transition-all duration-200 focus:text-blue-600"> Login </NavLink>
                  </>
                  :
                  <Link to={''} title="logout" className="py-2 text-base text-center font-medium hover:bg-blue-200 text-black transition-all duration-200 focus:text-blue-600"> Login </Link>
                } */}
                {
                  !isLogin ?
                  <>
                    <NavLink to={'/signup'} title="" className="py-2 text-base text-center font-medium hover:bg-blue-200 text-black transition-all duration-200 focus:text-blue-600"> Sign up </NavLink>
                    <NavLink to={'/login'} title="" className="py-2 text-base text-center font-medium hover:bg-blue-200 text-black transition-all duration-200 focus:text-blue-600"> Login </NavLink>
                  </>
                  :
                  <button onClick={() => handleLogout()} className="py-2 text-base text-center font-medium hover:bg-red-600 hover:text-white text-black transition-all duration-200 focus:text-red-600">Logout</button>
                }
              
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header