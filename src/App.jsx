
import './App.css'
import { Provider } from 'react-redux'
import  {store} from './redux/store'
import PageContent from './pages/PageContent'
import './styles/page-content.css'

function App() {

  return (
    <Provider store={store}>
     <PageContent/>
    </Provider>
  )
}

export default App
