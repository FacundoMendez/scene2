import React,{useEffect  , useState , useContext , useRef} from 'react'
import sceneSpace from './sceneSpace'
import "./scene.css"
import active_hover from '../home/active_hover'
import mouseHoverAudio from "../home/src/audio/mouseHover1.mp3"
import transitionAudio from "../home/src/audio/transition1.mp3"
import Context from '../context/Context'

import gsap from 'gsap'
import AmbientAudio from './ambientAudio/AmbientAudio'

const Scene = () => {

  const ContextAudio = useContext(Context)

    
  const volverHome = () => {
    let tl = gsap.timeline({
        duration:1,
    });

    tl.to(".containerScene",{
      opacity: 0,
      display:"none"
    })

    tl.to(".containerPresent",{
        opacity: 1,
        display:"flex"
      })
  }




  const playAudio = () => {
    let audioHover = new Audio(mouseHoverAudio);

    if (ContextAudio.audioActive){
      audioHover.play()
      audioHover.volume= 0.05
    }else{
      audioHover.pause()
    }
  }

  const transitionAudioHome = () => {
    let audioTransition = new Audio(transitionAudio);

    if (ContextAudio.audioActive){
      audioTransition.play()
      audioTransition.volume= 0.05
    }else{
      audioTransition.pause()
    }
  }

  
  useEffect(() => {
    sceneSpace()
    active_hover()
  },[])


  return (
    <div className="box_webGl">
      <AmbientAudio/>
      <div className="box_cabecera" onClick={() => {
        volverHome()
        transitionAudioHome()
        }} >
        <span>Facundo</span>
        <span>Mendez</span> <br />
        <span id='frontend'>Frontend</span>
        <span>Developer.</span> 
      </div>
      
      <canvas className="webGlScene"></canvas>
      <div className="container_links">
          <div className="bar_link_button bar_link_button1"></div>
          <div className='link_button link_button1 link_button1_active' onMouseOver={playAudio} > Sobre Mi</div>
          <div className='link_button link_button2' onMouseOver={playAudio} > Trabajos</div>
          <div className='link_button link_button3' onMouseOver={playAudio} > Contacto</div>
      </div>


    </div>

  )
}

export default Scene;