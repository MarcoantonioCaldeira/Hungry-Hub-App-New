
import { Provider } from "react-redux"
import RoutesContainer from "./confg/routes"
import store, { persistor } from "./reducers/store";
import { PersistGate } from "redux-persist/integration/react";



const App: React.FC = () => {
  return (
    <>
      <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
             <RoutesContainer/>
          </PersistGate>
      </Provider>,
    </>
  )
};

export default App;
