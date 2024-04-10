import pages from '../../data/pages.json'
import PageNav from './PageNav'
import { PageInterface } from '../../interfaces/PageInterface'

const PagesNav = () => {
  return (
    <div className="flex space-x-2">
        {pages.map((page:PageInterface) => (
              <PageNav id={page.id} title={page.title} pageLink={page.pageLink}/>
            ))}
      </div>
  )
}

export default PagesNav
