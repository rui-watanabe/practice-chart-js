import React from "react";
import { Button, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  btnStyle: { background: "green", padding: "3px 50px" },
  typoStyle: { color: "blue" },
});

const MaterialUI: React.FC = () => {
  const classes = useStyles();
  return (
    <div>
      <Typography
        className={classes.typoStyle}
        color="secondary"
        variant="h1"
        align="left"
        gutterBottom
        noWrap
      >
        Hello MaterialUI
      </Typography>
      <Button className={classes.btnStyle} variant="contained" color="primary">
        The Button
      </Button>
    </div>
  );
};

export default MaterialUI;
