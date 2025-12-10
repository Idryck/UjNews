import React from 'react';


function Home() {
    return (
        <main className="news-container">
       


            {/* Cabeçalho Fixo da Home Page */}
            <header className="main-header">
                <h1>União Jovem Notícias.</h1>
                <p className="tagline">Notícias públicas que impactam a vida dos jovens brasileiros!</p>
            </header>
   <article className="news-article">
                {/* Seção Principal da Matéria */}
          <section>
                    <header className="article-header">
                        <h2>O Sócio Invisível</h2>
                    </header>
                    
                    <p>
                        Quando olhamos para um carro popular de entrada no Brasil, hoje beirando os R$ 70.000 ou R$ 80.000, 
                        não estamos olhando apenas para o custo de metal, plástico, borracha e engenharia. 
                        <strong>Estamos olhando para um dos sistemas de arrecadação mais agressivos do planeta.</strong>
                    </p>

                    <p>
                        O sentimento de que a juventude está sendo "expulsa" do mercado de consumo não é vitimismo; é matemática tributária.
                    </p>

                    <p>
                        Para entender a profundidade do abismo entre a juventude atual e o veículo zero, precisamos dissecar a anomalia tributária brasileira: 
                        o Estado brasileiro é o "sócio majoritário" de qualquer veículo zero quilômetro.
                    </p>

                    {/* Bloco de Apresentação do Autor - Estilizado como uma nota */}
                    <p className="author-intro">
                        <em>
                            Bom! Prazer, meu nome é <strong>Lucas Souza</strong>, formado em Gestão de TI e indignado com a situação atual do Brasil. 
                            E esse é o primeiro tema que o União Jovem irá tratar.
                        </em>
                    </p>

                    <hr />

                    <h3>A Engenharia do Custo: Um "Sócio" de 50%</h3>
                    
                    <p>
                        No Brasil, o governo é o sócio majoritário da indústria automobilística, mas sem assumir nenhum risco de produção. 
                        Enquanto em países como os Estados Unidos a carga tributária sobre um veículo gira em torno de 6% a 10% (cobrados no final da venda) 
                        e no Japão cerca de 9%, no Brasil a mordida pode variar de <strong>30% a 48,6%</strong> do valor final do carro, dependendo da motorização e categoria.
                    </p>

                    <p>
                        Isso significa que, em um carro popular de R$ 80.000,00, aproximadamente 
                        R$ 35.000,00 a R$ 40.000,00 não pagam por tecnologia, nem por segurança, nem pelo lucro da montadora. 
                        Esse valor é puramente tributo.
                    </p>

                    {/* Citação em Destaque (Blockquote) em vez de Code Block */}
                    <blockquote className="highlight-quote">
                        "Basicamente, o brasileiro trabalha meses para pagar
                        o carro que vai dirigir, e outros meses para pagar
                        o carro imaginário que o governo embolsou"
                    </blockquote>

                    <p>
                        O problema é mais profundo do que a porcentagem final. O sistema tributário brasileiro opera em "cascata". 
                        Antes do carro ficar pronto, a montadora paga impostos sobre a energia elétrica da fábrica, sobre o aço comprado da siderúrgica (que já pagou imposto), 
                        sobre o pneu (que já pagou imposto sobre a borracha). Quando o carro chega na concessionária, incide-se imposto novamente sobre o valor total acumulado.
                    </p>
                    
                    <p>
                        Ou seja: nós pagamos imposto sobre o imposto que já foi pago nas etapas anteriores. 
                        Isso infla o preço de custo de uma maneira que torna impossível para a indústria oferecer um produto barato, mesmo se ela quisesse sacrificar sua margem de lucro.
                    </p>

                    <p>
                        E já que estamos falando de impostos, você conhece os impostos que são pagos?
                    </p>

                    {/* Lista Semântica Correta */}
                    <ul className="tax-list">
                        <li>
                            <strong>IPI (Imposto sobre Produtos Industrializados):</strong> A taxa base que varia conforme a potência do motor.
                        </li>
                        <li>
                            <strong>ICMS (Imposto sobre Circulação de Mercadorias e Serviços):</strong> O peso estadual, que incide sobre o valor já inflado pelo IPI.
                        </li>
                        <li>
                            <strong>PIS/COFINS:</strong> Contribuições federais que incidem sobre o faturamento.
                        </li>
                    </ul>

                    <p>
                        Essa complexidade gera um custo operacional gigantesco apenas para calcular o quanto se deve pagar (o famoso "Custo Brasil"). 
                        Para o jovem que está entrando no mercado de trabalho, isso cria uma barreira de entrada intransponível: 
                        o salário de entrada não acompanhou a inflação desses impostos compostos.
                    </p>

                    <p>
                        Se pagássemos impostos de nível escandinavo e tivéssemos estradas alemãs ou transporte público suíço, a discussão seria outra. 
                        O ponto nevrálgico da frustração da nossa geração é que <strong>pagamos o carro mais caro do mundo para rodar nas piores estradas.</strong>
                    </p>

                    <p>
                        O imposto pago na compra do veículo (e depois o IPVA anual) não retorna em infraestrutura de qualidade. 
                        O jovem paga caro para ter o carro, paga caro para mantê-lo e ainda corre o risco de destruir a suspensão em uma cratera na via pública ou ter o bem roubado devido à insegurança pública. 
                        É um "perde-perde" financeiro constante.
                    </p>

               <section className="reflection-section">
                <h3>A Ilusão da Acessibilidade</h3>
                <p>
                    Sabendo disso, eu gostaria de convidar você a refletir: por que não fazemos uma reforma tributária agressiva para mudar isso? 
                    Você, que hoje tem seus 20 a 30 anos, está satisfeito com essa realidade?
                </p>
                <p>
                    Recentemente, vimos pautas como a do deputado Kim Kataguiri defendendo a facilitação da CNH e o fim da obrigatoriedade da autoescola. 
                    A iniciativa é válida, <strong>entretanto, de que adianta ter uma CNH na carteira se você não consegue comprar o veículo para usar na garagem?</strong>
                </p>
                <p>
                    Se você, assim como eu, vem de família humilde, sabe que não ganhará um carro de presente. 
                    E sejamos realistas: seu tio ou tia que possui um veículo provavelmente vai "bancar a dificuldade" para deixar você praticar. 
                    Não é por maldade, é pelo custo: o medo de um arranhão ou uma peça quebrada é real, pois o conserto é caríssimo e o risco de ficarem a pé é alto.
                </p>
            </section>

            <section className="action-plan">
                <h3>Como Mudamos o Jogo?</h3>
                <p>
                    Infelizmente, para alterarmos esse cenário, é necessário um processo complexo que envolve mudanças na legislação tributária. 
                    Isso não é algo que um indivíduo consiga fazer sozinho, pois depende de ações a nível governamental, envolvendo o Poder Legislativo e o Executivo.
                </p>
                
                <p>Mas os caminhos hoje disponíveis são claros:</p>
                
                <ul className="action-list">
                    <li>
                        <strong>1. Participação Política e Voto Consciente:</strong> 
                        Eleger representantes (deputados estaduais, federais e senadores) que tenham propostas alinhadas ao nosso benefício. 
                        Precisamos de gente que discuta a sério a reforma tributária e a redução de impostos sobre consumo (que, como vimos, é o vilão que infla o valor de tudo).
                    </li>
                    
                    <li>
                        <strong>2. Apoio a Projetos de Lei:</strong> 
                        Acompanhar e apoiar ativamente projetos de lei que tramitam nas assembleias e no Congresso Nacional visando a redução ou simplificação dos impostos veiculares (IPI, ICMS, IPVA e PIS/Cofins).
                    </li>
                    
                    <li>
                        <strong>3. O Poder da Sociedade Civil Organizada:</strong> 
                        Sinceramente, as outras opções são complicadas (a falta de educação política no Brasil muitas vezes favorece a reeleição de quem não nos representa). 
                        Aqui entra o "4º Poder": a pressão pública. É hora de nos juntarmos a associações de classe e grupos de consumidores que fazem lobby e pressão real junto ao governo.
                    </li>
                    
                    <li>
                        <strong>4. Manifestação Pública e Pressão Digital:</strong> 
                        Participar de movimentos sociais e assinar petições públicas. A internet tirou as barreiras físicas da manifestação; precisamos usar isso a nosso favor.
                    </li>
                </ul>
            </section>

            <section className="call-to-action">
                <div className="manifesto-box">
                    <h4>O Nascimento do União Jovem</h4>
                    <p>
                        Nesse momento, nós nascemos para dar voz a você, à sua família e aos seus amigos. 
                        Precisamos de alguém que fale em nome dos jovens, precisamos criar uma "Frente Jovem" para reivindicar o que realmente importa.
                    </p>
                    
                    <p>
                        <strong>Pense comigo:</strong> se crescermos a ponto de chegar em um deputado e dizer: 
                        <em>"Vou abrir uma live agora com uma estimativa de 100.000 jovens brasileiros assistindo. Se você não nos ouvir, esses 100.000 votos e a influência deles irão para o seu concorrente."</em>
                    </p>
                    
                    <p>
                        Essa pressão direta no Congresso funciona. Se, assim como eu, você acredita que podemos moldar o Brasil juntos, te convido a ser um elo dessa revolução. 
                        Vamos juntos construir o Brasil que nós queremos — e que nós merecemos.
                    </p>
                </div>
            </section>
                </section>
            </article>

            {/* Rodapé do site */}
            <footer style={{ marginTop: '50px', textAlign: 'center', fontSize: '0.8rem' }}>
                <p>&copy; 2025 União Jovem Notícias - Desenvolvido por Lucas Souza</p>
            </footer>
        </main>
    );
}

export default Home;