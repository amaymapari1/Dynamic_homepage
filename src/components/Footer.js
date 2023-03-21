import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

const Footer = () => {
  return (
    <div style={{ position: "relative", minHeight: "100%" }}>
      <Box>
        {/* <h1
          style={{
            color: "yellow",
            fontSize: "20px",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          GeeksforGeeks: A Computer Science Portal for Geeks
        </h1> */}
        <Container>
          <Row>
            <Column>
              <Heading>CONTACT US</Heading>
              <FooterLink>Phone</FooterLink>
              <FooterLink href="#">+91 72766-30705</FooterLink>
              <FooterLink>Email</FooterLink>

              <FooterLink href="#">admin@merito.in</FooterLink>
              <FooterLink>Address</FooterLink>
              <FooterLink> Baner, Pune, Maharashtra 411045</FooterLink>
            </Column>
            <Column>
              <Heading>CAREER CORNER</Heading>
              <FooterLink href="#">Our Programs</FooterLink>
              <FooterLink href="#">Our Story</FooterLink>
              <FooterLink href="#">Our Brands</FooterLink>
              <FooterLink href="#">Social Initiatives</FooterLink>
              <FooterLink href="#">Contact Us</FooterLink>
            </Column>
            <Column>
              <Heading>OUR BRANDS</Heading>
              <FooterLink href="#">Merito.ai</FooterLink>
              <FooterLink href="#">Merito Academy</FooterLink>
              <FooterLink href="#">Helppad</FooterLink>
            </Column>
          </Row>
        </Container>
      </Box>
    </div>
  );
};
export default Footer;
