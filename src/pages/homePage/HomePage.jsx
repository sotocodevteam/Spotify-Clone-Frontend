import React from 'react'
import CardHomePage from '../../components/atoms/CardHomePage/CardHomePage'
import images from '../../assets/img/images'
import Seeker from '../../components/atoms/seeker/Seeker'
import "./HomePage.css"
function HomePage() {
  const homeContent = [...images,...images,...images,...images]

  return (
    <>
    <header id='header'>
      <div id='headerContent'>
        <button className='buttonBack'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
        </button>
        <Seeker/>
        <button className='buttonRegister'>Registrarte</button>
        <button className='buttonLogin'><span className='spanLogin'>iniciar sesion</span></button>
      </div>
    </header>
    <main id='main'>
      <div className='dialogContent'>
        <h2>Explorar Todo</h2>
      </div>
      <div id='cardContent'>
    {homeContent.map((e,i)=>{
      return <CardHomePage key={i} e={e}/>
    })}
      </div>
    </main>
    </>
  )
}

export default HomePage