import styled from "styled-components"

export const CharCard = styled.li`
  border: 1px solid ${ props => props.color} ;
  border-radius: 5px;
  margin: 5px;
  padding: 20px 10px 5px;
  width: 250px;
`;

export const Image = styled.img`
  width: 200px;
`;