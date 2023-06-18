import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import router from "./router";
import { persistor, store } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "styled-components";
import theme from "./commons/themes/styledComponents";
import ModalProvider from "./commons/components/modals/ModalProvider";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <ModalProvider>
            <RouterProvider router={router} />
          </ModalProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
