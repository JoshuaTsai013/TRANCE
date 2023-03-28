import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import "./styles/AboutParallax.css"
import Footer from '../Footer';
import TypingEffect from './TypingEffect'
function Parallaxx() {
  return (
    <Parallax pages={5} class="disableScroll">
      <ParallaxLayer offset={0} factor={1} style={{ top: '-5px' }}>
        <div class="animation_layer" id="aboutback"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0.3} speed={1} className="animation">
        <div className="title" style={{ left: '10%' }}>
          <TypingEffect title="WELCOME" />
          <TypingEffect title="TO" />
          <TypingEffect title="TRANACE WORLD" />
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={1} factor={1.4} style={{ top: '0' }}>
        <div class="animation_layer" id="aboutback"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={1.8} speed={0.3} className="animation">{/* sticky={{ start: 1, end: 3 }} */}
        <div className="title" style={{ right: '15%' }}>
          <h1>ABOUT</h1>
          <h1>US</h1>
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={2.4} factor={1.4} style={{ top: '0' }}>
        <div class="animation_layer" id="aboutback"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={3} speed={0.4} className="animation">
        <div className="title" style={{ left: '10%' }}>
          <h1>CONTACT</h1>
          <h1>US</h1>
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={3.8} factor={1.2} style={{ top: '0' }}>
        <div class="animation_layer" id="aboutback"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={4.4} factor={0.6} style={{ top: '0' }}>
        <Footer />
      </ParallaxLayer>
    </Parallax>
  );
}

export default Parallaxx;