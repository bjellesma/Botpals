import pages from '../../data/pages.json'
import React from 'react'
import PageNav from './PageNav'

const PagesNav = () => {
  return (
    <div className="flex space-x-2">
        {pages.map((page) => (
              <PageNav key={page.id} title={page.title} pageLink={page.link}/>
            ))}
      </div>
  )
}

export default PagesNav
