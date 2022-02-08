import React from 'react';
import emailjs from "emailjs-com";

const Mailer = () => {
    function sendEmail(e){
        e.preventDefault();
        
    }
  return <div className="container border" 
  style= {{marginTop:"20px",
  width:"80%",
    backgroundImage:`url("data:image/jpeg;base64,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")`,
    backgroundPosition:"center",
    backgroundSize:"cover",

    }}>
      <h1 style={{marginTop:"25px"}}>Kontakt zum Tierheim</h1>
      <form className="row" style= {{margin:"15px 10px 15px 10px"}} onSubmit= {{sendEmail}}>
<label>Name</label>
<input type= "text" name="Name" className="form-control"></input>
<label>Email</label>

<input type= "email" name="user_mail" className="form-control"></input>
     
     <label>Nachricht</label>
     <textarea name="nachricht" rows="4" className="form-control"/>
     <input type="submit" value="Senden" className="form-control btn btn-primary" style={{marginTop:"10px"}}/>
      </form>
  </div>;
};

export default Mailer;
