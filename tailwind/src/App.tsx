import { useState } from 'react'
import './App.css'
import HeaderComponent from './assets/Components/header/headerComponent'

function App() {

  return (
    <div id="container-geral" className='min-h-screen w-full flex flex-col bg-[#1f1d1d]"'>
      <HeaderComponent />
    </div>
  )
}

export default App