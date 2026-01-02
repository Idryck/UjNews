import React from 'react';

/**
 * Componente Home: Versão corrigida e otimizada.
 * Foco em semântica HTML5, acessibilidade e precisão técnica sobre o setor elétrico.
 */
function Home() {
    return (
        <main className="news-container">
            {/* Seção de Cabeçalho: Identidade Visual e Editorial */}
            <header className="main-header">
                <h1 className="main-title">União Jovem Notícias</h1>
                <p className="tagline">
                    Análise técnica sobre o panorama energético e os impactos socioeconômicos para a juventude brasileira.
                </p>
            </header>

            {/* Navegação Interna: Acessibilidade melhorada */}
            <nav className="main-navigation" aria-label="Menu de matérias">
                <h2 className="nav-title">Conheça nossas matérias</h2>
                <ul className="nav-list"> 
                    <li className="nav-item">
                        <a href="veiculos" className="nav-link">O Sócio Invisível</a>
                    </li>
                    <li className="nav-item">
                        <a href="energia" className="nav-link">Tributação Fotovoltaica: O Impacto no Setor de GD</a>
                    </li>
                </ul>
            </nav>

            {/* Conteúdo Principal: Artigo Técnico */}
            <section className="article-content">
                <article>
                    <header className="article-header">
                        <h2>Imposto Solar: Desafios da Geração Distribuída e Viabilidade do Investimento</h2>
                    </header>

                    <div className="article-body">
                        <p>
                            O Brasil ostenta uma das matrizes energéticas mais sustentáveis do planeta, contudo, o custo da tarifa de energia elétrica permanece entre os mais onerosos para o consumidor final. 
                            A transição para a fonte fotovoltaica é a resposta técnica para a independência energética, mas novas barreiras regulatórias impõem desafios ao <strong>ROI (Retorno sobre Investimento)</strong> do jovem brasileiro.
                        </p>

                        <p>
                            Geograficamente, o país é um polo de alta irradiação solar, com ciclos constantes e climas diversificados, condições ideais para fontes renováveis. Atualmente, 88% da nossa matriz é proveniente de fontes limpas (hidrelétricas, solar, eólica e biomassa). Desse total, a energia solar e eólica já representam 23,7% da capacidade instalada. Segundo dados da <strong>EPE (Empresa de Pesquisa Energética)</strong>, a geração solar cresceu expressivos 39% em 2024, reflexo da queda nos custos de insumos e avanços em semicondutores.
                        </p>

                        <p>
                            A grande controvérsia reside no sistema <strong>On-Grid</strong> (conectado à rede de distribuição). Com o Marco Legal da Geração Distribuída (Lei 14.300), o chamado "Imposto Solar" — que na verdade é a incidência de encargos sobre o uso do <strong>Fio B</strong> da distribuidora — escalou significativamente. Em 2025, o impacto sobre o excedente injetado era de 45%; em 2026, esse valor atinge o patamar de 60%.
                        </p>

                        <p>
                            Isso significa que o excedente energético injetado na rede para gerar créditos sofre uma depreciação maior. Embora o sistema continue gerando economia na fatura, o <strong>Payback</strong> (prazo de retorno do capital) foi estendido, o que pode desestimular novos investimentos em microgeração e prejudicar a descentralização energética nacional.
                        </p>

       energia
                        <p>
                            A solução passa por políticas públicas que fomentem subsídios e linhas de crédito acessíveis, reduzindo a carga tributária sobre a microgeração. Penalizar o prosumidor (produtor + consumidor) favorece apenas o lucro de grandes concessionárias.
                            Eu sou investidor de empresas energeticas como <strong>Taesa</strong> e <strong>Cemig</strong>, e sei quanto eles lucram com geração e transporte de energia, me beneficio hoje com isso, mas convenhamos, se o país não quer deixar o pequeno crescer vamos caçar junto aos peixes grandes.
                        </p>

                        <p>
                            Se o compromisso do governo atual é com a sustentabilidade e o povo a desoneração da energia renovável deveria ser prioridade. Sem incentivos, o cenário aponta para uma migração em massa para sistemas <strong>Off-Grid</strong> (isolados da rede), deixando a infraestrutura pública ainda mais custosa para quem não tem capital para investir.
                            e quem tem dinheiro para investir em energia solar, vai deixar um buraco no lucro da consessionária, que vai repassar esse custo para o consumidor final, ou seja, quem não tem dinheiro para investir em energia própria.
                            tudo recaíra sobre a classe média baixa e os pobres, e assim o governo irá aumentar seus impostos e te dar auxilio para pagar sua energia... uma verdadeira cilada.
                            
                        
                        </p>
                    </div>

                  <footer style={{ marginTop: '50px', textAlign: 'center', fontSize: '0.8rem' }}>
                    <p>&copy; 2025 União Jovem Notícias - Desenvolvido por Lucas Souza</p>
                   </footer>   
                </article>
            </section>
        </main>
    );
}

export default Home;