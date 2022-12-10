import "./app-error.scss";
import Wrapper from "../../atoms/Wrapper/Wrapper";
import React from "react";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

interface IProps {
  error: {
    code?: string;
    message?: string;
  };
}

const AppError: React.FC<IProps> = ({ error }) => {
  return (
    <Wrapper id={"error"}>
      <div className={"app-error"}>
        <div className={"error-icon"}>
          <ErrorOutlineIcon fontSize={"inherit"} />
        </div>
        <p>{error.code}</p>
        <p>{error.message}</p>
      </div>
    </Wrapper>
  );
};
export default AppError;
