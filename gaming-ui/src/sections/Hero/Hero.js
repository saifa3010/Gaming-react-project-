/* eslint-disable jsx-a11y/anchor-is-valid */
import './Hero.css'
import '../../components/index'
import { PrimaryButtons } from '../../components/index';

const Hero =()=>{
    return(
        <div className='hero-main'>
            <div className='hero-text'>
                <h6 className="hero-subtitle">Welcome to cyborg </h6>
                <h4 className='hero-title'><em>Browse</em>our popular Games here  </h4>
  
                <PrimaryButtons>Browse Now</PrimaryButtons>
                {/* <div className='main-button'>
                    <a href='browse.html'>Browse Now</a>
                </div> */}
            </div>
        </div>
    );
}

export default Hero