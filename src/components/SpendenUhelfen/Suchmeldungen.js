import React from "react";

const Suchmeldungen = () => {
  return (
    <div className="container mb-5">
       <h1 className="text-center text-dark mt-5 mb-5 ueberschriften">
              TIER ENTLAUFEN | TIER ZUGELAUFEN |TIER GEFUNDEN
            </h1>
      <div className="list-group d-grid gap-3 ">
        <a
          href="https://www.tasso.net/"
          className="list-group-item list-group-item-action backgroundSchutz"
          target="_blank"
        >
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">TASSO</h5>
          </div>
          <p className="mb-1">
            Zum Schutz von Tieren setzt sich TASSO engagiert dafür ein, jedes
            entlaufene Tier so schnell wie möglich wieder zu seinem Halter
            zurückzubringen. Darüber hinaus engagieren wir uns auch für alle
            anderen Tiere in Not.
          </p>
        </a>
        <a
          href="https://www.lippewelle.de/index.html"
          className="list-group-item list-group-item-action"
          target="_blank"
        >
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">Lippewelle</h5>
          </div>
          <p className="mb-1">
            Lippewelle ist nicht nur ein Radiosender. Sie bieten auch eine
            Tiersuchmeldung an.
          </p>
        </a>
        <a
          href="http://www.fellsuche.eu/index.php"
          className="list-group-item list-group-item-action"
          target="_blank"
        >
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">fellsuche.eu</h5>
          </div>
          <p className="mb-1">
            Selbstverständlich ist es auf jeden Fall von Nutzen, wenn Sie z.B.
            Ihre Bekannten per e-mail oder per Telefonanruf über das Entlaufen
            Ihres Lieblings in Kenntnis setzen. Auch hilft es mit Sicherheit,
            wenn Sie dies über Twitter, Facebook und googlePlus veröffentlichen.
            Alle diese Dinge sind auf jeden Fall wichtig, wir verstehen aus
            eigener Erfahrung, dass Sie Ihr Haustier gerne zurück haben wollen!
            Entschliessen Sie sich, Ihre Suchmeldung einmal hier bei uns
            einzutragen, dann übernehmen wir das Verteilen für Sie, wir wissen,
            dass Sie jetzt "andere Dinge im Kopf" haben.
          </p>
        </a>
        
      </div>
    </div>
  );
};

export default Suchmeldungen;
