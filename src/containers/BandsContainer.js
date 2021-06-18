import React, { Component } from 'react'
import { connect } from 'react-redux'
<<<<<<< HEAD
import BandInput from '../components/BandInput'
=======
>>>>>>> 5287c328c7c40d823bdc549d0195c9619ff926c9

class BandsContainer extends Component {
  render() {

  let bands = this.props.bands.map(band => <li key={band.id}>{band.name}</li>)

    return(
      <div>
        <BandInput addBand={this.props.addBand} />
        <ul>
          {bands}
        </ul>
      </div>
    )
  }
}

<<<<<<< HEAD
const mapStateToProps = (state) => {
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = dispatch => {
  return { addBand: band => dispatch({type: 'ADD_BAND', band})}
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
=======
export default connect()(BandsContainer)
>>>>>>> 5287c328c7c40d823bdc549d0195c9619ff926c9
