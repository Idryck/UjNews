import React from 'react';


function Home() {
    return (
        <main className="news-container">
            {/* Cabeçalho Fixo da Home Page */}
            <header className="main-header">
                <h1>União Jovem Notícias.</h1>
                <p className="tagline">Notícias públicas que impactam a vida dos jovens brasileiros!</p>
            </header>

             <nav className="main-navigation" aria-label="Menu de matérias">
                <h2 className="nav-title">Conheça nossas matérias</h2>
                <ul className="nav-list"> 
                    <li className="nav-item">
                        <a href="/artigos/socio-invisivel" className="nav-link">O Sócio Invisível</a>
                    </li>
                    <li className="nav-item">
                        <a href="/artigos/energia-solar" className="nav-link">Tributação Fotovoltaica: O Impacto no Setor de GD</a>
                    </li>
                </ul>
            </nav>
            <footer style={{ marginTop: '50px', textAlign: 'center', fontSize: '0.8rem' }}>
                <p>&copy; 2025 União Jovem Notícias - Desenvolvido por Lucas Souza</p>
            </footer>
            </main>
  
    );
    
}

export default Home;