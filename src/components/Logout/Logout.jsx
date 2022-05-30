import UseUserState from "../../routes/UseUserState";
import { Link } from "react-router-dom";

function Logout() {
  const UserState = UseUserState();

  function handleSubmit(event) {
    event.preventDefault();
    UserState.handleLoginChange(false);
  }

  return (
    <div onClick={handleSubmit}>
      <Link to="/">LOGIN</Link>
    </div>
  );
}
export default Logout;
