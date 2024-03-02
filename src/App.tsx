
import { Provider } from "react-redux"
import RoutesContainer from "./confg/routes"
import store from "./reducers/store"


const App: React.FC = () => {
  return (
    <>
      <Provider store={store}>
        <RoutesContainer/>
      </Provider>
    </>
  )
};

export default App;
