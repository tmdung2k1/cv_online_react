import { useEffect, useState } from 'react'
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

  useEffect (() =>{
  const path = window.location.pathname;
   const routes = ["/", "/Skill", "/Projects"];//tạo mảng các đường dẫn
   const index = routes.indexOf (path);//tìm vị trí của path trong mảng routes
   if (index !== -1){//nếu tìm thấy thì trả về vị trí, không tìm thấy trả về -1
     activelink(index); //gọi hàm activelink với vị trí tìm được
   }
}, []);

  function toggleShowMore() {
    setShowMore(!showMore);
  }
  const [listActiveLink, setListActiveLink] = useState ([false , false, false]);
  function activelink(i:number){
      const originList = [false , false, false];
      originList[i] = true;
      setListActiveLink(originList);
  }

  return (
    <>
      <nav>
        <ul className="nav">
          <li className="nav-item">
            <Link onClick={() => activelink(0)} to ="/" className={`nav-item-text ${listActiveLink[0] ? 'active' : ''}`}>
              <FontAwesomeIcon className='icon' icon={['fas', 'user']} />
              <span>Thông tin</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link onClick={() => activelink(1)} to ="/Skill" className={`nav-item-text ${listActiveLink[1] ? 'active' : ''}`}>
              <FontAwesomeIcon className='icon' icon={['fas', 'meteor']} />
              <span>Kỹ năng</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link onClick={() => activelink(2)} to ="/Projects" className={`nav-item-text ${listActiveLink[2] ? 'active' : ''}`}>
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
