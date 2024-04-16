import './App.css'
import { TextStyler } from './assets/components/text-styler/text-styler'
import { Button } from './assets/components/button/button'

function App() {

  return (
    <>
    
    
    <TextStyler color="blue" uppercase = "uppercase">
      <h3>texto do componente</h3>
    </TextStyler>

    <Button label="Baixar CV">
      <button>Clique Aqui</button>
    </Button>

    </>
  )
}

export default App
