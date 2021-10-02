import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Theme,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { makeStyles } from "@material-ui/styles";
import Link from "next/link";
import React, { FC, useState } from "react";
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(0),
  },
  list: {
    width: 250,
  },
  toolbar: theme.mixins.toolbar,
}));

const Nav: FC = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      console.log("]-----] toggleDrawer [-----[");
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setOpen(open);
    };

  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <div className={classes.toolbar}>
        <Divider />
        <List>
          <Link href={"/users"} as={"/users"}>
            <ListItem button key={"users"}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={"유저관리 페이지"} />
            </ListItem>
          </Link>

          <Link href={"/products"} as={"/products"}>
            <ListItem button key={"products"}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={"제품 리스트"} />
            </ListItem>
          </Link>
        </List>
      </div>
    </div>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <IconButton onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Typography>ShoppingMall Admin</Typography>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </Box>
  );
};

export default Nav;
