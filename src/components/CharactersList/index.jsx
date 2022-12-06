import React from 'react'
import Character from '../Character'
import { List } from './styled'

const CharactersList = ({list}) => {
  return (
    <List>
      {list.map((item, index) => <Character key={index} data={item}/>)}
    </List>
  )
}

export default CharactersList