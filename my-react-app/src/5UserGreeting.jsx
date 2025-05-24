import PropTypes from "prop-types";
import { withPropTypesCheck } from "./withPropTypesCheck";

function UserGreeting({isLoggedIn = false, username = "Guest"}) {

  const welcomeMessage = <h3 className="welcome-message">
                          Welcome {username}
                          </h3>;
  const loginPrompt = <h3 className="login-prompt">
                      Please log in to continue
                      </h3>;

  return (isLoggedIn ?  welcomeMessage : loginPrompt);
}

UserGreeting.propTypes = {
  isLoggedIn : PropTypes.bool,
  username : PropTypes.string,
}

export default withPropTypesCheck(UserGreeting)