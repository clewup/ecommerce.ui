import { useContext } from "react";
import { UserContext } from "../../../contexts/User";
import Heading from "../../atoms/Heading/Heading";

const Account = () => {
  const { user } = useContext(UserContext);

  return (
    <div id={"account"}>
      <div className={"account-name"}>
        <Heading>
          {user?.firstName} {user?.lastName}
        </Heading>
      </div>
      <div className={"account-info"}></div>
    </div>
  );
};
export default Account;
