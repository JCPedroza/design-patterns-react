import { arrayOf, element, number } from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
`

const Pane = styled.div`
  flex: ${props => props.weight};
`

const SplitScreen = ({ children, leftWeight = 1, rightWeight = 1 }) => {
  const [left, right] = children

  return (
    <Container>
      <Pane weight={leftWeight}>
        {left}
      </Pane>

      <Pane weight={rightWeight}>
        {right}
      </Pane>
    </Container>
  )
}

SplitScreen.propTypes = {
  children: arrayOf(element).isRequired,
  leftWeight: number,
  rightWeight: number
}

export default SplitScreen
