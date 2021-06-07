import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import styles from "./Footer.module.css";
import FooterSection from "./FooterSection";

export default function Footer() {
  function createLink(text, underline, color, href, linkKey, boxKey) {
    return { text, underline, color, href, linkKey, boxKey };
  }
  function createFooterSection(sectionTitle, gridKey, links, xs = 12, sm = 4) {
    let arrOfLinks = [];
    for (const obj of links) {
      arrOfLinks.push(
        createLink(
          obj.text,
          (obj.underline = "none"),
          (obj.color = "inherit"),
          (obj.href = "/"),
          obj.linkKey,
          obj.boxKey
        )
      );
    }
    return { sectionTitle, gridKey, arrOfLinks, xs, sm };
  }
  const footerSections = [
    createFooterSection("Contact", "footerGrid1", [
      { text: "Link1", linkKey: "footerLink1", boxKey: "footerLink1Box1" },
      { text: "Link2", linkKey: "footerLink2", boxKey: "footerLink2Box2" },
      { text: "Link3", linkKey: "footerLink3", boxKey: "footerLink3Box3" },
    ]),
    createFooterSection("About", "footerGrid2", [
      { text: "Link1", linkKey: "footerLink4", boxKey: "footerLink4Box4" },
      { text: "Link2", linkKey: "footerLink5", boxKey: "footerLink5Box5" },
      { text: "Link3", linkKey: "footerLink6", boxKey: "footerLink6Box6" },
    ]),
    createFooterSection("Social Media", "footerGrid3", [
      { text: "Link1", linkKey: "footerLink7", boxKey: "footerLink7Box7" },
      { text: "Link2", linkKey: "footerLink8", boxKey: "footerLink8Box8" },
      { text: "Link3", linkKey: "footerLink9", boxKey: "footerLink9Box9" },
    ]),
  ];
  return (
    <footer className={styles.footer}>
      <Box px={{ xs: 3, sm: 10 }} py={{ xs: 3, sm: 4 }} color="black">
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <FooterSection sectionData={footerSections} />
          </Grid>
        </Container>
      </Box>
    </footer>
  );
}
