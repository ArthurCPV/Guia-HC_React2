import { useState } from 'react'
import './App.css'
import HeaderComponent from './assets/Components/header/headerComponent'
import MenuNavComponent from './assets/Components/menuNav/menuNavComponent'
import MainComponent from './assets/Components/main/mainComponent'

function App() {

  return (
    <div id="container-geral" className='min-h-screen w-full flex flex-col bg-[#1f1d1d]"'>
      <HeaderComponent />
      <MenuNavComponent/>
      <MainComponent/>
    </div>
  )
}

export default App