import { Route, BrowserRouter, Routes } from "react-router-dom";
import RoutesConfig from "../routes/routesConfig";
import Header from "../header";

import styles from "./style.module.css";

function App() {
  return (
    <BrowserRouter>
      <div className={styles.wrapper}>
        <Header />
        <Routes>
          {RoutesConfig.map((route, index) => {
            return (
              <Route key={index} path={route.path} element={route.component} />
            );
          })}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
