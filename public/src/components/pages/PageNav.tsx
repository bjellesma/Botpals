import { PageInterface } from '../../interfaces/PageInterface'

const PageNav = ({id, title, pageLink}:PageInterface) => {
  return (
    <a
        href={pageLink}
        className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
    >{title}</a>
  )
}

export default PageNav
