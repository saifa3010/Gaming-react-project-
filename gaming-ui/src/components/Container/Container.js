import './Container.css'


const Container=(props)=>{
    return(
        // <h1>ddddddddd</h1>
        <div className="container main-container">
            {props.children}
        </div>
    );
}

export default Container