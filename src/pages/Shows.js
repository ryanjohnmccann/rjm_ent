import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import styles from "../components/Shows/Shows.module.css";
import ShowTabs from "../components/Shows/ShowTabs"

export default function Shows() {
  return (
    <div>
      <Grid container className={styles.root}>
        <Grid item>
          <Typography variant="h2">Shows</Typography>
          <Typography
            className={styles.showsDetails}
            color="textSecondary"
            variant="subtitle1"
            component="p"
            paragraph
          >
            Eiusmod nulla ad anim cupidatat magna nisi laborum amet amet
            deserunt ex proident non dolore. Sunt consectetur incididunt aute
            amet laboris cillum reprehenderit officia fugiat enim excepteur
            reprehenderit. Ut dolor ullamco proident duis minim magna culpa.
            Incididunt mollit labore irure mollit velit ut cillum dolor irure
            commodo esse voluptate. Eiusmod nisi elit voluptate adipisicing
            aliqua pariatur veniam veniam nulla fugiat minim ipsum incididunt.
            Eu minim nisi aute nostrud pariatur adipisicing dolore est fugiat
            culpa consectetur. Est in cupidatat culpa minim id ipsum labore do
            ad reprehenderit.
          </Typography>
        </Grid>
        <Grid item>
          <ShowTabs />
        </Grid>
      </Grid>
    </div>
  );
}
