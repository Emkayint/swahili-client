import "./cards.css"

function Cards({ color, text }){

  return (
    <div className="col-3 col-s-2">
      <div className="dash-cards" style = {{ "backgroundColor": color}}>
        <span>{ text }</span>
        <h2>250</h2>
      </div>
    </div>
  )
}

export default Cards