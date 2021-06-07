import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import styles from "./FooterSection.module.css";

export default function FooterSection(props) {
  return (
    <React.Fragment>
      {props.sectionData.map((obj) => (
        <Grid item xs={obj.xs} sm={obj.sm} key={obj.gridKey}>
          <Box className={styles.footerTitle}>{obj.sectionTitle}</Box>
          <div>
            {obj.arrOfLinks.map((obj2) => (
              <Box className={styles.links} key={obj2.boxKey}>
                <Link
                  key={obj2.linkKey}
                  className={styles.link}
                  underline={obj2.underline}
                  color={obj2.color}
                  href={obj2.href}
                >
                  {obj2.text}
                </Link>
              </Box>
            ))}
          </div>
        </Grid>
      ))}
    </React.Fragment>
  );
}
