import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          props.sushiData
        }
        <MoreButton moreSushi = {props.moreSushi} />
      </div>
    </Fragment>
  )
}

export default SushiContainer