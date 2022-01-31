import React, { useState } from 'react';

const Admin = () => {
    const [loggedIn, setLoggedIn] = useState();

    const handleLogIn = (e) => {
       //Value des InputFeld mit meinem Passwort vergleichen. Wenn Passwort gleich => loggedIn: True
       e.preventDefault()
       const enterPasswort = e.target.firstChild.value
        if (enterPasswort === "1234") {
            setLoggedIn(true);
        }else {
            alert('Falsches Passwort');
        }
    }
    const newAnimal = (e) => {
        e.preventDefault()
        console.log(e.target)
    }

  return (<div>
      {loggedIn ? (
          <form onSubmit={newAnimal} className="needs-validation" novalidate>
          <div className="form-row">
            <div className="col-md-4 mb-3">
              <label for="validationTooltip01">Name</label>
              <input type="text" className="form-control" id="validationTooltip01" placeholder="Bitte Name eingeben." required />
              <div className="valid-tooltip">
                Looks good!
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <label for="validationTooltip02">Rasse</label>
              <input type="text" className="form-control" id="validationTooltip02" placeholder="Bitte Rasse eingeben." required />
              <div className="valid-tooltip">
                Looks good!
              </div>
            </div>
            <select className="custom-select" required>
                <option selected>Geschlecht?</option>
                <option value="männlich">Männlich</option>
                <option value="weiblich">Weiblich</option>
            </select>
            <select className="custom-select" required>
                <option selected>Kastriert?</option>
                <option value="Ja">Ja</option>
                <option value="Nein">Nein</option>
            </select>
            <select className="custom-select" required>
                <option selected>Gechipt?</option>
                <option value="Ja">Ja</option>
                <option value="Nein">Nein</option>
            </select>
            <select className="custom-select" required>
                <option selected>Geimpft?</option>
                <option value="Ja">Ja</option>
                <option value="Nein">Nein</option>
            </select>
            <select className="custom-select">
                <option selected>Kinderfreundlich?</option>
                <option value="Ja">Ja</option>
                <option value="Nein">Nein</option>
            </select>
            <select className="custom-select">
                <option selected>Verträgt sich das Tier mit anderen?</option>
                <option value="Ja">Ja</option>
                <option value="Nein">Nein</option>
            </select>
            <div className="col-md-4 mb-3">
              <label for="validationTooltip02">Geburtstag</label>
              <input type="text" className="form-control" id="validationTooltip02" placeholder="Wann ist das Tier geboren?" required />
              <div className="valid-tooltip">
                Looks good!
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <label for="validationTooltip02">Wohnort</label>
              <input type="text" className="form-control" id="validationTooltip02" placeholder="Wo wohnt das Tier momentan?" required />
              <div className="valid-tooltip">
                Looks good!
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <label for="validationTooltip02">Beschreibung</label>
              <input type="text" className="form-control" id="validationTooltip02" placeholder="Bitte ein Kurz Beschreibung vom Tier eingeben." />
              <div className="valid-tooltip">
                Looks good!
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <label for="validationTooltip02">Bild Url</label>
              <input type="text" className="form-control" id="validationTooltip02" placeholder="Bitte nur eine Url eingeben." />
              <div className="valid-tooltip">
                Looks good!
              </div>
            </div>
            <select className="custom-select" required>
                <option selected>Welches Tier wird hinzugefügt?</option>
                <option value="hund">Hund</option>
                <option value="katze">Katze</option>
                <option value="nagetier">Nagetier</option>
                <option value="notfall">Notfall</option>
                <option value="glücklich">Vergeben</option>
            </select>
          </div>          
          <button className="btn btn-primary" type="submit">Daten hinzufügen</button>
        </form>
      ):(      
          <form onSubmit={handleLogIn}>
          <input type="password" placeholder='Bitte Passwort eingeben.'></input>
          <button type='submit'>Anmelden</button>
      </form>)}


  </div>);
};

export default Admin;
