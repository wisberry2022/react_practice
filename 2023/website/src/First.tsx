import { Link } from 'react-router-dom';
import './style/First.scss';

type menuData = {
  id: number,
  title: string,
  link: string,
  submenu?: Array<menuData>
}

const First = () => {
  const menus: Array<menuData> = [
    {
      id: 1, title: 'menu', link: '#', submenu: [
        { id: 1, title: 'smenu', link: '#' },
        { id: 2, title: 'smenu', link: '#' },
        { id: 3, title: 'smenu', link: '#' },
        { id: 4, title: 'smenu', link: '#' },
      ]
    },
    {
      id: 2, title: 'menu', link: '#', submenu: [
        { id: 1, title: 'smenu', link: '#' },
        { id: 2, title: 'smenu', link: '#' },
        { id: 3, title: 'smenu', link: '#' },
        { id: 4, title: 'smenu', link: '#' },
        { id: 5, title: 'smenu', link: '#' },
      ]
    },
    {
      id: 3, title: 'menu', link: '#', submenu: [
        { id: 1, title: 'smenu', link: '#' },
        { id: 2, title: 'smenu', link: '#' },
        { id: 3, title: 'smenu', link: '#' },
        { id: 4, title: 'smenu', link: '#' },
      ]
    },
    {
      id: 4, title: 'menu', link: '#', submenu: [
        { id: 1, title: 'smenu', link: '#' },
        { id: 2, title: 'smenu', link: '#' },
        { id: 3, title: 'smenu', link: '#' },
        { id: 4, title: 'smenu', link: '#' },
        { id: 5, title: 'smenu', link: '#' },
      ]
    }
  ];

  return (
    <div className="Wrapper container">
      <ul className="mainMenu">
        {menus.map(it => {
          return (
            <li key={it.id}>
              <Link to={it.link}>{it.title + it.id}</Link>
              <ul className="subMenu">
                {it.submenu?.map(its => {
                  return (
                    <li key={its.id}>
                      <Link to={its.link}>{its.title}0{its.id}</Link>
                    </li>
                  )
                })}
              </ul>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default First;
