import react from "react";
import reactdom from "react-dom";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import NotesInfo from './NotesInfo';

reactdom.render(
  <div>
    <Header></Header>
    
    <div className="container">
      <div className="row">

        {NotesInfo.map((note)=>(
          <div className="noteClass col-6 col-md-3 mx-auto">
            <Note key={note.key} heading={note.heading} desc={note.desc}></Note> 
          </div>                  
        ))}
    
      </div>            
    </div>     
    
    <Footer></Footer>
  </div>, document.getElementById("root")
);
