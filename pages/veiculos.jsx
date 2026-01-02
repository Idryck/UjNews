import React from 'react';
import styles from './Style/layout.module.css';

/**
 * Página: O Sócio Invisível (Veículos)
 * Editada para integrar perfeitamente com o layout.module.css
 */
function Home() {
    return (
        <main className={styles.container}>
            {/* Cabeçalho Estruturado */}
            <header className={styles.mainHeader}>
                <h1>União Jovem Notícias</h1>
                <p className={styles.tagline}>Notícias públicas que impactam a vida dos jovens brasileiros!</p>
            </header>

            {/* Navegação Padronizada */}
            <nav className={styles.mainNavigation} aria-label="Menu de matérias">
                <h2 className={styles.navTitle}>Conheça nossas matérias</h2>
                <ul className={styles.navList}> 
                    <li className={styles.navItem}>
                        <a href="/veiculos" className={styles.navLink}>• O Sócio Invisível</a>
                    </li>
                    <li className={styles.navItem}>
                        <a href="/energia" className={styles.navLink}>• Tributação Fotovoltaica: O Impacto no Setor de GD</a>
                    </li>
                </ul>
            </nav>

            {/* Conteúdo do Artigo */}
            <article>
                <section>
                    <header style={{ marginBottom: '30px' }}>
                        <h2 style={{ fontSize: '2rem', color: '#2c3e50' }}>O Sócio Invisível: A Realidade Tributária sobre Rodas</h2>
                    </header>
                    
                    <p style={{ textAlign: 'justify' }}>
                        Quando olhamos para um carro popular de entrada no Brasil, hoje beirando os R$ 70.000 ou R$ 80.000, 
                        não estamos olhando apenas para o custo de metal, plástico, borracha e engenharia. 
                        <strong> Estamos olhando para um dos sistemas de arrecadação mais agressivos do planeta.</strong>
                    </p>

                    <p style={{ textAlign: 'justify' }}>
                        O sentimento de que a juventude está sendo "expulsa" do mercado de consumo não é vitimismo; é matemática tributária. Para entender a profundidade desse abismo, precisamos dissecar a anomalia brasileira: o Estado é o "sócio majoritário" de qualquer veículo zero quilômetro.
                    </p>

                    <p style={{ padding: '15px', backgroundColor: '#f0f4f8', borderRadius: '8px', fontStyle: 'italic' }}>
                        Prazer, meu nome é <strong>Lucas Souza</strong>, formado em Gestão de TI e indignado com a situação atual do Brasil. Este é o primeiro dossiê que o União Jovem apresenta.
                    </p>

                    <hr style={{ border: '0', borderTop: '1px solid #eee', margin: '40px 0' }} />

                    <h3 style={{ color: '#2c3e50' }}>A Engenharia do Custo: Um "Sócio" de até 50%</h3>
                    
                    <p style={{ textAlign: 'justify' }}>
                        Enquanto em países como os Estados Unidos a carga tributária sobre um veículo gira em torno de 6% a 10%, no Brasil a mordida pode variar de <strong>30% a 48,6%</strong> do valor final. Em um carro de R$ 80.000,00, aproximadamente R$ 38.000,00 são puramente tributos que não retornam em tecnologia ou segurança.
                    </p>

                    <blockquote style={{ borderLeft: '4px solid #e67e22', paddingLeft: '20px', margin: '30px 0', fontStyle: 'italic', color: '#555', fontSize: '1.2rem' }}>
                        "Basicamente, o brasileiro trabalha meses para pagar o carro que vai dirigir, e outros meses para pagar o carro imaginário que o governo embolsou."
                    </blockquote>

                    <p style={{ textAlign: 'justify' }}>
                        O sistema opera em "cascata": paga-se imposto sobre o imposto já pago nas etapas anteriores. Conheça os vilões do seu bolso:
                    </p>

                    <ul style={{ paddingLeft: '20px', marginBottom: '30px' }}>
                        <li style={{ marginBottom: '10px' }}><strong>IPI:</strong> Imposto sobre o produto industrializado, variável pela potência.</li>
                        <li style={{ marginBottom: '10px' }}><strong>ICMS:</strong> O peso estadual que incide sobre o valor já inflado.</li>
                        <li style={{ marginBottom: '10px' }}><strong>PIS/COFINS:</strong> Contribuições federais sobre o faturamento.</li>
                    </ul>

                    <p style={{ textAlign: 'justify' }}>
                        Pagamos o carro mais caro do mundo para rodar nas piores estradas. O imposto e o IPVA anual não retornam em infraestrutura, gerando um ciclo de "perde-perde" financeiro para o jovem que tenta conquistar sua independência.
                    </p>

                    <section style={{ backgroundColor: '#fffcf4', padding: '25px', borderRadius: '12px', border: '1px solid #ffeeba', marginTop: '40px' }}>
                        <h3 style={{ color: '#856404', marginTop: 0 }}>O Plano de Ação</h3>
                        <p>Infelizmente, mudar esse cenário exige pressão política organizada. Os caminhos são:</p>
                        <ul style={{ paddingLeft: '20px' }}>
                            <li style={{ marginBottom: '10px' }}><strong>Participação Política:</strong> Eleger representantes comprometidos com a Reforma Tributária real.</li>
                            <li style={{ marginBottom: '10px' }}><strong>Pressão Digital:</strong> Utilizar as redes para cobrar transparência nos gastos públicos.</li>
                            <li style={{ marginBottom: '10px' }}><strong>União Jovem:</strong> Criar uma frente de pressão no Congresso para sermos ouvidos.</li>
                        </ul>
                    </section>
                </section>
            </article>

            {/* Rodapé Padronizado */}
            <footer className={styles.mainFooter}>
                <p>&copy; 2026 União Jovem Notícias - Desenvolvido por Lucas Souza</p>
                <p style={{ fontSize: '0.7rem', marginTop: '5px' }}>Gestão de TI | Análise de Políticas Públicas</p>
            </footer>
        </main>
    );
}

export default Home;