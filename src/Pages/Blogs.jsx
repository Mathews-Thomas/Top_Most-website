import React from 'react'
import Pagination from '../Components/Blogs/Pagination'
import Feedback from '../Components/Blogs/Feedback'
import Gallery from '../Components/Blogs/Gallery'
function Blogs() {
  return (
    <div>
      <Pagination/>
      <Feedback/>
      <Gallery/>
    </div>
  )
}

export default Blogs