'use client';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { FormEvent } from 'react';
import Row from 'react-bootstrap/Row';
import { addBook } from '../../../api/booksApi';

export function AddForm() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const departmentCode = (e.currentTarget[0] as HTMLInputElement).value;
    const bookNumber = (e.currentTarget[1] as HTMLInputElement).value;
    const controlNumber = (e.currentTarget[2] as HTMLInputElement).value;
    const book = {
      departmentCode,
      bookNumber,
      controlNumber,
    };

    addBook(book);
    console.log(
      `Submitted values are: ${departmentCode}/${bookNumber}/${controlNumber}`
    );
  };

  return (
    <div className="mt-5">
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail" xs={2}>
            <Form.Label>Kod wydziału:</Form.Label>
            <Form.Control type="text" placeholder="Wpisz kod wydziału." />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword" xs={3}>
            <Form.Label>Numer księgi wieczystej:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Wpisz kod księgi wieczystej."
            />
          </Form.Group>

          <Form.Group
            as={Col}
            className="mb-3"
            controlId="formGridAddress1"
            xs={2}
          >
            <Form.Label>Cyfra kontrolna:</Form.Label>
            <Form.Control placeholder="Podaj cyfrę kontrolną." />
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
