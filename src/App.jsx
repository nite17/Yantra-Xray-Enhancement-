import { useState } from 'react'
import './App.css'
import NavBar from'./components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <html class="">
      <body class="min-w-screen min-h-screen relative ">
        <div class="absolute inset-0  bg-stone-200  ">
          <NavBar/>
          <div class="flex space-x-32">
            <div class="text-center">
              <p class="text-4xl text-black font-md ml-8 mt-48">We Don't Enhance X-Rays</p>
              <p class="text-4xl text-black font-md ml-8 mt-2">We Enhance Lives</p>
              <p class="text-gray-600 text-md ml-6 mt-8 px-8">Empowering the world with advanced </p>
              <p class="text-gray-600 text-md ml-6  px-8">Radiology Ai.</p>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}

export default App
