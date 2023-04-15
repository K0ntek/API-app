import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)
  // const [newBrand, setBrand] = useState();

  // useEffect(()=>{
  //   fetch('https://dummyjson.com/products/1')
  //   .then(res=>res.json())
  //   .then(data=>{
  //     console.log(data)
  //     const {images} = data;
  //     console.log(images)
  //     setBrand(images)
  //   })
  //   .then(()=>{
  //     console.log(newBrand)
  //   })
  // }, [])


  const [user, setUser] = useState();
  const [result, setResult] = useState(0);
  // useEffect(()=>{
  //   fetch('https://dummyjson.com/users')
  //     .then(res=>res.json())
  //     .then(data=>{
  //       console.log(data)
  //       setUser(user)
  //     })
  // }, [])

  const fetchUser =()=>{
    fetch('https://dummyjson.com/users?limit=100')
    .then(res=>res.json())
    .then(data=>{
      data.users.forEach(element => {
        if(element.id == user){
          setResult(element)
          console.log(element)
        }
      });
    })
  }

  console.log(result)

  return (
    <div className='text-center'>
      <h1>API users</h1>
    <div className='justify-center py-[50px]'>
    <input type='number' placeholder='podaj ID' value={user} onChange={(e)=>setUser(e.target.value)} className='text-[25px] bg-transparent border-b-[2px] border-[#D4AF37] px-[10px] my-[10px] focus:outline-none'/><br/>
    <button onClick={fetchUser} className='text-[18px] bg-[#D4AF37] px-[25px] py-[10px] rounded-xl border-[1px] border-transparent hover:border-black hover:rounded-none transition-all duration-200'>Wyślij</button>   
    </div>
  
    <div className="justify-center m-auto rounded-3xl w-[60%] min-h-[400px] bg-[#D4AF37]">
      <div className='text-[20px] text-justify'>
      {/* {(user>100 || user<=0) &&(<p>Out of range</p>)} */}

        <div className='grid grid-cols-[69%_3px_30%] px-[40px] py-[20px]'>  
             <div className='mx-auto my-auto'>
             <div className='flex'><p className='font-orbitron'>id: </p><p className=' font-michroma font-bold border-b-[2px] border-purple-900 px-[10px]'> {result.id}</p></div> 
             <div className='flex'><p className='font-orbitron'>gender: </p><p className=' font-michroma font-bold border-b-[2px] border-purple-900 px-[10px]'> {result.gender}</p></div> 
             <div className='flex'><p className='font-orbitron'>name: </p><p className=' font-michroma font-bold border-b-[2px] border-purple-900 px-[10px]'> {result.firstName}</p></div>
            <div className='flex'><p className='font-orbitron'>surname: </p><p className=' font-michroma font-bold border-b-[2px] border-purple-900 px-[10px]'> {result.lastName}</p></div>
            <div className='flex'><p className='font-orbitron'>e-mail: </p><p className=' font-michroma font-bold border-b-[2px] border-purple-900 px-[10px]'> {result.email}</p></div>
            <div className='flex'><p className='font-orbitron'>phone: </p><p className=' font-michroma font-bold border-b-[2px] border-purple-900 px-[10px]'> {result.phone}</p></div>
            <div className='flex'><p className='font-orbitron'>birth date: </p><p className=' font-michroma font-bold border-b-[2px] border-purple-900 px-[10px]'> {result.birthDate}</p></div>
            </div>
            <div className='w-[3px] h-[90%] bg-purple-900 relative top-[5%]'></div>
           <div> <img src={result.image}/></div> 
         </div> 
      </div>
    </div>
    </div>
  
  )
}

export default App
