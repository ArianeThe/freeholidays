import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../assets/css/Results.css"

interface Hebergement {
  id_auto: number;
  nom: string;
}

const Results: React.FC = () => {
  const [datas, setDatas] = useState<Hebergement[]>([]);
  const location = useLocation();

  // Extraire les paramètres de l'URL
  const query = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    // Appeler l'API et récupérer les données
    fetch("http://localhost:8082/api/v1/Entities/Hebergement")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((json) => setDatas(json))
      .catch((error) => {
        console.error("Une erreur s'est produite :", error);
      });
  }, []);

  // Filtrer les données en fonction de la requête
  const filteredDatas = datas.filter((data) =>
    data.nom.toLowerCase().includes(query?.toLowerCase() || "")
  );

  return (
    <div className="searchResults">
      <h2 className="titre"> "{query}"</h2>
      {filteredDatas.length > 0 ? (
        filteredDatas.map((data) => (
          <div className="searchResult" key={data.id_auto}>
            {data.nom}
          </div>
        ))
      ) : (
        <div>Aucun résultat trouvé.</div>
      )}
    </div>
  );
};

export default Results;
