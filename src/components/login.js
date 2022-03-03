import React, { useState } from "react";
import { navigate } from "gatsby";
// import { Link, useHistory } from "react-router-dom";
import axios from "axios";
/* import Swal from "sweetalert2"; */
// import cuid from "cuid";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
/* import { Link } from "gatsby"; */

const Login = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [celular, setCelular] = useState("");
  const [fecha_nacimiento, setFechaNacimiento] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setActiveSpinner(true);
    const dataForm = new FormData();
    dataForm.append("nombre", nombre);
    dataForm.append("apellido", apellido);
    dataForm.append("email", email);
    dataForm.append("celular", celular);
    dataForm.append("fecha_nacimiento", fecha_nacimiento);
    const respuesta = await axios.post(
      "https://kernel.curbe.com.ec/api/portalcautivo/login",
      dataForm
    );
    if (respuesta.status === 200) {
      if (respuesta.data.status === "Ok") {
        setNombre("");
        setApellido("");
        setEmail("");
        setCelular("");
        setFechaNacimiento("");
        e.target.reset();
        /*         Swal.fire({
          title: "Información enviada...",
          text: "Pronto nos pondremos en contacto con usted.",
          showCloseButton: true,
          icon: "success",
        }); */

        navigate(`/bienvenido`, {
          state: { name: nombre },
        });

        /* history.push({
          pathname: `/bienvenido`,
          state: {
            datos: { nombre: nombre },
          },
        }); */
      }
    }
    /* else {
        Swal.fire({
          title: "Error al enviar la información",
          text: "Intente en unos minutos...",
          showCloseButton: true,
          icon: "error",
        });
      }
    } else {
      Swal.fire({
        title: "Error al enviar informacion",
        text: "Intente en unos minutos...",
        showCloseButton: true,
        icon: "error",
      });
    } */
  };

  return (
    <Form
      className="contacto-form mx-auto py-4"
      id="contacto"
      onSubmit={handleSubmit}
    >
      <Container>
        <Row className="mb-2">
          <Col md={12} className="text-center">
            <h1 className="titulo">¡Bienvenido!</h1>
            <h2 className="subtitulo">
              Regístrate para conectarte al servicio wifi
            </h2>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={12}>
            <FloatingLabel label="Nombre">
              <Form.Control
                type="text"
                required
                onChange={(e) => setNombre(e.target.value)}
              />
            </FloatingLabel>
          </Col>
          <Col md={12}>
            <FloatingLabel label="Apellido">
              <Form.Control
                type="text"
                required
                onChange={(e) => setApellido(e.target.value)}
              />
            </FloatingLabel>
          </Col>
          <Col md={12}>
            <FloatingLabel label="Email">
              <Form.Control
                type="email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </FloatingLabel>
          </Col>

          <Col md={12}>
            <FloatingLabel label="Celular">
              <Form.Control
                type="text"
                required
                onChange={(e) => setCelular(e.target.value)}
              />
            </FloatingLabel>
          </Col>
          <Col md={12}>
            <FloatingLabel label="Fecha de nacimiento">
              <Form.Control
                type="date"
                placeholder="fecha nacimiento"
                min="1900-01-01"
                max="2003-01-01"
                required
                onChange={(e) => setFechaNacimiento(e.target.value)}
              />
            </FloatingLabel>
          </Col>
          <Col md={12}>
            <div className="my-3">
              <Form.Check
                inline
                label="He leido y acepto la política de privacidad y condiciones de uso."
                type="checkbox"
                required
              />
            </div>
          </Col>
          <Col md={12}>
            <Button variant="secondary" type="submit" className="btn-continuar">
              Continuar
            </Button>
          </Col>
        </Row>
      </Container>
    </Form>
  );
};

export default Login;
