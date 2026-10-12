import { useState } from "react";
import "./App.css";

const photos = {
  buckets: "./imagenes/baldes-centrifugos.png",
  aerosols: "./imagenes/aerosoles-sweet-sensation.png",
  diffusers: "./imagenes/difusores-aire-pur.png",
};

const fiveLiterProducts = [
  ["Cloro 100% x 5 litros", "$4.500"],
  ["Lavandina concentrada x 5 litros", "$3.500"],
  ["Desodorante para pisos x 5 litros", "$3.500"],
  ["Suavizante Comfort x 5 litros", "$4.000"],
  ["Suavizante Vivere Premium x 5 litros", "$6.500"],
  ["Detergente Magistral lavavajillas x 5 litros", "$5.500"],
  ["Perfuminas para ropa x 1 litro", "$4.500"],
  ["Lavandina ropa blanca y color x 5 litros", "$7.500"],
  ["Acaroína Gorrión x 450 g", "$2.000"],
  ["Acaroína Gorrión x ½ litro", "$3.500"],
  ["Bolsón de papel higiénico (30 x 100)", "$30.500"],
  ["Rollo de papel higiénico x 100 metros", "$1.550"],
  ["Bolsón de rollo de cocina (8 x 300)", "$29.500"],
  ["Rollo de cocina x 300 metros", "$2.500"],
  ["Cera concentrada autobrillo acrílica x 1 litro (roja o negra)", "$3.600"],
  ["Cera concentrada autobrillo acrílica x 1 litro (incolora)", "$4.600"],
  ["Limpiador Ciff cremoso x 5 litros", "$9.500"],
  ["Lavandina en gel x 5 litros", "$4.600"],
  ["Aerosol Ceramicol lustra muebles", "$4.700"],
  ["Rejilla Pavilo doble para cocina", "$600"],
  ["Valerina (paño amarillo)", "$500"],
  ["Escoba Nahuel", "$3.000"],
  ["Cabo", "$1.200"],
  ["Trapo de piso costurado de consorcio Mr. Trapo", "$800"],
  ["Trapo de piso rayado", "$800"],
  ["Secador de piso grande", "$2.600"],
  ["Secador de piso chico", "$2.300"],
  ["Desengrasante con amoníaco x 5 litros", "$5.000"],
  ["Jabón líquido Ace, Ariel o Skip x 5 litros", "$4.500"],
  ["Jabón para manos x 5 litros", "$4.500"],
  ["Pastillas de naftalina (paquete cerrado)", "$6.500"],
  ["Quita sarro rojo x 5 litros", "$5.000"],
  ["Shampoo y crema de enjuague x 5 litros", "$7.000"],
  ["Boya hongo para pileta", "$2.500"],
  ["Boya hongo chica para pileta", "$2.000"],
  ["Boya satélite para pileta", "$5.400"],
  ["Boya satélite chica para pileta", "$3.000"],
];

const twoLiterProducts = [
  ["Cloro 100% x 2 litros", "$2.600"],
  ["Lavandina concentrada x 2 litros", "$1.600"],
  ["Desodorante para pisos x 2 litros", "$1.600"],
  ["Jabón líquido Ace, Ariel o Skip x 2 litros", "$1.900"],
  ["Detergente Magistral lavavajillas x 2 litros", "$1.950"],
  ["Suavizante Comfort x 2 litros", "$2.050"],
  ["Desengrasante con amoníaco x 2 litros", "$3.700"],
  ["Jabón para manos x 2 litros", "$3.700"],
  ["Lavandina en gel x 2 litros", "$2.500"],
];

const slides = [
  { src: photos.buckets, alt: "Baldes centrífugos en varios colores" },
  { src: photos.aerosols, alt: "Aerosoles aromatizantes Sweet Sensation" },
  { src: photos.diffusers, alt: "Difusores automáticos Aire Pur" },
];

function PriceTable({ title, products }) {
  return (
    <section className="price-section">
      <h3>{title}</h3>
      <div className="table-wrap">
        <table>
          <thead><tr><th>Producto</th><th>Precio</th></tr></thead>
          <tbody>
            {products.map(([name, price]) => (
              <tr key={name}><td>{name}</td><td className="price">{price}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default function App() {
  const [slide, setSlide] = useState(0);
  const currentSlide = slides[slide];
  const whatsappUrl = "https://wa.me/549XXXXXXXXXX?text=Hola%2C%20quisiera%20consultar%20por%20los%20productos";

  return (
    <>
      <nav className="navbar">
        <a className="brand" href="#inicio" aria-label="Lhouses"><span>L</span>houses</a>
        <div className="nav-links"><a href="#catalogo">Catálogo</a><a href="#nosotros">Nosotros</a><a href="#contacto">Contacto</a></div>
      </nav>

      <main>
        <header className="hero" id="inicio">
          <div className="container">
            <p className="eyebrow">Pablo Podestá · Loma Hermosa · Martín Coronado</p>
            <h1>Todo lo que necesitás para una limpieza impecable.</h1>
            <p>Fabricamos y distribuimos químicos y productos de limpieza para el hogar, comercios y profesionales.</p>
            <a className="button" href="#catalogo">Ver lista de precios <span aria-hidden="true">→</span></a>
          </div>
        </header>

        <section className="container carousel" aria-label="Productos destacados">
          <div className="slide-image"><img src={currentSlide.src} alt={currentSlide.alt} /></div>
          <button className="slide-control prev" type="button" onClick={() => setSlide((slide + slides.length - 1) % slides.length)} aria-label="Imagen anterior">‹</button>
          <button className="slide-control next" type="button" onClick={() => setSlide((slide + 1) % slides.length)} aria-label="Imagen siguiente">›</button>
          <div className="slide-dots">{slides.map((item, index) => <button key={item.src} className={index === slide ? "dot active" : "dot"} onClick={() => setSlide(index)} aria-label={`Ver imagen ${index + 1}`} />)}</div>
        </section>

        <section className="section" id="catalogo">
          <div className="container">
            <div className="section-heading"><p className="eyebrow">Lista de precios</p><h2>Productos de limpieza</h2><p>Precios expresados en pesos argentinos.</p></div>
            <div className="featured-grid">
              <article className="featured-card"><img src={photos.aerosols} alt="Aerosoles aromatizantes Sweet Sensation" loading="lazy" /><div><h3>Fragancias ambientales MaxArome</h3><p>$5.000 c/u · Combo x 6 unidades: $15.000</p><a className="text-link" href={whatsappUrl} target="_blank" rel="noreferrer">Consultar por WhatsApp</a></div></article>
              <article className="featured-card"><img src={photos.diffusers} alt="Difusores automáticos de aerosoles Aire Pur" loading="lazy" /><div><h3>Difusores automáticos Aire Pur</h3><p>Consultá disponibilidad de modelos y repuestos.</p><a className="text-link" href={whatsappUrl} target="_blank" rel="noreferrer">Consultar por WhatsApp</a></div></article>
              <article className="featured-card"><img src={photos.buckets} alt="Baldes centrífugos en varios colores" loading="lazy" /><div><h3>Baldes centrífugos</h3><p>Modelos y colores sujetos a disponibilidad.</p><a className="text-link" href={whatsappUrl} target="_blank" rel="noreferrer">Consultar por WhatsApp</a></div></article>
            </div>
            <PriceTable title="Productos y artículos" products={fiveLiterProducts} />
            <PriceTable title="Artículos x 2 litros" products={twoLiterProducts} />
            <p className="notice">Precios y disponibilidad sujetos a cambios. Consultá antes de realizar tu pedido.</p>
          </div>
        </section>

        <section className="section about" id="nosotros"><div className="container about-box"><p className="eyebrow">Quiénes somos</p><h2>Limpieza y calidad, cerca tuyo.</h2><p>En Lhouses nos dedicamos a la fabricación y distribución de químicos y productos de limpieza para hogares, comercios y profesionales.</p></div></section>
        <section className="section contact" id="contacto"><div className="container"><p className="eyebrow">Estamos para ayudarte</p><h2>¿Buscás un producto?</h2><p>Escribinos y te ayudamos con tu consulta.</p><a className="button" href={whatsappUrl} target="_blank" rel="noreferrer">Contactar por WhatsApp</a></div></section>
      </main>
      <footer>© {new Date().getFullYear()} Lhouses. Todos los derechos reservados.</footer>
    </>
  );
}
