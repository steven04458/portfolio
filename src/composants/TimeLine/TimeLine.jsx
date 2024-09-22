import { useState } from 'react'
import $ from 'jquery'
import '@fortawesome/fontawesome-free/css/all.min.css';
import './TimeLine.css'

function TimeLine() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div class="contentTimeline" id='contentTimeline'>
        <h2>Mon Parcours</h2>
        <ul class="timeline">
            <li>
                <h4>2023 - 2024 :</h4>
                <p>Année de Bachelor 2 en spécialité développement à Nantes Ynov Campus. La suite est à venir. Emploi étudiant chez MC Donald. Installation à Nantes.</p>
            </li>
            <li>
                <h4>2022 - 2023 :</h4>
                <p>Emploi en tant qu'iterime pour payer les etudes. Principalement employer chez Titok Production aux Sables-d'Olonne.</p>
            </li>
            <li>
                <h4>2021 - 2022 :</h4>
                <p>Emploi en tant que technicien support informatique chez ECF.</p>
            </li>
            <li>
                <h4>2020 - 2021 :</h4>
                <p>Stage a la mairie de Talmont st Hilaire et obtention de mon BTS SN option IR.</p>
            </li>
        </ul>
    </div>
    </>
  )
}

export default TimeLine
