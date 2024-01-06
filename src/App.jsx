import { Header } from "./components/header/Header"
import { MainContent } from "./components/main/MainContent"
import styles from "./App.module.css"
import "./styles/global.css"

export default function App(){
  return (
    <div>
      <Header/>
      <div className={styles.container}>
        <MainContent/>
      </div>
    </div>
  )
}