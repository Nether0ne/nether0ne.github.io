import { FC } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "../layout/MainLayout/MainLayout";
import RoutePage from "./Route";
import StreamsLiveAuthPage from "./StreamsLiveAuth";

const App: FC = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/r">
          <Route path=":route" element={<RoutePage />} />
        </Route>
        <Route path="/streams-live">
          <Route path="auth" element={<StreamsLiveAuthPage />} />
        </Route>
      </Routes>
    </MainLayout>
  );
};

export default App;
