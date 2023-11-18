import './GamingLibCard.css'
import { SecondaryButtons } from '../Buttons/Buttons';


function GamingLibCard(props){

    return(
        <div className='gaming-lib-card'>
            <ul>
                <li><img src={props.image} alt=""/></li>
                <li><h4>Title</h4><span>{props.title}</span></li>
                <li><h4>Data Added</h4><span>{props.data_added}</span></li>
                <li><h4>Hours Played</h4><span>{props.hours_played}</span></li>
                <li><h4>Currently</h4><span>{props.currently}</span></li>
                <SecondaryButtons>Download</SecondaryButtons>
                
                
            </ul>
        </div>

    );
}

export default GamingLibCard