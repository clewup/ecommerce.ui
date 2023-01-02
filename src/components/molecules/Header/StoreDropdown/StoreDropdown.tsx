import {
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from "@mui/material";
import React, { SetStateAction, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Text from "../../../atoms/Text/Text";
import { ProductContext } from "../../../../contexts/Product";

interface IProps {
  header: string;
  options: string[];
  headerAction?: React.Dispatch<SetStateAction<string>>;
  optionAction?: React.Dispatch<SetStateAction<string>>;
}

const StoreDropdown: React.FC<IProps> = ({
  header,
  options,
  headerAction,
  optionAction,
}) => {
  const navigate = useNavigate();

  const { resetQueries } = useContext(ProductContext);

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLParagraphElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current && !open) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <>
      <Text
        ref={anchorRef}
        id="composition-button"
        aria-controls={open ? "composition-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onMouseEnter={handleToggle}
        onClick={() => {
          resetQueries();
          navigate("store");
          headerAction?.(header);
        }}
        className={"dropdown-header"}
      >
        {header}
      </Text>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="bottom-start"
        onMouseLeave={handleToggle}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              marginTop: "0.7rem",
              transformOrigin:
                placement === "bottom-start" ? "left top" : "left bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  onKeyDown={handleListKeyDown}
                >
                  {options.map((option) => {
                    return (
                      <div key={option}>
                        <MenuItem
                          onClick={(e) => {
                            handleClose(e);
                            resetQueries();
                            navigate("store");
                            optionAction?.(option);
                          }}
                        >
                          {option}
                        </MenuItem>
                      </div>
                    );
                  })}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};
export default StoreDropdown;
