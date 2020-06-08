import * as React from "react";
import { MainLayout } from "components/layout/main";
import { Canvas } from "components/canvas";

export const App: React.FC = () => {
  return (
    <MainLayout>
      <Canvas />
    </MainLayout>
  );
};
