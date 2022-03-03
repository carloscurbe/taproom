import * as React from "react";
import Layout from "../components/layout";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

const Bienvenido = (/* { location } */) => {
  return (
    <Layout>
      <Row>
        <Col md={12}>
          <Form className="py-4 mt-5 mx-auto">
            <Container>
              <Row className="mb-2">
                <Col className="text-center">
                  <Form.Control
                    type="hidden"
                    id="hidden1"
                    value="Guest_Authenticated"
                  />
                  <h1 className="titulo-bienvenida mt-2">
                    ¡Genial
                    {/* <span id="nombre">{location.state.name}</span> */}!
                  </h1>
                  <h2 className="subtitulo-bienvenida pt-2">
                    Ya estás conectado <br />
                    Disfruta de tu estancia
                  </h2>
                </Col>
              </Row>
              <Row>
                <Col className="mt-2 mb-3">
                  <a
                    className="btn btn-secondary btn-continuar"
                    href="https://www.google.com/"
                    role="button"
                  >
                    Continuar
                  </a>
                </Col>
              </Row>
            </Container>
          </Form>
        </Col>
      </Row>
    </Layout>
  );
};

export default Bienvenido;
