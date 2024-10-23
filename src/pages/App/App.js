import { BrowserRouter as Router } from 'react-router-dom'
import Header from '../../header'
import styles from './style.module.css'
import RoutesMap from '../../components/routes'
import 'antd/dist/antd.css';

function App() {
  return (
    <Router>
      <div className={styles.wrapper}>
        <Header />
       <RoutesMap/>
      </div>
    </Router>
  )
}

export default App
