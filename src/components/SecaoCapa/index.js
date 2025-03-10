import styles from './SecaoCapa.module.css'

export default function SecaoCapa() {
    return (
        <section className={styles.capa}>
            <div>
                <p className={styles.introducao}>Conheça nossa coleção</p>
                <h1>Inspire seu <b>estilo!</b></h1>
                <p className={styles.botao}>Compre agora!</p>
            </div>
        </section>
    )
}