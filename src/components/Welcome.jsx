import { Alert, Container } from "react-bootstrap";

const Welcome = () => (
  <Container>
    <Alert variant="info" className="my-3">
      Check out the new books!
    </Alert>
    <h2>Welcome to Golden Books!</h2>
  </Container>
);

export default Welcome;
