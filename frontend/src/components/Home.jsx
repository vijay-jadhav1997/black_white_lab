import { useEffect, useState } from "react"
// import {childBnWImg} from '../assets/img/child-black-white.jpg'
import childBnWImg from '../assets/img/child-black-white.jpg'
// import {oceanBnWImg} from '../assets/img/color-black-white-9.jpg'


function Home() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    (async function() {
      const response = await fetch('http://127.0.0.1:8000/index/')
      const result =  await response.json()
      console.log(result);
      if(message === 'Jay Hari') {
        setMessage(result.message)
      }
    })()
  }, [message])
  
  return (
    <div className="bg-gradient-to-b from-green-50 to-green-100">

    <section className="py-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                <div>
                    <h1 className="text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                        Transform your Images, with
                        <div className="relative inline-flex">
                            {/* <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-[#4ADE80]"></span> */}
                            <h1 className="heading relative text-4xl font-bold text-black sm:text-6xl lg:text-7xl">BlackWhiteLab.</h1>
                        </div>
                    </h1>

                    <p className="mt-8 text-base text-black sm:text-xl">Discover the beauty of simplicity with our cutting-edge image and video processing application. Convert your photos and videos into stunning black-and-white masterpieces effortlessly.</p>

                    <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
                        <a href="#" title="" className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-orange-500 hover:bg-orange-600 focus:bg-orange-600" role="button"> Start exploring </a>

                        <a href="#" title="" className="inline-flex items-center mt-6 text-base font-semibold transition-all duration-200 sm:mt-0 hover:opacity-80">
                            <svg className="w-10 h-10 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path fill="#F97316" stroke="#F97316" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Watch video
                        </a>
                    </div>
                </div>


                <div>
                    <img className="w-full" src={childBnWImg} alt="" />
                    {/* <img className="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/2/hero-img.png" alt="" /> */}
                </div>
            </div>
        </div>
    </section>
</div>

  )
}

export default Home