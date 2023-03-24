import React from 'react'

export const Loader = ({loading}) => {

  return loading && (
    <div className='loaderContainer'>
      <span className='loader'></span>
    </div>
  )
}