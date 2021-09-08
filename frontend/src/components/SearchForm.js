import React from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import LabeledInput from './LabeledInput'

const SearchForm = ({searchTerm, handleChange, handleSearch, children}) => (
  <Container>
    <Form onSubmit={handleSearch}>
      <Row>
      <Col xs={10}>
        <LabeledInput
          id="search"
          placeholder="Search a Restaurant"
          value={searchTerm}
          handler={handleChange}
        >
          {children}
        </LabeledInput>
      </Col>
      <Col xs={2}>
        <Button
          variant="primary"
          type="submit"
        >
          Go
        </Button>
      </Col>
      </Row>
    </Form>
  </Container>
)

export default SearchForm