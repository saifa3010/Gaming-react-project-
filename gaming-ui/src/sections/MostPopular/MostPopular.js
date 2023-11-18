/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/alt-text */
import './MostPopular.css'

import { Card } from '../../components/index';
import {SectionHeader} from '../../components/index'
import { SectionWrapper } from '../../components/index';
import MostPopularData from '../../Data/MostPopularData'

const MostPopular =()=>{
    

    const cards = MostPopularData.map(card=>{
        return <Card image={card.image} title={card.title} rate={card.rate} download={card.download}/>

    })

    return(
        <SectionWrapper>
            <SectionHeader >Most Popular</SectionHeader>
            <div className="most-popular-items">
                {/* <Card 
                title="Fortnite"
                rate="3.5"
                download ="2.3"
                />
                <Card 
                title="Bubg"
                rate="4.5"
                download ="3.3"
                />
                <Card 
                title="Dota2"
                rate="3.7"
                download ="1.1"
                />
                <Card 
                title="GTA"
                rate="5"
                download ="10"
                /> */}
            {cards}

            </div>
        </SectionWrapper>
    );
}

export default MostPopular