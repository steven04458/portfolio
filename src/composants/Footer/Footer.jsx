import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './Footer.css'

function Footer() {
  const [count, setCount] = useState(0)

  return (
    <>
        <footer className="footer">
            <svg className='footer-svg' viewBox="0 0 1440 108" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="m0 65.577 30.02 7.07c30.022 7.071 90.063 21.212 150.105 25.926s120.083 0 180.125-21.211c60.042-21.212 120.083-58.92 180.125-63.634S660.458 37.296 720.5 51.437q90.063 21.21 180.125 0C960.667 37.296 1020.71 9.014 1080.75 1.944s120.08 7.07 180.12 11.784c60.05 4.714 120.09 0 150.11-2.357L1441 9.014V108H0z" fill="#E0E2E8"/></svg>
            <span>
                <p>© Steven Magaud 2024</p>
            </span>
        </footer>
    </>
  )
}

export default Footer
