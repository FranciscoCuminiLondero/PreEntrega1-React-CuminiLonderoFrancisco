import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"

const App = () => {

  const greeting = "Bienvenidos a la tienda de E.S. Chocolates"

  return (
    <>
      <NavBar />
      <ItemListContainer greeting={greeting} />
    </>
  )
}

export default App
