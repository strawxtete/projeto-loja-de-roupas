import styles from './Topo.module.css'

export default function Topo() {
    return (
        <header>
            <div className={styles.container_topo}>
                <picture>
                    <img src='/logo-pano.png'/>
                </picture>

                <nav>
                    <a href="#">Home</a>
                    <a href="#">Produtos</a>
                    <a href="#">Sobre Nós</a>
                    <a href="#">Contato</a>
                </nav>
            </div>
        </header>
    )
}