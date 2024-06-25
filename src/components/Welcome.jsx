import { Alert, Container } from "react-bootstrap";

const Welcome = () => (
  <Container>
    <Alert variant="info" className="my-3">
      My Book Shop
    </Alert>
    <h2>Welcome to My Book Shop!</h2>
  </Container>
);

export default Welcome;
