
import { Provider } from "react-redux"
import RoutesContainer from "./confg/routes"
import configureStore from "./reducers/store";



const App: React.FC = () => {
  return (
    <>
      <Provider store={configureStore()}>
        <RoutesContainer/>
      </Provider>
    </>
  )
};

export default App;
