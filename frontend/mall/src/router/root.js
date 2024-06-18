import { Suspense, lazy } from "react";

const {createBrowserRouter} = require("react-router-dom");


const Loading = <div className={'bg-red-700'}>Loading. . . .</div>
const Main = lazy(() => import("../pages/MainPage"))
const About = lazy(() => import("../pages/AboutPage"))

const TodoIndex = lazy(() => import("../pages/todo/IndexPage"))
const TodoList = lazy(() => import("../pages/todo/ListPage"))

// root 라는 라우터를 App.js에 넣어줄 것(RouterProvider)
// 배열에 아무것도 넣지 않을 경우 콘솔에 non-empty routes에러가 뜸
const root = createBrowserRouter([
  // 객체 형태로 넣어줌
  {
    path: "", // 경로, 빈경로=맨처음 페이지
    element: <Suspense fallback={Loading}><Main/></Suspense> // 보여줄 컴포넌트
  },
  {
    path: "about", // 경로
    element: <Suspense fallback={Loading}><About/></Suspense> // 보여줄 컴포넌트
  },
  {
    path: "todo",
    element: <Suspense fallback={Loading}><TodoIndex/></Suspense>,
    children: [
      {
        path: 'list',
        element: <Suspense fallback={Loading}><TodoList/></Suspense>,
      }
    ]
  },
])

export default root;