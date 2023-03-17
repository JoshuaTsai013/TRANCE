import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import './styles/Parallax.css';
import Footer from '../Footer';

function Parallaxx() {
  return (
    <div className="container">
      <Parallax pages={5} style={{ top: '-5px', left: '0' }}>
        <ParallaxLayer offset={0} factor={1} style={{ top: '0' }}>
          <div class="animation_layer" id="artback"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} factor={1.4} style={{ top: '0' }}>
          <div class="animation_layer" id="artback"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={2.4} factor={1.4} style={{ top: '0' }}>
          <div class="animation_layer" id="artback"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={3.8} factor={1.2} style={{ top: '0' }}>
          <div class="animation_layer" id="artback"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={4.4} factor={0.6} style={{ top: '0' }}>
          <Footer id="aboutFooter" />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default Parallaxx;