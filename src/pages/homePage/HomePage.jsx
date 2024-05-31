import React from 'react'
import CardHomePage from '../../components/atoms/CardHomePage/CardHomePage'
import images from '../../assets/img/images'
function HomePage() {
  const homeContent = [...images,...images,...images,...images]

  return (
    <>
    <header id='header'>

    </header>
    <main id='main'>
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