import { Outlet } from "react-router-dom"
import Header from "./components/Headers"
import { Container } from "react-bootstrap"

const App = () => {
  return (
    <>
    <Header />
    <Container>
      <Outlet/>
    </Container>
    </>
  )
}

export default App