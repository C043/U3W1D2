import { Badge, Button, Card, Col, Container, Row } from "react-bootstrap";
import books from "../data/horror.json";

const AllTheBooks = () => (
  <Container className="my-5">
    <Row className="gy-4 justify-content-center align-items-center">
      {books.map(book => {
        return (
          <Col key={book.asin} xs="12" md="6" lg="4" xl="3">
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={book.img} alt={book.title} style={{ height: "437px" }} />
              <Card.Body className="d-flex flex-column align-items-center justify-content-center gap-2">
                <div className="d-flex justify-content-center align-items-center gap-2">
                  <Card.Title className="line-clamp m-0">{book.title}</Card.Title>
                  <Badge>{book.price}$</Badge>
                </div>
                <Button variant="primary">Buy</Button>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  </Container>
);

export default AllTheBooks;
