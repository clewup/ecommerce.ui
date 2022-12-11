import "./header.scss";
import { Link, useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/Auth";
import { roles } from "../../../enums/roles";
import {
  Button,
  ClickAwayListener,
  Grow,
  Menu,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from "@mui/material";

const Header = () => {
  const { isAuthenticated, role } = useContext(AuthContext);
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

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

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div id={"header"}>
      <div className={"header-group"}>
        <Button onClick={() => navigate("/")} sx={{ color: "white" }}>
          Home
        </Button>

        <Button
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? "composition-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          sx={{ color: "white" }}
        >
          Store
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
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
                    <MenuItem
                      onClick={(e) => {
                        handleClose(e);
                        navigate("store");
                      }}
                    >
                      All Products
                    </MenuItem>
                    <MenuItem
                      onClick={(e) => {
                        handleClose(e);
                        navigate("store/laptops");
                      }}
                    >
                      Laptops
                    </MenuItem>
                    <MenuItem
                      onClick={(e) => {
                        handleClose(e);
                        navigate("store/mobile-phones");
                      }}
                    >
                      Mobile Phones
                    </MenuItem>
                    <MenuItem
                      onClick={(e) => {
                        handleClose(e);
                        navigate("store/smart-watches");
                      }}
                    >
                      Smart Watches
                    </MenuItem>
                    <MenuItem
                      onClick={(e) => {
                        handleClose(e);
                        navigate("store/tablets");
                      }}
                    >
                      Tablets
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>

        <Button onClick={() => navigate("trending")} sx={{ color: "white" }}>
          Trending
        </Button>
      </div>
      <div className={"header-group"}>
        {!isAuthenticated ? (
          <Button onClick={() => navigate("login")} sx={{ color: "white" }}>
            Login
          </Button>
        ) : (
          <Button onClick={() => navigate("account")} sx={{ color: "white" }}>
            Account
          </Button>
        )}
        <Button onClick={() => navigate("cart")} sx={{ color: "white" }}>
          Cart
        </Button>

        {role && (role === roles.DEVELOPER || role === roles.EMPLOYEE) && (
          <Button onClick={() => navigate("admin")} sx={{ color: "white" }}>
            Admin
          </Button>
        )}
      </div>
    </div>
  );
};
export default Header;
