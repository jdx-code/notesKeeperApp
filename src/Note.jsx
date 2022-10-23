import react from "react";
function Note(props){
    return(
        <div>
            <h3>{props.heading}</h3>
            <p>{props.desc}</p>
        </div>                  
    );
}

export default Note;