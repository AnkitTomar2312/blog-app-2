import { Link } from 'react-router-dom'
import './topbar.css'
export default function Topbar() {
  return (
    <div className='topbar'>
      <ul className='topList'>
        <li className='listItem'><Link className='link' to= "/">Home</Link> </li>
        <li className='listItem'> <Link className='link' to= "/bollywood">Bollywood</Link> </li>
        <li className='listItem'><Link className='link' to= "/technology">Technology</Link> </li>
        <li className='listItem'> Hollywood</li>
        <li className='listItem mobLI'>Fitness</li>
        <li className='listItem mobLI'>Food</li>
      </ul>
      <hr className='mobnav'></hr>
    
      
    </div>
  )
}
