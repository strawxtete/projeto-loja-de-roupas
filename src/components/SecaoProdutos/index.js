import styles from './SecaoProdutos.module.css';

export default function SecaoProdutos() {
    return (
        <section className={styles.produtos}>
            <div className={styles.titulo}>
                <h2>Conheça nossos produtos</h2>
                <p>Explore nossa coleção de vestuário, que une estilo, conforto e qualidade para todas as ocasiões.</p>
            </div>

            <div className={styles.produtos_img}>

            <div className={styles.card_produtos}>
                <picture>
                    <img src='./vestido-tai-ipa-branco.png'/>
                </picture>
                <h3>Vestido Tai Ipa Branco</h3>
                <p>R$ 269,00</p>
            </div>

            <div className={styles.card_produtos}>
                <picture>
                    <img src='./top-celine-ipa-preto.png'/>
                </picture>
                <h3>Top Celine Ipa Preto</h3>
                <p>R$ 219,00</p>
            </div>

            <div className={styles.card_produtos}>
                <picture>
                    <img src='./maio-reto-alca-fina-chumbo.png'/>
                </picture>
                <h3>Maiô Reto Alça Fina Chumbo</h3>
                <p>R$ 249,00</p>
            </div>

            <div className={styles.card_produtos}>
                <picture>
                    <img src='./bata-mia-listra-biarritz.png'/>
                </picture>
                <h3>Bata Mia Tricoline Listras Biarritz</h3>
                <p>R$ 269,00</p>
            </div>

            </div>

        </section>
    )
}