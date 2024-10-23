import { Route, Routes } from 'react-router-dom'
import RoutesConfig from '../../routes/routesConfig'

const RoutesMap = () => {
  return (
    <Routes>
    {RoutesConfig.map((route, index) => {
      return (
        <Route key={index} path={route.path} element={route.component} />
      )
    })}
  </Routes>
  )
}

export default RoutesMap