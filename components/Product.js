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
      return new Error('This is required')
    }
    else if (isNaN(props[propName])){
      return new Error( 'This must be a number')
    }
    else if (props[propName] < 80 || props[propName] > 300){
      return new Error('please enter a weight within the specified range')
  }
  return null;
}


module.exports = Product
