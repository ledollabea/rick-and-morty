import React from 'react'
import { CharCard, Image } from './styled'

const Character = ({ data }) => {
  const Border = data.status === "Dead" ? "crimson" : data.status === "Alive" ? "green" : "grey"

  return (
    <CharCard color={Border}>
      <Image src={data.image} />
      <h3>{data.name}</h3>
      <p>{data.status}</p>
    </CharCard>
  )
}

export default Character