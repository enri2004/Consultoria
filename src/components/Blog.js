import React from "react";
import Menuvista from "../layout/MenuVista";
import "../style/Blog.css";

const posts = [
  {
    category: "Estrategia",
    title: "Conviértete en una empresa más fuerte y eficiente",
    description:
      "Descubre cómo una planificación clara y decisiones basadas en datos pueden transformar tu operación y acelerar tus resultados.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
  },
  {
    category: "Digital",
    title: "Cómo aprovechar la tecnología para mejorar tu negocio",
    description:
      "Conoce herramientas y procesos que te permiten optimizar tiempos, conectar equipos y crear mejor experiencia para tus clientes.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
  },
  {
    category: "Productos",
    title: "Foco en la innovación para crear experiencias reales",
    description:
      "Las empresas más competitivas entienden que cada detalle importa cuando diseñan una propuesta que genere confianza y valor.",
    image:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=900&q=80",
  },
  {
    category: "Marketing",
    title: "Estrategias de contenido que conectan y convierten",
    description:
      "Un enfoque claro de comunicación ayuda a convertir mensajes en oportunidades y fortalecer vínculos con tu audiencia.",
    image:
      "https://images.unsplash.com/photo-1522204523234-8729aa6e3a8d?auto=format&fit=crop&w=900&q=80",
  },
];

export default function Blog() {
  return (
    <div className="blog-page">
      <div className="blog-label">BLOG</div>

      <main className="blog-frame">
        <Menuvista />
        <section className="blog-content">
          <div className="blog-heading">
            <h1>BLOG</h1>
            <p>Recuerda a veces la mejor estrategia es compartir conocimiento.</p>
          </div>

          <div className="blog-toolbar">
            <label className="blog-search" aria-label="Buscar en el blog">
              <span className="search-icon">⌕</span>
              <input type="text" placeholder="Buscar" />
            </label>
            <button type="button" className="blog-submit">Enviar</button>
          </div>

          <div className="blog-filters">
            <div className="filter-item">
              <label htmlFor="categoria">Categoría</label>
              <select id="categoria" defaultValue="">
                <option value="" disabled>
                  Selecciona
                </option>
                <option value="estrategia">Estrategia</option>
                <option value="digital">Digital</option>
                <option value="productos">Productos</option>
                <option value="marketing">Marketing</option>
              </select>
            </div>

            <div className="filter-item">
              <label htmlFor="filtro">Filtrar</label>
              <select id="filtro" defaultValue="">
                <option value="" disabled>
                  Ochoer
                </option>
                <option value="reciente">Más reciente</option>
                <option value="popular">Más popular</option>
                <option value="destacado">Destacados</option>
              </select>
            </div>
          </div>

          <div className="blog-grid">
            {posts.map((post) => (
              <article className="blog-card" key={post.title}>
                <img src={post.image} alt={post.title} />
                <div className="blog-card-body">
                  <span className="blog-category">{post.category}</span>
                  <h3>{post.title}</h3>
                  <p>{post.description}</p>
                  <button type="button">Leer más</button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
