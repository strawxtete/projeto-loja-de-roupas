import styles from './SecaoContato.module.css';

export default function SecaoContato() {
    return (
        <section className={styles.contato}>
            <div className={styles.logo}>
                <picture>
                    <img src='/logo-pano.png'/>
                </picture>
                <p>Moda que reflete sua essência com elegância.</p>
            </div>

                <div className={styles.sobre_itens}>
                    <div>
                        <h3>Sobre nós</h3>
                        <p>Nossa História</p>
                        <p>Nossa Missão</p>
                        <p>Qualidade e Sustentabilidade</p>
                    </div>
                </div>

                <div className={styles.contato_itens}>
                    <div>
                        <h3>Entre em contato</h3>
                        <p>Rua das Flores, 125 - Jardim Primavera, São Paulo - SP</p>
                        <p>(11) 98765-4321</p>
                        <p>contato.pano@gmail.com</p>
                    </div>
                </div>

                <div className={styles.sociais_itens}>
                    <div>
                        <h3>Siga-nos em nossas redes sociais</h3>
                        <p>@pano</p>
                        <p>@pano</p>
                        <p>@pano</p>
                    </div>
                </div>

        </section>
    )
}