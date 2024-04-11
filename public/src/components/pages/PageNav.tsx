import { PageInterface } from '../../interfaces/PageInterface'

interface PageNavProps {
  page: PageInterface;
}

const PageNav:React.FC<PageNavProps> = ({page}) => {
  return (
    <a
        href={page.pageLink}
        className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
    >{page.title}</a>
  )
}

export default PageNav
