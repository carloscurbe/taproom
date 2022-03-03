import * as React from "react";
import Layout from "../components/layout";
import Login from "../components/login";
/* import Container from "react-bootstrap/Container"; */
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Row>
        <Col md={12}>
          <Login />
        </Col>
      </Row>
    </Layout>
  );
};

export default IndexPage;
