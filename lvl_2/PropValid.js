import PropTypes from 'prop-types'
function PropValid(props) {
  return (
    <div>
        <h3>Name:{props.name}</h3>
        <p>Age:{props.age}</p>
        <p>City:{props.city}</p>
    </div>
  )
}
PropValid.propTypes = {
  name : PropTypes.string,
  age : PropTypes.number,
  city : PropTypes.string
  
}



export default PropValid