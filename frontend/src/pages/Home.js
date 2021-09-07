import React from 'react'
import { Container, FormControl, Form, Button } from 'react-bootstrap'

function Home(props){

  const [searchTerm, setSearchTerm] = React.useState('')
  

  const handleSearchInput = (event) => {
    setSearchTerm(event.target.value)
  }

  const handleSearch = () => {
    console.log('search')
  }

  return(
    <Container>
      <h1 className="title text-center my-4">Zelp</h1>
      <SearchForm
        searchTerm={searchTerm}
        handleChange={handleSearchInput}
        handleSearch={handleSearch}
      >
        Search Restaurant
      </SearchForm>
    </Container>
  )
}

const SearchForm = ({searchTerm, handleChange, handleSearch, children}) => (
  <Form onSubmit={handleSearch}>
    <LabeledInput
      id="search"
      placeholder="Search a Restaurant"
      value={searchTerm}
      handler={handleChange}
    >
      {children}
    </LabeledInput>
    <Button
      variant="primary"
      type="submit"
    >
      Go
    </Button>
  </Form>
)

const LabeledInput = ({id, type="text", placeholder="", value, handleChange, children}) => (
  <>
    <Form.Label htmlFor={id} className="label" srOnly>{children}</Form.Label>
    <FormControl
      id={id}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={handleChange}
    />
  </>
)

export default Home