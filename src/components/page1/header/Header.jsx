import Topbar from '../topbar/Topbar'
import './header.css'

export default function Header() {
  return (
    <div className='header'>
        <div className='mainHead'>
        <h1 className='tilted'>The</h1>
        <span className='heading'>Siren</span>
        </div>
        <div className='demo'></div>
        <div className='topbar'>
        <Topbar />
        </div>
           
    </div>
   
  )
}
