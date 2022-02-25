import { arrayOf, element, number } from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
`

const Pane = styled.div`
  flex: ${props => props.weight};
`

const SplitScreen = ({ children, weights }) => {
  const [left, right] = children
  const [leftWeight, rightWeight] = weights

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
  weights: arrayOf(number).isRequired
}

export default SplitScreen
