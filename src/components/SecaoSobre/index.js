import styles from './SecaoSobre.module.css';

export default function SecaoSobre() {
    return (
        <section className={styles.sobre}>
            <div className={styles.titulo}>
                <h2>Conheça nossa história</h2>
                <p>Descubra nossa história e o que nos inspira a transformar moda em expressão.</p>
            </div>

            <div className={styles.sobre_itens}>

            <div className={styles.sobre_item1}>
                    <img src='./nosso-estilo.png' alt='Nosso estilo' />
                    <div>
                    <h3>Nosso estilo</h3>
                    <p>Elegância e versatilidade definem nosso estilo. Criamos peças que acompanham a mulher em todos os momentos, do dia a dia a ocasiões especiais, sempre com cortes sofisticados e tecidos de alta qualidade. Buscamos unir modernidade e atemporalidade, trazendo tendências que valorizam a feminilidade sem abrir mão do conforto. Cada detalhe é pensado para que nossas clientes encontrem roupas que expressem sua personalidade com charme e sofisticação.</p>
                    </div>
                </div>

                <div className={styles.sobre_item2}>
                    <div>
                        <h3>Quem somos</h3>
                        <p>Somos a Panô, uma marca que acredita que a moda é uma forma de expressão e empoderamento. Nosso compromisso é oferecer peças que unem sofisticação, conforto e autenticidade, sempre pensando na mulher moderna que busca qualidade e estilo no seu dia a dia. Desde a nossa fundação, construímos uma trajetória marcada pela inovação e pelo cuidado com cada detalhe, garantindo que cada coleção reflita a essência das nossas clientes. Mais do que roupas, criamos experiências para que cada mulher se sinta única e confiante em qualquer ocasião.</p>
                    </div>
                    <img src='./quem-somos.png' alt='Quem somos' />
                </div>

            </div>
        </section>
    )
}