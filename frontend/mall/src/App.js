import { RouterProvider } from "react-router-dom";
import root from "./router/root";

function App() {
  return (
    // 시작할때 라우터 탈 수 있도록 설정
    <RouterProvider router={root}/>
  );
}

export default App;
