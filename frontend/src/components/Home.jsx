import { useState } from "react"
// import {childBnWImg} from '../assets/img/child-black-white.jpg'
import childBnWImg from '../assets/img/child-black-white.jpg'
// import {oceanBnWImg} from '../assets/img/color-black-white-9.jpg'


function Home() {
  const [message, setMessage] = useState('')
  const [imageFile, setImageFile] = useState(false)


  function handleChange(e) {
    e.preventDefault()
    // console.dir(e.target);
    
    setImageFile(e.target.files[0])
  }

    //   console.log(imageFile);
  

  async function handleSubmit(e) {
    e.preventDefault()

    if (!imageFile) {
      setMessage("Please select an image to upload.")
      return
    }

    const formData = new FormData()
    formData.append('img', imageFile)

    try {
        const response = await fetch('', {
            method: 'POST',
            body: {...formData}
        })

        if (response.ok) {
            const responseData = await response.json()
            setMessage(responseData?.message || 'Image uploaded successfully!')
        } else {
            const error = await response.json()
            setMessage(`Error: ${JSON.stringify(error)}`)
        }
    } catch (error) {
        console.error('Error: ', error)
        setMessage("Something went wrong. Please, try again!")
    }

  }
  
  return (
    <main className="bg-gradient-to-b from-green-50 to-green-100">
        <section className="py-12 sm:py-8 lg:py-20">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                    <div>
                        <h1 className="text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                            Transform your Images, with
                            <div className="relative inline-flex">
                                {/* <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-[#4ADE80]"></span> */}
                                <span className="heading relative text-4xl font-bold text-white bg-gray-800 sm:text-6xl lg:text-7xl">BlackWhiteLab.</span>
                            </div>
                        </h1>

                        <p className="mt-8 text-base text-black sm:text-xl">Discover the beauty of simplicity with our cutting-edge image and video processing application. Convert your photos and videos into stunning black-and-white masterpieces effortlessly.</p>

                        <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
                            <a href="#img-processing-container" title="" className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-orange-500 hover:bg-orange-600 focus:bg-orange-600" role="button"> Start exploring </a>
                        </div>
                    </div>

                    <div>
                        <img className="w-full" src={childBnWImg} alt="" />
                    </div>
                </div>
            </div>
        </section>

        <section className="mt-2 py-5 sm:py-16 lg:py-24">
            <h3 className="mb-4 py-2 my-2 font-semibold text-3xl">Try Your Own Image</h3>
            {message === '' ? '' : <p className="my-4 text-base text-red-600">{message}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="file"
                    name="img"
                    id="image"
                    accept="image/*"
                    onChange={(e) => handleChange(e)}
                    placeholder="Select Your Image"
                    className="block w-[80%] mx-auto py-4 pl-10 pr-4 border-blue-600 cursor-pointer text-black placeholder-gray-500 transition-all duration-200 border-dashed border-2 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                    required
                />
                {/* <label htmlFor="image" className="font-semibold text-2xl text-gray-900"> Select your Image </label> */}
                <button type="submit"
                    className="inline-flex items-center justify-center w-max mt-6 px-10 py-2 text-base font-semibold text-white transition-all duration-200 bg-amber-600 border border-transparent rounded-md focus:outline-none hover:bg-amber-500 focus:bg-amber-700"
                >Upload</button>
            </form>
        </section>
    </main>

  )
}

export default Home