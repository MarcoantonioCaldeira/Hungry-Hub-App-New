
import { Provider } from "react-redux"
import RoutesContainer from "./confg/routes"
import createStore  from "./reducers/store";



const App: React.FC = () => {
  return (
    <>
      <Provider store={createStore()}>
        <RoutesContainer/>
      </Provider>
    </>
  )
};

export default App;
