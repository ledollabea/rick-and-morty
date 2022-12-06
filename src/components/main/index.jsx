import { useQuery } from "react-query"
import axios from "axios"
import CharactersList from "../CharactersList"
import { MainComponent, ButtonDiv } from "./styled"
import { useState } from "react"

const Main = () => {
  const [page, setPage] = useState(1)
  const { isLoading, error, data,  } = useQuery(["info", page], () => axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`, {keepPreviousData: true})
    .then((res) => res.data)
    .catch(err => console.log(err)))
  if (isLoading) return "Loading...";
  if (error) return "Error" + error.message;
  console.log(data)
    return (
      <MainComponent>
        <h1>RICK AND MORTY</h1>
        <CharactersList list={data.results} />
        <ButtonDiv>
        <button onClick={() => setPage(page-1)} disabled = {page === 1} >Previous</button>
        <button onClick={() => setPage(page+1)} disabled={page ===42}>Next</button>
        </ButtonDiv>
    </MainComponent>
  )
}

export default Main