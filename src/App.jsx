import { BrowserRouter } from 'react-router-dom';
import Menu from '@/components/menu';

const App = () => {

  return (
    <BrowserRouter>
      <Menu />
      <p>App</p>
    </BrowserRouter>
  )
}

export default App
