// Write your code here
const DestinationItem = props => {
  const {destinationsList} = props
  const {name, imgUrl} = destinationsList

  return (
    <li className="list-container">
      <div className="card-container">
        <img src={imgUrl} alt={name} className="image" />
        <p className="name">{name}</p>
      </div>
    </li>
  )
}

export default DestinationItem
