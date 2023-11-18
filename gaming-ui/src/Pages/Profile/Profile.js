import './Profile.css'
import { SectionWrapper } from '../../components/index';
import profile from '../../assets/images/profile.jpg'
import { PrimaryButtons } from '../../components/index';
import { SecondaryButtons } from '../../components/index';


const Profile =()=>{
    return(
    <SectionWrapper>

        <div className='profile-content'>
            <div>
                <img className='profile-image' src={profile} alt=''/>
            </div>

            <div className="profile-center">
                    <div className="profile-text">
                     <PrimaryButtons>Offline</PrimaryButtons>
                      <h4>Saif Mehdawi</h4>
                      <p>You Haven't Gone Live yet. Go Live By Touching The Button Below.</p>
                      <SecondaryButtons>Start Live Stream</SecondaryButtons>
                    </div>
            </div>

            <div className="profile-center">
                    <ul className='ul'>
                      <li className='li'>Games Downloaded <span className='span'>3</span></li>
                      <li className='li'>Friends Online <span className='span'>16</span></li>
                      <li className='li'>Live Streams <span className='span'>None</span></li>
                      <li className='li'>Clips <span className='span'>29</span></li>
                    </ul>
            </div>
        </div>
        
    </SectionWrapper>
    )
}

export default Profile