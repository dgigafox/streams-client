import React from 'react'
import { connect } from 'react-redux'

const StreamList = (props) => {
  return (
    <div>
      StreamList
    <p>{props.userId}</p>
    </div>
  )
}

const mapStateToProps = (state) => {
  return ({ userId: state.auth.userId })
}

export default connect(mapStateToProps, {})(StreamList)