import { useState, useEffect } from 'react';
import './SkillsSelector.css';
import javascripteLogo from '../../assets/javascript-logo.svg'
import cssLogo from '../../assets/CSS3-logo.svg'
import htmlLogo from '../../assets/HTML5-logo.svg'
import reactLogo from '../../assets/react-logo.svg'
import viteLogo from '../../assets/vite.svg'
import sqlLogo from '../../assets/sql-logo.svg'
import phpLogo from '../../assets/php-logo.svg'
import pythonLogo from '../../assets/python-logo.svg'
import figmaLogo from '../../assets/figma-logo.svg'
import vscodeLogo from '../../assets/vs-code-logo.svg'
import githubLogo from '../../assets/github-logo.svg'


function SkillsSelector() {
  const [count, setCount] = useState(0);
  const [currentTab, setCurrentTab] = useState('Skills');
  const tabs = ['Skills', 'Autres'];

    const renderSkills = () => (
        <section className='skills_items'>
            <article>
                <img src={javascripteLogo} alt="Logo de JavaScript" />
                <h3>Javascript</h3>
            </article>
            <article>
                <img src={cssLogo} alt="Logo de CSS" />
                <h3>CSS</h3>
            </article>
            <article>
                <img src={htmlLogo} alt="Logo de HTML" />
                <h3>HTML</h3>
            </article>
            <article>
                <img src={reactLogo} alt="Logo de React" />
                <h3>React</h3>
            </article>
            <article>
                <img src={viteLogo} alt="Logo de Vite" />
                <h3>Vite</h3>
            </article>
            <article>
                <img src={sqlLogo} alt="Logo de SQL" />
                <h3>SQL</h3>
            </article>
            <article>
                <img src={phpLogo} alt="Logo de PHP" />
                <h3>PHP</h3>
            </article>
            <article>
                <img src={pythonLogo} alt="Logo de Python" />
                <h3>Python</h3>
            </article>
        </section>
    );
    const renderAutres = () => (
        <section className='skills_items'>
            <article>
                <img src={figmaLogo} alt="Logo de Figma" />
                <h3>Figma</h3>
            </article>
            <article>
                <img src={vscodeLogo} alt="Logo de Visual Studio Code" />
                <h3>VS Code</h3>
            </article>
            <article>
                <img src={githubLogo} alt="Logo de GitHub" />
                <h3>GitHub</h3>
            </article>
        </section>
    );

  return (
    <>
        <section className='skills'id="skills">
            <h2>Mes compétences</h2>
            <span className="contentButton">
                {tabs.map(tab => (
                <button
                    key={tab}
                    className={`tab-button ${currentTab === tab ? 'active' : ''}`}
                    onClick={() => setCurrentTab(tab)}
                >
                    {tab}
                </button>
                ))}
            </span>
            <div className="content-tab">
                {currentTab === 'Skills' && renderSkills()}
                {currentTab === 'Autres' && renderAutres()}
            </div>
        </section>
    </>
  );
}

export default SkillsSelector;