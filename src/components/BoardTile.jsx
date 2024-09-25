// import PropTypes from 'prop-types'

// export const BoardTile = ({ value, index, action, highlight }) => {
//   const className = `tile${highlight ? ' is-hl' : ''}`

//   const handleClick = () => {
//     action(index)
//   }

//   return (
//     <button onClick={handleClick} data-id={index} className={className}>
//       {value}
//     </button>
//   )
// }

// BoardTile.propTypes = {
//   value: PropTypes.oneOf([null, 'X', 'O']),
//   action: PropTypes.func.isRequired,
//   index: PropTypes.number.isRequired,
//   highlight: PropTypes.bool
// }


// import PropTypes from 'prop-types'
// import xImage from "../assets/ironMan.png";
// import oImage from "../assets/thanos.png";
// import IronMan from '../assets/ironMan.png'
// import Thanos from "../assets/thanos.png";

// export const BoardTile = ({ value, index, action, highlight, xImage, oImage }) => {
//   const className = `tile${highlight ? ' is-hl' : ''}`

//   const handleClick = () => {
//     action(index)
//   }

//   const renderContent = () => {
//     if (value === 'X') {
//       return <img src={xImage} alt="X" style={{ width: '100%', height: '100%' }} />
//     } else if (value === 'O') {
//       return <img src={oImage} alt="O" style={{ width: '100%', height: '100%' }} />
//     }
//     return null // Empty tile
//   }

//   return (
//     <button onClick={handleClick} data-id={index} className={className}>
//       {renderContent()}
//     </button>
//   )
// }

// BoardTile.propTypes = {
//   value: PropTypes.oneOf([null, 'X', 'O']),
//   action: PropTypes.func.isRequired,
//   index: PropTypes.number.isRequired,
//   highlight: PropTypes.bool,
//   xImage: IronMan, // Image URL for 'X'
//   oImage: Thanos  // Image URL for 'O'
// }


import PropTypes from 'prop-types'
import IronMan from '../assets/ironMan.png'
import Thanos from "../assets/thanos.png"

export const BoardTile = ({ value, index, action, highlight }) => {
  const className = `tile${highlight ? ' is-hl' : ''}`

  const handleClick = () => {
    action(index)
  }

  const renderContent = () => {
    if (value === 'X') {
      return <img src={IronMan} alt="X" style={{ width: '100%', height: '100%' }} />
    } else if (value === 'O') {
      return <img src={Thanos} alt="O" style={{ width: '100%', height: '100%' }} />
    }
    return null // Empty tile
  }

  return (
    <button onClick={handleClick} data-id={index} className={className}>
      {renderContent()}
    </button>
  )
}

BoardTile.propTypes = {
  value: PropTypes.oneOf([null, 'X', 'O']),
  action: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  highlight: PropTypes.bool
}
