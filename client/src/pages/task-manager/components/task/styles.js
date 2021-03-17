import styled from 'styled-components'
import { DUSTY_GRAY, IN_PROGRESS, PENDING } from '../../../../styles/colors'

export const Content = styled.div`
  padding: 1rem 2rem;
  margin: 2rem;
  display: flex;
  border-radius: .5rem;
  user-select: none;
  color: white;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${props => {
  switch (props.status) {
    case 'Pending':
      return PENDING
    case 'In Progress':
      return IN_PROGRESS
    default:
      return DUSTY_GRAY
  }
}};
`

export const Title = styled.span`
  ${props => props.status === 'Done' && `text-decoration: line-through`};
`

export const Hover = styled.div`
  background-color: rgba(0, 0, 0, .75);
  border-radius: .5rem;
  color: white;
  padding: 1rem; 
`

export const Button = styled.div`
  padding: .5rem 1rem;
  background-color: ${props => props.loading ? 'rgba(0, 0, 0, .5)' : '#000'};
  border-radius: .5rem;
  cursor: pointer;
  width: 15rem;
  text-align: center;
  text-decoration: unset;
  margin-left: auto;
  &:hover {
    background-color: rgba(0, 0, 0, .5);
  }
`
