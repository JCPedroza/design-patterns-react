import { render } from '@testing-library/react'
import SplitScreen from './SplitScreen'

const Left = () => <p>left</p>
const Right = () => <p>right</p>
const weights = [3, 5]

describe('SplitScreen component', () => {
  it('renders left and right components', () => {
    const { container } = render(
      <SplitScreen weights={weights}>
        <Left />
        <Right />
      </SplitScreen>
    )
    expect(container).toMatchSnapshot()
  })
})
