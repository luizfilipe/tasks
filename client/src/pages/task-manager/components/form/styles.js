import styled from 'styled-components'
import { AZURE_RADIANCE } from '../../../../styles/colors'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem;
  & input {
    margin: .5rem 0 1rem 0;
    padding: .5rem 1rem;
  }
`

export const Button = styled.div`
  padding: 1rem 2rem;
  text-align: center;
  margin: 1rem 0;
  background-color: ${props => props.loading ? AZURE_RADIANCE : 'white'};
  border-radius: .5rem;
  border: 1px solid ${AZURE_RADIANCE};
  color: ${props => props.loading ?  'white' : AZURE_RADIANCE}; 
  cursor: pointer;
  text-decoration: unset;
  &:hover {
    color: white; 
    background-color: ${AZURE_RADIANCE};
  }
`
