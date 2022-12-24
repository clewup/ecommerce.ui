import "./app-error.scss";
import Wrapper from "../../atoms/Wrapper/Wrapper";
import React from "react";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import Text from "../../atoms/Text/Text";

interface IProps {
  error: {
    code?: string;
    message?: string;
  };
}

const AppError: React.FC<IProps> = ({ error }) => {
  return (
    <Wrapper id={"app-error"}>
      <div className={"app-error"}>
        <div className={"error-icon"}>
          <ErrorOutlineIcon fontSize={"inherit"} />
        </div>
        <Text>{error.code}</Text>
        <Text>{error.message}</Text>
      </div>
    </Wrapper>
  );
};
export default AppError;
