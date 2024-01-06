import styles from "./Header.module.css"
import logo from "../../assets/images/logo.svg";

export function Header() {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.headerContainerImg}>
                <img src={logo} alt="Logotipo da Atual Serviços" />
            </div>
            <div className={styles.headerMenuLink}>
                <a href="">Home</a>
                <a href="">Serviços</a>
                <a href="">Sobre</a>
            </div>
            <div className={styles.headerContact}>
                <a href="">Contato</a>
            </div>
        </div>
    )
}