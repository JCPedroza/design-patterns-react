import { SplitScreen } from './components/layout/split-screen/SplitScreen'

const Left = () => <h1>Left</h1>

const Right = () => <h1>Right</h1>

function App () {
  return (
    <SplitScreen leftWeight={1} rightWeight={2}>
      <Left />
      <Right />
    </SplitScreen>
  )
}

export default App
