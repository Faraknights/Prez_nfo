import React, { useState } from 'react';
import './App.css';

function App() {
  // State variables for all inputs
  const [titre, setTitre] = useState('');
  const [sousTitre, setSousTitre] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const [auteur, setAuteur] = useState('');
  const [scenariste, setScenariste] = useState('');
  const [dessinateur, setDessinateur] = useState('');
  const [couleurs, setCouleurs] = useState('');
  const [editeur, setEditeur] = useState('');
  const [categories, setCategories] = useState('');

  const [resume, setResume] = useState('');

  const [langue, setLangue] = useState('Français');
  const [dateDeSortie, setDateDeSortie] = useState('');
  const [nombreDePages, setNombreDePages] = useState('');
  const [type, setType] = useState('EBook');
  const [ebooksList, setEbooksList] = useState('');

  const [format, setFormat] = useState('PDF');
  const [nombreDeFichiers, setNombreDeFichiers] = useState(1);
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');

  const [poidsTotal, setPoidsTotal] = useState('');
  const [poidsUnite, setPoidsUnite] = useState('Ko');

  return (
    <div className="App">
      <div className="left">
        <div className="basic-info">
          <h2>Basic Information</h2>
          <label>
            Titre:
            <input type="text" placeholder="Titre" value={titre} onChange={(e) => setTitre(e.target.value)} />
          </label>
          <label>
            Sous-titre:
            <input type="text" placeholder="Sous-titre" value={sousTitre} onChange={(e) => setSousTitre(e.target.value)} />
          </label>
          <label>
            Image URL:
            <input type="text" placeholder="Image URL" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
          </label>
        </div>

        <div className="download-section">
          <h2>Téléchargement</h2>
          <label>
            Format:
            <select value={format} onChange={(e) => setFormat(e.target.value)}>
              <option value="PDF">PDF</option>
              <option value="EPUB">EPUB</option>
              <option value="CBZ">CBZ</option>
              <option value="CBR">CBR</option>
              <option value="PDF & CBZ">pdf cbr</option>
              <option value="PDF & CBR">pdf cbz</option>
              <option value="PDF, CBZ, CBR">pdf cbz cbr</option>
            </select>
          </label>
          <label>
            Nombre de fichiers:
            <input type="number" placeholder="Nombre de fichier" value={nombreDeFichiers} onChange={(e) => setNombreDeFichiers(e.target.value)} />
          </label>
          {format !== 'EPUB' && 
          <label>
            Dimensions:
            <div className="dimensions-input">
              <input type="number" placeholder="Width (px)" value={width} onChange={(e) => setWidth(e.target.value)} />
              <span>x</span>
              <input type="number" placeholder="Height (px)" value={height} onChange={(e) => setHeight(e.target.value)} />
            </div>
          </label>}
          <label>
            Poids Total:
            <div className="poids-total-input">
              <input type="number" placeholder="Poids Total" value={poidsTotal} onChange={(e) => setPoidsTotal(e.target.value)} />
              <select value={poidsUnite} onChange={(e) => setPoidsUnite(e.target.value)}>
                <option value="Ko">Ko</option>
                <option value="Mo">Mo</option>
                <option value="Go">Go</option>
              </select>
            </div>
          </label>
        </div>

        <div className="informations">
          <h2>Informations</h2>
          <label>
            Auteur:
            <input type="text" placeholder="Auteur" value={auteur} onChange={(e) => setAuteur(e.target.value)} />
          </label>
          <label>
            Scénarisateur:
            <input type="text" placeholder="Scénarisateur" value={scenariste} onChange={(e) => setScenariste(e.target.value)} />
          </label>
          <label>
            Dessinateur:
            <input type="text" placeholder="Dessinateur" value={dessinateur} onChange={(e) => setDessinateur(e.target.value)} />
          </label>
          <label>
            Couleurs:
            <input type="text" placeholder="Couleurs" value={couleurs} onChange={(e) => setCouleurs(e.target.value)} />
          </label>
          <label>
            Editeur:
            <input type="text" placeholder="Editeur" value={editeur} onChange={(e) => setEditeur(e.target.value)} />
          </label>
        </div>

        <div className="summary">
          <h2>Résumé</h2>
          <textarea 
            placeholder="Résumé" 
            value={resume}
            onChange={(e) => setResume(e.target.value)}
            rows="4"
          />
        </div>

        <div className="technical-details">
          <h2>Détails Techniques</h2>
          <label>
            Langue:
            <select value={langue} onChange={(e) => setLangue(e.target.value)}>
              <option value="Français">Français</option>
              <option value="Anglais">Anglais</option>
            </select>
          </label>
          <label>
            Date de sortie:
            <input type="text" placeholder="Date de sortie" value={dateDeSortie} onChange={(e) => setDateDeSortie(e.target.value)} />
          </label>
          {nombreDeFichiers == 1 && <>
            <label>
            Nombre de pages:
            <input type="text" placeholder="Nombre de pages" value={nombreDePages} onChange={(e) => setNombreDePages(e.target.value)} />
          </label>
          </>} 
          <label>
            Type:
            <input type="text" placeholder="Type" value={type} onChange={(e) => setType(e.target.value)} />
          </label>
          {nombreDeFichiers > 1 && <label>
            Liste des ebooks:
            <textarea 
              placeholder="Liste des ebooks" 
              value={ebooksList} 
              onChange={(e) => setEbooksList(e.target.value)} 
              rows="4" /* Adjust rows for height of textarea */
            />
          </label>}
          
        </div>
      </div>

      <div className="right">
        <div>{titre}{sousTitre ? ` - ${sousTitre}` : ""} [{format}] {langue === "Français" ? "FR" : "ENG"}</div>
        <pre>
        {`[center]
[b][color=#2582c0]
[size=200]${titre}[/size]${
  sousTitre ? `
[size=100]${sousTitre}[/size]` : ''}
[/color][/b]

[img]${imageUrl}[/img]


[img]https://i.postimg.cc/fLCB5k4v/faraknights1.png[/img]

[color=#2582c0][b]Auteur :[/b][/color] ${auteur}${scenariste ? `
[color=#2582c0][b]Scénariste :[/b][/color] ${scenariste}` : ''}${
dessinateur ? `
[color=#2582c0][b]Dessinateur :[/b][/color] ${dessinateur}` : ''}${
couleurs ? `
[color=#2582c0][b]Coloriste :[/b][/color] ${couleurs}` : ''}
[color=#2582c0][b]Éditeur :[/b][/color] ${editeur}


[img]https://i.postimg.cc/bvCR2W16/faraknights2.png[/img]

${resume}


[img]https://i.postimg.cc/L8vtrwQH/faraknights3.png[/img]

[color=#2582c0][b]Type :[/b][/color] ${type}
[color=#2582c0][b]Langue :[/b][/color]${langue === "Français" ? "[img]https://flagcdn.com/20x15/fr.png[/img] FR" : "[img]https://flagcdn.com/20x15/gb.png[/img] ENG"}
[color=#2582c0][b]Date de sortie :[/b][/color] ${dateDeSortie}${
nombreDeFichiers == 1 ? `
[color=#2582c0][b]Nombre de pages :[/b][/color] ${nombreDePages}` : `

[color=#2582c0][b]Liste des ebooks :[/b][/color]

${ebooksList}`}


[img]https://i.postimg.cc/Znr3jMyz/faraknights4.png[/img]

[color=#2582c0][b]Format :[/b][/color] ${format}
[color=#2582c0][b]Nombre de fichier(s) :[/b][/color] ${nombreDeFichiers}${format != "EPUB" ? `
[color=#2582c0][b]Dimensions moyennes :[/b][/color] ${width} x ${height}px` : ''}
[color=#2582c0][b]Poids Total :[/b][/color] ${poidsTotal} ${poidsUnite}
[/center]`}
        </pre>
        <button onClick={() => {
          const textToDownload = `Titre: ${titre}
Sous-titre: ${sousTitre}

Auteur : ${auteur}${scenariste ? `
Scénariste : ${scenariste}` : ''}${
dessinateur ? `
Dessinateur : ${dessinateur}` : ''}${
couleurs ? `
Coloriste : ${couleurs}` : ''}
Éditeur : ${editeur}

Type : ${type}
Langue : ${langue === "Français" ? "FR" : "ENG"}
Date de sortie : ${dateDeSortie}${
nombreDeFichiers == 1 ? `
Nombre de pages : ${nombreDePages}` : `

Liste des ebooks :

${ebooksList}`}
 
Format : ${format}
Nombre de fichier(s) : ${nombreDeFichiers}${format != "EPUB" ? `
Dimensions moyennes : ${width} x ${height}px` : ''}
Poids Total : ${poidsTotal} ${poidsUnite}
`;
          
          const blob = new Blob([textToDownload], { type: 'text/plain' });

          const url = URL.createObjectURL(blob);

          const a = document.createElement('a');
          a.href = url;
          a.download = `${titre}${sousTitre ? ` - ${sousTitre}` : ""} [${format}] ${langue === "Français" ? "FR" : "ENG"}.nfo`;  // Set the name of the downloaded file
          document.body.appendChild(a);
          a.click();

          document.body.removeChild(a);
          URL.revokeObjectURL(url);
        }}>Télécharger le NFO</button>
      </div>
    </div>
  );
}

export default App;
