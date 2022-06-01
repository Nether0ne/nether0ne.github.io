import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout/MainLayout";
import RoutePage from "./Route";
import StreamsLiveAuthPage from "./StreamsLiveAuth";

const App: FC = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/streams-live/auth" element={<StreamsLiveAuthPage />} />
        <Route path="/r/:route" element={<RoutePage />} />
      </Routes>
    </MainLayout>
  );
};

export default App;
