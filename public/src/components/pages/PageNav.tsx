import React from 'react'

const PageNav = ({key, title, pageLink}) => {
  return (
    <a key={key}
        href={pageLink}
        className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
    >{title}</a>
  )
}

export default PageNav
