import { useRef, useEffect } from 'react';

function CompteurRendu() {
  const compteur = useRef(0);

  useEffect(() => {
    compteur.current += 1;
    console.log(`Le composant a ete affiche ${compteur.current} fois.`);
  });

  return (
    <div className="widget-stack">
      <p className="stat-badge">Rendus detectes : {compteur.current} 👀</p>
      <div>Regarde aussi la console pour suivre le nombre de rendus.</div>
    </div>
  );
}

export default CompteurRendu;
