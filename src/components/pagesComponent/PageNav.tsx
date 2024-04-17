import { NavLink } from 'react-router-dom';
import { PageInterface } from '../../interfaces/PageInterface'

interface PageNavProps {
  page: PageInterface;
}

const PageNav:React.FC<PageNavProps> = ({page}) => {
  return (
    // navlink is a component of the router which has a global state that tells what page is active
    // notice the classname attribute now has an arrow function
    <NavLink
        to={page.pageLink}
        className={({isActive}) => isActive ? 'bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2' : 'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'}
    >{page.title}</NavLink>
  )
}

export default PageNav
