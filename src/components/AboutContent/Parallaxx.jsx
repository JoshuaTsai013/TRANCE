import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import "./styles/AboutParallax.css"
import Footer from '../Footer';
import TypingEffect from './TypingEffect'
function Parallaxx() {
  return (
    <Parallax pages={6.3} className="hideScrollBar">
      <ParallaxLayer offset={0} factor={1} style={{ top: '-5px' }}>
        <div className="animation_layer aboutback"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0.3} speed={1} className="animation">
        <div className="title" style={{ left: '10%' }}>
          <TypingEffect title="WELCOME" />
          <TypingEffect title="TO" />
          <TypingEffect title="TRANACE WORLD" />
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={0.7} speed={0.2} className="animation">{/* sticky={{ start: 1, end: 3 }} */}
        <div className="aboutText" style={{ right: '10%' }}>
          &#8251; Trance is a music genre that emerged in the late 1980s and early 1990s <br />
          &#8251; It is characterized by fast tempo, repetitive melodies, and uplifting or hypnotic atmospheres <br />
          &#8251; Trance music often incorporates elements from other genres such as techno, house, ambient, and classical <br />
          &#8251; Trance music can induce a state of euphoria, relaxation, or altered consciousness in listeners
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={1} factor={1.2} style={{ top: '0' }}>
        <div className="animation_layer aboutback"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={1.4} speed={0.3} className="animation">{/* sticky={{ start: 1, end: 3 }} */}
        <div className="title" style={{ right: '15%' }}>
          <h1>ABOUT</h1>
          <h1>US</h1>
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={1.8} speed={0.2} className="animation">{/* sticky={{ start: 1, end: 3 }} */}
        <div className="aboutText" style={{ left: '10%' }}>
          &#8251;We are a group of talented artists who made graphic design and music, we are TRANCE.<br />
          &#8251;We love to create beautiful and inspiring artworks for various projects and clients.<br />
          &#8251;We have skills in different tools and genres, such as Photoshop, Illustrator, Pro Tools, Ableton Live, etc.<br />
          &#8251;We are passionate about expressing ourselves and sharing our vision with the world.<br />
          &#8251;We are always open to new challenges and opportunities to collaborate with other creative people.
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={2.2} factor={1.2} style={{ top: '0' }}>
        <div className="animation_layer aboutback"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={2.6} speed={0.4} className="animation">
        <div className="title" style={{ left: '10%' }}>
          <h1>JOSHUA</h1>
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={3.4} factor={1.2} style={{ top: '0' }}>
        <div className="animation_layer aboutback"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={3.8} speed={0.3} className="animation">{/* sticky={{ start: 1, end: 3 }} */}
        <div className="title" style={{ left: '10%' }}>
          <h1>LENA</h1>
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={4.6} factor={1.2} style={{ top: '0' }}>
        <div className="animation_layer aboutback"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={5} speed={0.4} className="animation">
        <div className="title" style={{ left: '10%' }}>
          <h1>CONTACT</h1>
          <h1>US</h1>
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={5.8} factor={0.45} style={{ bottom: '0' }}>
        <Footer />
      </ParallaxLayer>
    </Parallax>
  );
}

export default Parallaxx;