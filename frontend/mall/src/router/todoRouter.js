import { Suspense, lazy } from "react"
import { Navigate } from "react-router-dom"

const Loading = <div className={'bg-red-700'}>Loading. . . .</div>

const TodoList = lazy(() => import("../pages/todo/ListPage"))
const TodoRead = lazy(() => import("../pages/todo/ReadPage"))


const todoRouter = () => {
  return [
    {
      path:'list',
      element: <Suspense fallback={Loading}><TodoList/></Suspense>,
    },
    {
      path: '', // 그냥 todo로 들어옴 -> list로 보낸다 (todo/list 로 바로 가버림)
      // (replace:지금경로 대신에 이경로로 보내주겠다)
      element: <Navigate replace={true} to={'list'}/>
    },
    {
      path: 'read/:tno', // Param 사용(인자를 넘겨받음)
      element: <Suspense fallback={Loading}><TodoRead/></Suspense>,
    }
  ]
}

export default todoRouter;