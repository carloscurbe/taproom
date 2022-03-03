import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles.css";

const Layout = ({ children }) => {
  return (
    <>
      <main className="background py-3 px-2 pt-md-4">
        <Container>
          <Row>
            <Col md={12}>
              <figure className="logo mx-auto">
                <StaticImage src="../images/logo.png" alt="Tap Room logo" />
              </figure>
            </Col>
          </Row>
          {children}
        </Container>
      </main>
    </>
  );
};

export default Layout;
