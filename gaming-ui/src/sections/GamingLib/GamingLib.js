import './GamingLib.css'
import {SectionHeader} from '../../components/index'
import { SectionWrapper } from '../../components/index';
import GamingLibData from '../../Data/GamingLibData'
import {GamingLibCard} from '../../components/index'

function GamingLib(){

    const GamingLibCards = GamingLibData.map(card=>{
        return <GamingLibCard image={card.image} title={card.title}
        data_added={card.data_added} hours_played={card.hours_played}
        currently={card.currently} download={card.download}/>

    })


    return(
    <SectionWrapper>
        <SectionHeader >Gaming library</SectionHeader>
        <div className="gaming-lab-cards">
           {GamingLibCards}
        </div>
    </SectionWrapper>
    );
}

export default GamingLib