import './SectionHeader.css'


function SectionHeader(props){
    return(
        <h4 className="section-header">{props.children}</h4>
    );
}

export default SectionHeader