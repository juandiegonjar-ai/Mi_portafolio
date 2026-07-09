/* =============================================================
   manifest.js — DATOS EDITABLES DE LA MARCA
   -------------------------------------------------------------
   👉  Este es el ÚNICO archivo que necesitas tocar para cambiar
       tu correo, tus redes, tus proyectos y los textos del
       selector de estilos. No hace falta saber programar:
       edita solo lo que está entre comillas.
   ============================================================= */
(function () {
  "use strict";

  window.__BRAND__ = {
    /* ---- Identidad --------------------------------------- */
    name: "Juan Diego González",          // 👈 tu nombre o el de tu estudio
    initials: "JD",                        // 👈 monograma para el logo
    role: "Diseño & desarrollo web a medida",

    /* ---- Contacto ---------------------------------------- */
    // 👇 CAMBIA aquí tu correo real. El asunto se prellena solo.
    email: "Juandiegonjar@gmail.com",
    mailSubject: "Quiero hacer una web personalizada",

    /* ---- Redes / enlaces --------------------------------- */
    // 👇 Reemplaza / añade los enlaces que quieras mostrar.
    links: [
      { label: "Upwork", href: "https://www.upwork.com/freelancers/~01351fd2f03bbc7c26?mp_source=share" }
      // { label: "Instagram", href: "https://instagram.com/tu-usuario" },
      // { label: "LinkedIn",  href: "https://linkedin.com/in/tu-usuario" },
    ],

    /* ---- Nombres de los estilos del SELECTOR EN VIVO -----
       Ajusta los nombres/descripciones a los estilos que tú
       ofreces de verdad. El "id" debe coincidir con el que
       aparece en index.html (data-style-btn) y en styles.css
       ([data-style="..."]).                                   */
    styles: [
      {
        id: "minimal",
        label: "Minimalista",
        desc: "Espacio, silencio y foco. Todo lo que sobra, fuera.",
        domain: "estudio-mave.com",
        brand: "MAVE",
        nav: ["Estudio", "Trabajo", "Contacto"],
        eyebrow: "Arquitectura de interiores",
        title: "Menos, pero mejor.",
        body: "Diseñamos espacios que respiran. Cada línea tiene una razón de ser.",
        cta: "Ver proyectos",
        tags: ["Precisión", "Calma", "Detalle"]
      },
      {
        id: "editorial",
        label: "Editorial",
        desc: "Tipografía con carácter, ritmo de revista, calidez.",
        domain: "casa-verano.com",
        brand: "Casa Verano",
        nav: ["Historia", "Carta", "Reservar"],
        eyebrow: "Cocina de temporada",
        title: "Sabores que cuentan una historia.",
        body: "Producto local, fuego lento y una sala pensada al detalle.",
        cta: "Reservar mesa",
        tags: ["Cálido", "Narrativo", "Artesanal"]
      },
      {
        id: "corporate",
        label: "Corporativo",
        desc: "Confianza, orden y claridad. Serio sin ser aburrido.",
        domain: "novabank.io",
        brand: "Nova",
        nav: ["Producto", "Precios", "Empresa"],
        eyebrow: "Plataforma financiera",
        title: "Tus finanzas, bajo control.",
        body: "Infraestructura segura y clara para equipos que crecen rápido.",
        cta: "Solicitar demo",
        tags: ["Fiable", "Claro", "Escalable"]
      },
      {
        id: "bold",
        label: "Audaz / Neón",
        desc: "Alto contraste, energía y actitud. Para marcas sin miedo.",
        domain: "pulse-fest.live",
        brand: "PULSE",
        nav: ["Line-up", "Entradas", "Info"],
        eyebrow: "Festival · 2026",
        title: "Sube el volumen.",
        body: "Tres días, cuarenta artistas y una ciudad que no duerme.",
        cta: "Comprar entradas",
        tags: ["Vibrante", "Nocturno", "Directo"]
      },
      {
        id: "organic",
        label: "Orgánico",
        desc: "Formas suaves, tonos tierra y cercanía humana.",
        domain: "raiz-skincare.com",
        brand: "Raíz",
        nav: ["Ritual", "Tienda", "Nosotros"],
        eyebrow: "Cuidado natural",
        title: "La piel también respira.",
        body: "Fórmulas honestas, ingredientes que reconoces y cero prisa.",
        cta: "Descubrir ritual",
        tags: ["Natural", "Suave", "Consciente"]
      }
    ],

    /* ---- PROYECTOS REALES --------------------------------
       Las tarjetas están escritas directamente en index.html
       (sección #trabajos). Esta lista es la referencia de datos:
       si añades un proyecto nuevo, duplica una tarjeta en el HTML,
       genera su captura 1200x800 en capturas/ y añádelo aquí.    */
    projects: [
      { n: "01", title: "Plinth",              sector: "Estudio de arquitectura", style: "Editorial oscuro minimalista", url: "https://plinth-ivory.vercel.app/",              image: "capturas/plinth.jpg" },
      { n: "02", title: "Nórdika",             sector: "Reformas integrales",     style: "Nórdico cálido y luminoso",   url: "https://nordika-web.vercel.app/",              image: "capturas/nordika.jpg" },
      { n: "03", title: "Neonika",             sector: "Iluminación LED",         style: "Audaz / neón",                url: "https://neonika.vercel.app/",                  image: "capturas/neonika.jpg" },
      { n: "04", title: "Barbería La Familia", sector: "Barbería",                style: "Clásico con carácter",        url: "https://barberia-la-familia.vercel.app/",      image: "capturas/barberia-la-familia.jpg" },
      { n: "05", title: "La Brasa",            sector: "Hamburguesería",          style: "Audaz, fuego y contraste",    url: "https://la-brasa-drab.vercel.app/",            image: "capturas/la-brasa.jpg" }
    ]
  };
})();
