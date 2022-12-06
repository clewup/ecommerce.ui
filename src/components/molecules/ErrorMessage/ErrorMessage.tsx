import "./error-message.scss";
import Wrapper from "../../atoms/Wrapper/Wrapper";
import React from "react";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

interface IProps {
  message: string;
}

const ErrorMessage: React.FC<IProps> = ({ message }) => {
  return (
    <Wrapper id={"error"}>
      <div className={"error-message"}>
        <div className={"error-icon"}>
          <ErrorOutlineIcon fontSize={"inherit"} />
        </div>
        <p>{message}</p>
      </div>
    </Wrapper>
  );
};
export default ErrorMessage;
