import { useEffect, useState } from "react"
import { Link, NavLink } from "react-router-dom"

function Header() {
  const [isLogin, setIslogin] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    
  }, [])
  
  return (
    <>
      {/* <header>
        <span>logo</span>
        <nav>
          <Link to={''}>Home</Link>
          <Link to={'/contact'}>Contact Us</Link>
        </nav>
        <div className="signup">
          {
          !isLogin ? 
          <div className="user-signup">
            <Link to={'/signup'}>SignUp</Link>
            <Link to={'/login'}>lo</Link>
          </div>
          :
          <Link to={''}>Logout</Link>
          }
        </div>
      </header> */}

      <header>
        {/*  lg+  */}
        <div className="mb-2 bg-blue-200 border-b border-gray-200">
          <div className="px-4 mx-auto sm:px-6 lg:px-8">
            <nav className="relative flex items-center justify-between h-16 lg:h-20">
              <div className="hidden lg:flex lg:items-center lg:space-x-10">
                <NavLink to={''} title="Home" className="text-base font-medium text-black"> Home </NavLink>

                <NavLink to={'/about'} title="About" className="text-base font-medium text-black"> About </NavLink>

                <NavLink to={'/contact'} title="Contact" className="text-base font-medium text-black"> Contact Us </NavLink>

                  {/* <NavLink to={''} title="" className="text-base font-medium text-black"> Pricing </NavLink> */}
              </div>

              <div className="lg:absolute lg:-translate-x-1/2 lg:inset-y-5 lg:left-1/2">
                <div className="flex-shrink-0">
                  <NavLink to={''} title="" className="flex">
                    <img className="w-auto h-8 lg:h-10" src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg" alt="" />
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

              <button type="button" onClick={() => setIsMenuOpen(!isMenuOpen)} className={`inline-flex p-2 ml-5 text-black transition-all duration-200 rounded-full hover:bg-slate-300 ${isMenuOpen ? 'bg-gray-800/60 text-white focus:bg-red-600 hover:bg-red-600' : ''} lg:hidden focus:bg-slate-300`}>
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
                  <Link to={''}>Logout</Link>
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
                <NavLink to={''} title="home" className="py-2 text-base font-medium hover:bg-blue-200 text-black transition-all duration-200 focus:text-blue-600"> Home </NavLink>

                <NavLink to={''} title="about" className="py-2 text-base font-medium hover:bg-blue-200 text-black transition-all duration-200 focus:text-blue-600"> About </NavLink>

                <NavLink to={''} title="contact" className="py-2 text-base font-medium hover:bg-blue-200 text-black transition-all duration-200 focus:text-blue-600"> Contact Us </NavLink>

                {/* <NavLink to={''} title="" className="py-2 text-base font-medium hover:bg-blue-200 text-black transition-all duration-200 focus:text-blue-600"> Pricing </NavLink> */}
              </div>

              <hr className="my-4 border-gray-200" />

              <div className="flex flex-col space-y-2">
                <NavLink to={'/signup'} title="" className="py-2 text-base font-medium hover:bg-blue-200 text-black transition-all duration-200 focus:text-blue-600"> Sign up </NavLink>

                <NavLink to={'/login'} title="" className="py-2 text-base font-medium hover:bg-blue-200 text-black transition-all duration-200 focus:text-blue-600"> Login </NavLink>
              </div>
            </div>
          </div>
        </nav>
</header>


    </>
  )
}

export default Header



// import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

// const navigation = [
//   { name: 'Dashboard', href: '#', current: true },
//   { name: 'Team', href: '#', current: false },
//   { name: 'Projects', href: '#', current: false },
//   { name: 'Calendar', href: '#', current: false },
// ]

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

// export default function Example() {
//   return (
//     <Disclosure as="nav" className="bg-gray-800">
//       <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//         <div className="relative flex h-16 items-center justify-between">
//           <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//             {/* Mobile menu button*/}
//             <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
//               <span className="absolute -inset-0.5" />
//               <span className="sr-only">Open main menu</span>
//               <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
//               <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
//             </DisclosureButton>
//           </div>
//           <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
//             <div className="flex shrink-0 items-center">
//               <img
//                 alt="Your Company"
//                 src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
//                 className="h-8 w-auto"
//               />
//             </div>
//             <div className="hidden sm:ml-6 sm:block">
//               <div className="flex space-x-4">
//                 {navigation.map((item) => (
//                   <a
//                     key={item.name}
//                     href={item.href}
//                     aria-current={item.current ? 'page' : undefined}
//                     className={classNames(
//                       item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
//                       'rounded-md px-3 py-2 text-sm font-medium',
//                     )}
//                   >
//                     {item.name}
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>
//           <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
//             <button
//               type="button"
//               className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
//             >
//               <span className="absolute -inset-1.5" />
//               <span className="sr-only">View notifications</span>
//               <BellIcon aria-hidden="true" className="size-6" />
//             </button>

//             {/* Profile dropdown */}
//             <Menu as="div" className="relative ml-3">
//               <div>
//                 <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
//                   <span className="absolute -inset-1.5" />
//                   <span className="sr-only">Open user menu</span>
//                   <img
//                     alt=""
//                     src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
//                     className="size-8 rounded-full"
//                   />
//                 </MenuButton>
//               </div>
//               <MenuItems
//                 transition
//                 className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
//               >
//                 <MenuItem>
//                   <a
//                     href="#"
//                     className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
//                   >
//                     Your Profile
//                   </a>
//                 </MenuItem>
//                 <MenuItem>
//                   <a
//                     href="#"
//                     className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
//                   >
//                     Settings
//                   </a>
//                 </MenuItem>
//                 <MenuItem>
//                   <a
//                     href="#"
//                     className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
//                   >
//                     Sign out
//                   </a>
//                 </MenuItem>
//               </MenuItems>
//             </Menu>
//           </div>
//         </div>
//       </div>

//       <DisclosurePanel className="sm:hidden">
//         <div className="space-y-1 px-2 pb-3 pt-2">
//           {navigation.map((item) => (
//             <DisclosureButton
//               key={item.name}
//               as="a"
//               href={item.href}
//               aria-current={item.current ? 'page' : undefined}
//               className={classNames(
//                 item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
//                 'block rounded-md px-3 py-2 text-base font-medium',
//               )}
//             >
//               {item.name}
//             </DisclosureButton>
//           ))}
//         </div>
//       </DisclosurePanel>
//     </Disclosure>
//   )
// }
