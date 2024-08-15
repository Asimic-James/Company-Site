import React from 'react'

const PageBanner = ({ title }) => {
  return (
    <div className="page-banner bg-dark d-flex justify-content-center align-items-center p-3 ">
        <h2 className="text-center text-white font-roboto fw-bold">{title}</h2>
    </div>
  )
}

export default PageBanner