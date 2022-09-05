import Nav from "../Nav";
import "./Board.css"
import Cards from "../cards/cards";

function Board(){
  return (
    <div className="dash">
      <Nav />
      <div className="board">
        <div className="header">
          <input type="text" placeholder="Search" />
          <span>
            <i>Monday,</i> 11 Jully 2022
          </span>
        </div>
        <div className="roww">
          <Cards color="#00CCFF" text="Total orders" />
          <Cards color="#FF99FF" text="Total orders" />
          <Cards color="#0079F2" text="Total orders" />
          <Cards color="#FFC600" text="Total orders" />
          <div className="users col-s-12">
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Board