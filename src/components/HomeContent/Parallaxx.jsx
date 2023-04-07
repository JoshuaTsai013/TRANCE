import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import './styles/HomeParallax.css';
import Whatdo from './Whatdo';
import TextBlock from './Typelist';
import Slide from './Slide';
import Footer from '../Footer';

function Parallaxx() {
  return (
    <div className="container">
      <Parallax pages={5.9} style={{ top: '0', left: '0' }} className="animation parallax hideScrollBar">
        <ParallaxLayer offset={0} speed={0} style={{ top: '-5px'}}>
          <div className="animation_layer parallax" id="artback"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.1} >
          <div className="animation_layer parallax" id="mountain"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.1}>
          <div className="animation_layer parallax" id="logoland"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.4}>
          <div className="animation_layer parallax" id="jungle1"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.7}>
          <div className="animation_layer parallax" id="jungle4"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.35}>
          <div className="animation_layer parallax" id="jungle2"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.1}>
          <div className="animation_layer parallax" id="jungle3"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.2}>
          <div className="animation_layer parallax" id="manonmountain"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.2}>
          <div className="animation_layer parallax" id="jungle5"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} factor={1.4} style={{top: '0'}}>
          <Whatdo />
        </ParallaxLayer>
        <ParallaxLayer offset={2.4} factor={1.4} style={{top: '-1px'}}>
          <TextBlock />
        </ParallaxLayer>
        <ParallaxLayer offset={3.8} factor={1.65} style={{top: '-2px'}}>
          <Slide />
        </ParallaxLayer>
        <ParallaxLayer offset={5.4} factor={0.45} style={{top: '0px', background: 'linear-gradient(180deg, #181850, #12124d, #3d108f, #181850)'}}>
          <Footer />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default Parallaxx;