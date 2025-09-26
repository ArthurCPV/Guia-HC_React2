import { useState } from 'react'
import './index.css'
import HeaderComponent from './assets/Components/header/headerComponent'
import MenuNavComponent from './assets/Components/menuNav/menuNavComponent'
import MainComponent from './assets/Components/main/mainComponent'
import FooterFormatComponent from './assets/Components/footer/footerFormatComponent'

function App() {

  return (
    <div id="container-geral" className="min-h-screen w-full flex flex-col bg-[#1f1d1d]">
      <HeaderComponent />
      <MenuNavComponent/>
      <MainComponent/>
      <FooterFormatComponent/>
    </div>
  )
}

export default App