import {
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from "@mui/material";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../../../../contexts/Product";
import getProductCategories from "../../../../api/GetProductCategories";
import Text from "../../../atoms/Text/Text";

const StoreDropdown = () => {
  const navigate = useNavigate();
  const { categories, setCategories } = useContext(ProductContext);

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (categories.length === 0 || !categories.length) {
      getProductCategories().then((res) => {
        setCategories(res.data);
      });
    }
    // eslint-disable-next-line
  }, []);

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
          navigate("store");
          handleToggle();
        }}
      >
        STORE
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
              marginTop: "0.5rem",
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
                  {categories.map((category) => {
                    return (
                      <MenuItem
                        key={category}
                        onClick={(e) => {
                          handleClose(e);
                          navigate(
                            `store/${category
                              .replace(/\s/g, "-")
                              .toLowerCase()}`
                          );
                        }}
                      >
                        {category}
                      </MenuItem>
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
