import { render } from '@testing-library/react'
import SplitScreen from './SplitScreen'

const Left = () => <p>left</p>
const Right = () => <p>right</p>

it('renders something', () => {
  const { container } = render(
    <SplitScreen leftWeight={1} rightWeight={1}>
      <Left />
      <Right />
    </SplitScreen>)

  expect(container).toMatchSnapshot()
})
