import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import TextBlock from './textBlock';
import './styles/Parallax.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slide from './Slide';
import Footer from '../Footer';

function Parallaxx() {
  return (
    <div className="container ">
      <Parallax pages={4} style={{ top: '-5px', left: '0' }} class="animation parallax">
        <ParallaxLayer offset={0} speed={0}>
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
        <ParallaxLayer offset={0} speed={0.35}>
          <div class="animation_layer parallax" id="jungle2"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.1}>
          <div class="animation_layer parallax" id="jungle3"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.1}>
          <div class="animation_layer parallax" id="jungle4"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.2}>
          <div class="animation_layer parallax" id="manonmountain"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.2}>
          <div class="animation_layer parallax" id="jungle5">
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0}>
          <TextBlock />
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0}>
          <Slide />
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={0}>
          <Footer />
        </ParallaxLayer>
        
      </Parallax>

    </div>
  );
}

export default Parallaxx;