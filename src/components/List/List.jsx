import { Link } from "react-router-dom";

function List() {
    
  return (
    <div>
          <h1>List</h1>
          <div>
          <Link to="/register">REGISTO</Link>
          </div>
          <div>
          <Link to="/logout">LOGOUT</Link>
          </div>
          <div>
          <Link to="/">LOGIN</Link>
          </div>
      </div>
  );
}


export default List;
