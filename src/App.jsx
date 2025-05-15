import { Provider } from 'react-redux'
import './App.css'
import store from './store'
import Navbar from './Component/Navbar'
import DashBoard from './Component/DashBoard'
function App() {

  return (
   <Provider store={store}>
    <Navbar/>
    <div className=' relative w-full flex justify-center'>
    <DashBoard/>
    </div>
   </Provider>
  )
}

export default App
