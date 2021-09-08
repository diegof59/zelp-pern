import React from 'react'
import Header from '../components/Header'
import SearchForm from '../components/SearchForm'

function Home(props){

  const [searchTerm, setSearchTerm] = React.useState('')
  

  const handleSearchInput = (event) => {
    setSearchTerm(event.target.value)
  }

  const handleSearch = (event) => {
    event.preventDefault()
    console.log('search')
  }

  return(
    <>
      <Header />
      <SearchForm
        searchTerm={searchTerm}
        handleChange={handleSearchInput}
        handleSearch={handleSearch}
      >
        Search Restaurant
      </SearchForm>
    </>
  )
}

export default Home