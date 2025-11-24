import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { Link, Outlet } from 'react-router-dom'


library.add(fas, far, fab)

function App() {
  const [showMore, setShowMore] = useState(false);

  function toggleShowMore() {
    setShowMore(!showMore);
  }

  return (
    <>
      <nav>
        <ul className="nav">
          <li className="nav-item">
            <Link to ="/" className="nav-item-text">
              <FontAwesomeIcon className='icon' icon={['fas', 'user']} />
              <span>Thông tin</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to ="/Skill" className="nav-item-text ">
              <FontAwesomeIcon className='icon' icon={['fas', 'meteor']} />
              <span>Kỹ năng</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to ="/Projects" className="nav-item-text ">
              <FontAwesomeIcon className='icon' icon={['fas', 'list-check']} />
              <span>Dự án</span>
            </Link>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-item-text" onClick={toggleShowMore}>
              <FontAwesomeIcon className='icon' icon={['fas', 'bars']} />
              <span>Xem thêm</span>
            </a>
          </li>
        </ul>
      </nav>
      <main id="main">
            <Outlet/> 
      </main>
      {showMore && (<div className="show-more" >
        <ul className="sm-container">
          <li><a href="#">Tải CV (EN)</a></li>
          <li><a href="#">Tải CV (VI)</a></li>
        </ul>
      </div>)}
    </>
  )
}

export default App
