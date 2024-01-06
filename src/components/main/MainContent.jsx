import { UsersThree, Certificate, ShieldCheck } from "@phosphor-icons/react"
import img1 from "../../assets/images/img1.png";
import styles from "./MainContent.module.css"

export function MainContent() {
    return (
        <>
            <main className={styles.mainContent}>
                <div className={styles.mainContentTexts}>
                    <h1 className={styles.hq}>Serviços de qualidade em tempo hábil!</h1>
                    <p>Conheça agora nossos serviços e agende uma visita com um de nossos profissionais</p>
                    <a
                        href="https://api.whatsapp.com/send?phone=552141280302"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Agendar
                    </a>
                </div>
                <div className={styles.mainContentImg}>
                    <img
                        src={img1}
                        alt="Imagem de um homem com roupa de dedetização" />
                </div>
            </main>

            <section className={styles.sectionContent}>
                <div className={styles.sectionContentTitle}>
                    <h2>Por que escolher a nossa <span>empresa?</span></h2>
                </div>
                <div className={styles.sectionContentDivs}>
                    <div className={styles.sectionDivs}>
                        <UsersThree size={88} className={styles.icons} />
                        <h3>Equipe experiente</h3>
                        <p>
                            A empresa conta com uma equipe altamente qualificada e treinada,
                            com conhecimentos técnicos atualizados e habilidades especializadas
                            para realizar os serviços de forma eficiente e profissional.
                        </p>
                    </div>
                    <div className={styles.sectionDivs}>
                        <Certificate size={88} className={styles.icons} />
                        <h3>Qualidade e eficiência</h3>
                        <p>
                            A Atual Serviços prioriza a satisfação do cliente,
                            garantindo que cada serviço seja realizado de forma eficiente,
                            dentro do prazo estipulado e com resultados duradouros.
                        </p>
                    </div>
                    <div className={styles.sectionDivs}>
                        <ShieldCheck size={88} className={styles.icons} />
                        <h3>Segurança</h3>
                        <p>
                            A Atual Serviços se destaca pela prioridade à segurança em dedetização e obras.
                            Profissionais capacitados e protocolos rigorosos refletem o comprometimento total
                            com a proteção de clientes e colaboradores.
                        </p>
                    </div>
                </div>

                <div className={styles.sectionButton}>
                    <a href="/">Nossos serviços</a>
                </div>
            </section>
        </>


    )
}