import React from 'react'

class Product extends React.Component{
  render(){
    return (
      <div>
        <p>{this.props.name}</p>
        <p>{this.props.producer}</p>
        <p>{this.props.hasWatermark}</p>
        <p>{this.props.color}</p>
        <p>{this.props.weight}</p>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
}


Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: weightValidation
}



  function weightValidation(props, propName, compenentName){
    if(props[propName] === undefined){
      return new Error('YOU NEED TO PUT THIS IN. WHY YOU SO STUPID??? PEOPLE LIKE YOU MAKE MY JOB SO MUCH HARDER')
    }
    else if (isNaN(props[propName])){
      return new Error( 'IT SAYS NUMBER! WHY DID YOU PUT IN TEXT? L2 READ DUMBASS.')
    }
    else if (props[propName] < 80 || props[propName] > 300){
      return new Error('you are fatter than patty.')
  }
  return null;
}


module.exports = Product
