import logo from "./logo.svg";
import "./index.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import TopNav from "./components/topNav";
import UserForm from "./components/UserForm";
import UserChart from "./components/UserCharts";
import { PersistGate } from "redux-persist/es/integration/react";

function App() {
  return (
    <div className="App">
      <TopNav />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Routes>
            <Route path="/" element={<UserForm />} />
            <Route path="/userChart" element={<UserChart />} />
          </Routes>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
