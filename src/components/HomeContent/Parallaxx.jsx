import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import './styles/HomeParallax.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Whatdo from './Whatdo';
import TextBlock from './Typelist';
import Slide from './Slide';
import Footer from '../Footer';

function Parallaxx() {
  return (
    <div className="container">
      <Parallax pages={4.9} style={{ top: '0', left: '0' }} class="animation parallax">
        <ParallaxLayer offset={0} speed={0} style={{ top: '-5px'}}>
          <div class="animation_layer parallax" id="artback"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.1}>
          <div class="animation_layer parallax" id="mountain"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.1}>
          <div class="animation_layer parallax" id="logoland"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.4}>
          <div class="animation_layer parallax" id="jungle1"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.7}>
          <div class="animation_layer parallax" id="jungle4"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.35}>
          <div class="animation_layer parallax" id="jungle2"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.1}>
          <div class="animation_layer parallax" id="jungle3"></div>
        </ParallaxLayer>
       
        <ParallaxLayer offset={0} speed={0.2}>
          <div class="animation_layer parallax" id="manonmountain"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.2}>
          <div class="animation_layer parallax" id="jungle5">
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} factor={1.2} style={{top: '0',}}>
          <Whatdo />
        </ParallaxLayer>
        <ParallaxLayer offset={2.2} factor={1.2} style={{top: '0',}}>
          <TextBlock />
        </ParallaxLayer>
        <ParallaxLayer offset={3.3} factor={1.0} style={{top: '0'}}>
          <Slide />
        </ParallaxLayer>
        <ParallaxLayer offset={4.3} factor={0.6} style={{top: '0'}}>
          <Footer />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default Parallaxx;