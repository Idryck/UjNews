import React from 'react';
import styles from '/style/layout.module.css';

/**
 * Componente Layout: Define a estrutura global que se repete em todas as páginas.
 * O {children} é onde o conteúdo específico de cada página será injetado.
 */
export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <header className={styles.mainHeader}>
        <h1>União Jovem Notícias</h1>
        <p className={styles.tagline}>Notícias públicas que impactam a vida dos jovens brasileiros!</p>
      </header>

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

      {/* Aqui entra o conteúdo da página Home ou de qualquer outra página */}
      <main>{children}</main>

      <footer className={styles.mainFooter}>
        <p>&copy; 2026 União Jovem Notícias - Desenvolvido por Lucas Souza</p>
        <p style={{ fontSize: '0.7rem', marginTop: '5px' }}>Análise Técnica de Infraestrutura e Energia</p>
      </footer>
    </div>
  );
}