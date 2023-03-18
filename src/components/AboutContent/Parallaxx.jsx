import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import './styles/AboutParallax.css';
import Footer from '../Footer';

function Parallaxx() {
  return (
      <Parallax pages={5} style={{ top: '0', left: '0' }} class="disableScroll">
        <ParallaxLayer offset={0} factor={1} style={{ top: '-5px' }}>
          <div class="animation_layer" id="aboutback"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} factor={1.4} style={{ top: '0' }}>
          <div class="animation_layer" id="aboutback"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={2.4} factor={1.4} style={{ top: '0' }}>
          <div class="animation_layer" id="aboutback"></div>
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