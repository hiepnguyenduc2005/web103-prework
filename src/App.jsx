import { useRoutes } from 'react-router-dom'
import './App.css'
import Overview from './components/Overview'
import ShowCreators from './pages/ShowCreators'
import ViewCreator from './pages/ViewCreator'
import EditCreator from './pages/EditCreator'
import AddCreator from './pages/AddCreator'

const App = () => { 
  
  let element = useRoutes([
    {
      path: '/',
      element: <ShowCreators />,
    },
    {
      path: '/view/:id',
      element: <ViewCreator />,
    },
    {
      path: '/edit/:id',
      element: <EditCreator />,
    },
    {
      path: '/add',
      element: <AddCreator />,
    }
  ]);

  return (
    <>
      <Overview />
      {element}
    </>
  )
}

export default App;
