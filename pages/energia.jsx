import React from 'react';

/**
 * Componente Home: Análise Macroeconômica e Técnica da Geração Distribuída no Brasil.
 * Autor: Lucas Souza
 * Data: Janeiro de 2026
 */
function Home() {
    // Estilos inline para garantir a apresentação visual sem dependências externas
    const styles = {
        container: { maxWidth: '900px', margin: '0 auto', padding: '40px 20px', fontFamily: '"Inter", sans-serif', color: '#333', lineHeight: '1.6' },
        header: { textAlign: 'center', borderBottom: '2px solid #f0f0f0', paddingBottom: '30px', marginBottom: '40px' },
        tagline: { color: '#666', fontSize: '1.1rem', fontStyle: 'italic' },
        nav: { backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px', marginBottom: '40px' },
        article: { backgroundColor: '#fff' },
        highlight: { color: '#2c3e50', fontWeight: 'bold' },
        quote: { borderLeft: '4px solid #e67e22', paddingLeft: '20px', margin: '30px 0', fontStyle: 'italic', color: '#555' },
        footer: { marginTop: '60px', paddingTop: '20px', borderTop: '1px solid #eee', textAlign: 'center', fontSize: '0.85rem', color: '#999' }
    };

    return (
        <main style={styles.container}>
            {/* Header Editorial */}
            <header style={styles.header}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>União Jovem Notícias</h1>
                <p style={styles.tagline}>A voz técnica da juventude sobre políticas públicas e infraestrutura</p>
            </header>

            {/* Navegação Estruturada */}
            <nav style={styles.nav}>
                <h3 style={{ marginTop: 0 }}>Dossiês Disponíveis</h3>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    <li style={{ marginBottom: '10px' }}>
                        <a href="#artigo" style={{ color: '#3498db', textDecoration: 'none' }}>• Tributação Fotovoltaica: O Crepúsculo da Geração Distribuída</a>
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                        <a href="veiculos" style={{ color: '#3498db', textDecoration: 'none' }}>• O Sócio Invisível</a>
                    </li>
                </ul>
            </nav>

            {/* Seção de Conteúdo Técnico */}
            <section id="artigo" style={styles.article}>
                <article>
                    <header>
                        <h2 style={{ fontSize: '2rem', color: '#2c3e50' }}>A Armadilha do Fio B: Por que o "Imposto Solar" Ameaça a Democracia Energética?</h2>
                    </header>

                    <div className="article-body" style={{ textAlign: 'justify' }}>
                        <p>
                            O Brasil ostenta uma das matrizes energéticas mais sustentáveis do planeta, contudo, a eficiência técnica colide com a ineficiência regulatória. Atualmente, 88% da nossa geração provém de fontes renováveis, com a combinação eólica-solar atingindo <span style={styles.highlight}>23,7% da capacidade instalada</span>. Segundo a <strong>EPE</strong>, o setor fotovoltaico expandiu 39% em 2024, mas esse crescimento encontra agora um teto de vidro: o Marco Legal da GD (Lei 14.300).
                        </p>

                        <p>
                            A grande controvérsia reside na transição tarifária para sistemas <strong>On-Grid</strong>. O chamado "Imposto Solar" é, tecnicamente, a cobrança pelo uso da infraestrutura de distribuição (o <strong>Fio B</strong>). Em 2026, a incidência de 60% sobre os créditos injetados degrada severamente o <strong>ROI (Return on Investment)</strong>. O que antes era um investimento com <strong>Payback</strong> de 4 anos, agora se estende para 7 ou 8, desestimulando a microgeração distribuída.
                        </p>

                        <div style={styles.quote}>
                            "A manutenção do Sol é uma metáfora irônica para o que o mercado chama de subsídio cruzado reverso: o governo taxa a inovação para manter o lucro regulado das concessionárias."
                        </div>

                        <p>
                            Como investidor de players como <strong>Taesa (TAEE11)</strong> e <strong>Cemig (CMIG4)</strong>, compreendo a solidez das margens operacionais dessas companhias no segmento de transmissão e distribuição. Elas se beneficiam da infraestrutura centralizada. Contudo, do ponto de vista do desenvolvimento nacional, estamos diante da <strong>"Espiral da Morte" das concessionárias</strong>: quem possui capital migra para sistemas <strong>Off-Grid</strong> (isolados com baterias), abandonando a rede pública.
                        </p>

                        <p>
                            Aqui reside o perigo socioeconômico: ao "desbancarizar" a energia, a rede pública perde seus usuários de maior poder aquisitivo. O custo fixo de manutenção da malha elétrica não diminui; ele é apenas rateado entre os que permanecem. Quem são eles? A classe média baixa e os vulneráveis, que não possuem os <strong>R$ 26.000,00</strong> necessários para um sistema básico ou terreno para usinas <strong>UFV</strong>.
                        </p>

                        <p>
                            A tese de investimento em fundos como o <strong>SNEL11</strong> mostra que a energia solar é ultra-eficiente. Uma usina pequena (0,06 MWp) gera em um único dia o que uma residência média consome em um mês. Se temos a tecnologia, por que não a democratizamos? A resposta é política. Ao taxar o excedente, o governo cria uma dependência artificial.
                        </p>

                        <p>
                            O cenário para 2026 é cíclico e perverso: o governo aumenta impostos sobre o prosumidor, reduz a atratividade do investimento privado em renováveis e, para compensar a alta da tarifa causada pelo êxodo dos grandes consumidores, cria auxílios e subsídios para o pobre pagar a conta de luz. É a estatização da ineficiência: paga-se o imposto para receber o benefício, enquanto o lucro das concessionárias permanece blindado pelo contrato de concessão.
                        </p>

                        <p>
                            Precisamos de uma desoneração real e de linhas de crédito que permitam que a energia solar não seja um luxo, mas um <strong>utility</strong> básico. Se o discurso oficial é de sustentabilidade, a prática tributária deve refletir a urgência da transição energética, e não servir de âncora para modelos de negócios do século passado.
                        </p>
                    </div>

                    <footer style={styles.footer}>
                        <p><strong>&copy; 2026 União Jovem Notícias</strong></p>
                        <p>Análise por Lucas Souza | Curadoria Técnica de Infraestrutura e Energia</p>
                        <p style={{ marginTop: '10px', fontSize: '0.7rem' }}>Dados baseados nos relatórios da EPE e indicadores de mercado B3.</p>
                    </footer>
                </article>
            </section>
        </main>
    );
}

export default Home;