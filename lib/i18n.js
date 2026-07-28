/* =============================================================
   i18n.js — DICCIONARIO DE IDIOMAS (Español / Inglés)
   -------------------------------------------------------------
   👉  Para editar un texto: cámbialo en `es` (español) y en `en`
       (inglés). Las claves (lo de la izquierda) deben ser iguales
       en ambos idiomas. El HTML usa data-i18n="clave".
       Los textos del selector de estilos en inglés viven en
       en.styles (los de español están en lib/manifest.js).
   ============================================================= */
(function () {
  "use strict";

  window.__I18N__ = {
    /* =======================  ESPAÑOL  ======================= */
    es: {
      "meta.title": "Juan Diego González — Diseño y desarrollo web a medida",
      "meta.desc": "Diseño y programo webs 100% a medida. Cada proyecto se aborda desde cero, sin plantillas, pensado para tu marca y tus objetivos.",
      "skip": "Saltar al contacto",

      "nav.brandAria": "Inicio",
      "nav.aria": "Navegación principal",
      "nav.work": "Cómo trabajo",
      "nav.styles": "Estilos",
      "nav.works": "Trabajos",
      "nav.trust": "Confianza",
      "nav.cta": "Hablemos",
      "lang.aria": "Idioma",

      "hero.kicker": "Diseño & desarrollo web · Hecho a medida",
      "hero.title1": "Construyo webs a medida",
      "hero.title2": "para marcas que no quieren",
      "hero.title3": 'parecerse <em>a</em> <span class="morph" data-morph aria-label="ninguna otra">ninguna otra</span>.',
      "hero.sub": "Soy Juan Diego. Diseño y programo sitios web pensados desde cero para tu marca: nada de plantillas recicladas, nada de webs que ya has visto mil veces.",
      "hero.cta1": "Hablemos de tu proyecto",
      "hero.cta2": "Ver mis estilos en vivo",
      "hero.foot1": "Disponible para nuevos proyectos",
      "hero.foot2": "Trabajo directo, sin intermediarios",
      "hero.scroll": "Scroll",
      "hero.scrollAria": "Bajar a la siguiente sección",

      "phil.label": "Cómo trabajo",
      "phil.portraitAlt": "Foto de Juan Diego González, diseñador web",
      "phil.caption": "Diseño tu web como si la marca <em>fuera mía</em> — y te la devuelvo mejor.",
      "phil.h2": "Cada proyecto empieza en una página en blanco.",
      "phil.p1": "No reutilizo plantillas ni parto de un tema comprado. Antes de escribir una sola línea de código, entiendo tu marca, a quién te diriges y qué necesitas conseguir. A partir de ahí diseño una web que solo tiene sentido para ti.",
      "phil.p2": "Me tomo cada encargo como si fuera el único. Cuido la tipografía, el ritmo, los detalles de interacción y el rendimiento, porque son esas cosas —las que casi nadie nombra— las que hacen que una web se sienta profesional y transmita confianza desde el primer segundo.",
      "phil.step1": "Escucho tu marca y tus objetivos",
      "phil.step2": "Diseño una dirección única para ti",
      "phil.step3": "Desarrollo a medida, cuidando cada detalle",
      "phil.step4": "Te acompaño después de la entrega",

      "styles.h2": "Un mismo oficio, muchos lenguajes.",
      "styles.intro": "No hago siempre la misma web. Pulsa cada estilo y mira cómo cambia por completo la misma página —tipografía, color, ritmo y personalidad— sin recargar nada. Esto es, en pequeño, lo que puedo hacer con tu marca.",
      "styles.live": "EN VIVO",
      "styles.tabsAria": "Selector de estilos",
      "styles.note": "Y esto es solo una muestra. Tu web no sería ninguna de estas: sería la tuya.",

      "works.h2": "Trabajos seleccionados.",
      "works.overlay": "Ver proyecto en vivo →",
      "works.meta1": "Estudio de arquitectura · Editorial oscuro minimalista",
      "works.meta2": "Reformas integrales · Nórdico cálido y luminoso",
      "works.meta3": "Iluminación LED · Audaz / neón",
      "works.meta4": "Barbería · Clásico con carácter",
      "works.meta5": "Hamburguesería · Audaz, fuego y contraste",
      "works.meta6": "Estudio de fotografía · Editorial oscuro y elegante",
      "works.alt1": "Portada de la web de Plinth: estudio de arquitectura, fondo oscuro con fotografía arquitectónica",
      "works.alt2": "Portada de la web de Nórdika: reformas integrales, hero luminoso con interior nórdico",
      "works.alt3": "Portada de la web de Neonika: estudio de iluminación LED, fondo negro con neón azul y violeta",
      "works.alt4": "Portada de la web de Barbería La Familia: interior de barbería clásica con luz cálida y titular serif",
      "works.alt5": "Portada de la web de La Brasa: hamburguesería a la brasa, hero oscuro con fuego real",
      "works.alt6": "Portada de la web de FRAME Studio: estudio de fotografía, hero oscuro con cámara réflex y titular serif",

      "trust.label": "Por qué confiar en mí",
      "trust.h2": "Trabajas conmigo, no con una fábrica de webs.",
      "trust.t1": "Hablas siempre conmigo",
      "trust.p1": "De principio a fin tratas directamente con la persona que diseña y programa tu web. Sin intermediarios ni teléfonos rotos.",
      "trust.t2": "Cada proyecto, desde cero",
      "trust.p2": "Nada de plantillas reutilizadas. Tu web se piensa para tu marca y tus objetivos, no para encajar en un molde.",
      "trust.t3": "Entregas cuidadas al detalle",
      "trust.p3": "Tipografía, rendimiento, accesibilidad y esos pequeños detalles que hacen que una web se sienta seria y bien hecha.",
      "trust.t4": "Acompañamiento después",
      "trust.p4": "La entrega no es una despedida. Sigo disponible para ajustes, dudas y para que tu web crezca contigo.",

      "pricing.h2": "Cada presupuesto se piensa igual que cada web: a tu medida.",
      "pricing.p1": "No tengo una tabla de precios fija, y es a propósito. Una web sencilla y una plataforma completa no cuestan lo mismo, así que no tendría sentido cobrarlas igual. Preparo cada presupuesto según el alcance, la complejidad y lo que tu proyecto necesita de verdad.",
      "pricing.p2": "El primer paso es sencillo y sin compromiso: me cuentas tu idea, la miramos juntos y te doy una estimación clara y transparente. Sin letra pequeña.",
      "pricing.cta": "Pídeme un presupuesto",

      "sig.h2": "Cada web que entrego va firmada.",
      "sig.lead": "Como quien firma un cuadro al terminarlo, dejo mi sello al pie de cada sitio que hago. Un gesto pequeño, siempre el mismo, que dice —sin levantar la voz— que esto lo hice yo.",
      "sig.note": 'La encontrarás, mucho más discreta, <a href="#firma-pie">al pie de esta misma página <span aria-hidden="true">↓</span></a>.',
      "sig.markAria": "Firma personal de Juan Diego González — escríbeme",

      "contact.h2": "Hablemos de tu proyecto.",
      "contact.sub": "Cuéntame qué tienes en mente. Te respondo yo, en persona, y damos el primer paso para construir algo que sea solo tuyo.",
      "contact.cta": "Escríbeme un correo",
      "contact.key1": "Correo",
      "contact.key2": "Enlaces",

      "footer.legal": "Aviso legal",
      "footer.sig": "sitio diseñado por Juan Diego Gonzalez J.",
      "footer.sigAria": "Sitio diseñado por Juan Diego Gonzalez J.",

      "legal.kicker": "Información legal",
      "legal.title": "Aviso legal",
      "legal.dt1": "Titular",
      "legal.dt2": "Contacto",
      "legal.dt3": "Actividad",
      "legal.dd3": "Diseño y desarrollo web freelance.",
      "legal.body1": 'Esta web es propiedad de Juan Diego Gonzalez, dedicado a la actividad de diseño y desarrollo web bajo demanda. Para cualquier consulta puede contactar a través de <a href="mailto:juandiegonjar@gmail.com">juandiegonjar@gmail.com</a>. Los datos fiscales completos se facilitan durante el proceso de contratación del servicio.',
      "legal.body2": "Todo el contenido de este sitio (diseño, textos, código e imágenes, salvo capturas de proyectos de terceros) es propiedad de Juan Diego Gonzalez y no puede reproducirse total o parcialmente sin autorización previa.",
      "legal.body3": "Esta web se rige por la legislación española vigente.",
      "legal.closeAria": "Cerrar aviso legal"
    },

    /* =======================  ENGLISH  ======================= */
    en: {
      "meta.title": "Juan Diego González — Custom web design & development",
      "meta.desc": "I design and build 100% custom websites. Every project starts from scratch — no templates — shaped around your brand and your goals.",
      "skip": "Skip to contact",

      "nav.brandAria": "Home",
      "nav.aria": "Main navigation",
      "nav.work": "How I work",
      "nav.styles": "Styles",
      "nav.works": "Work",
      "nav.trust": "Trust",
      "nav.cta": "Let's talk",
      "lang.aria": "Language",

      "hero.kicker": "Web design & development · Made to measure",
      "hero.title1": "I build custom websites",
      "hero.title2": "for brands that refuse to",
      "hero.title3": 'look <em>like</em> <span class="morph" data-morph aria-label="anyone else">anyone else</span>.',
      "hero.sub": "I'm Juan Diego. I design and build websites from scratch for your brand — no recycled templates, none of those sites you've seen a thousand times.",
      "hero.cta1": "Let's talk about your project",
      "hero.cta2": "See my styles live",
      "hero.foot1": "Available for new projects",
      "hero.foot2": "Work directly with me, no middlemen",
      "hero.scroll": "Scroll",
      "hero.scrollAria": "Scroll to the next section",

      "phil.label": "How I work",
      "phil.portraitAlt": "Photo of Juan Diego González, web designer",
      "phil.caption": "I design your site as if the brand <em>were mine</em> — and hand it back better.",
      "phil.h2": "Every project starts on a blank page.",
      "phil.p1": "I don't reuse templates or start from a bought theme. Before I write a single line of code, I get to know your brand, who you're speaking to and what you need to achieve. From there I design a website that only makes sense for you.",
      "phil.p2": "I treat every project as if it were the only one. I sweat the typography, the pacing, the interaction details and the performance — because it's those things, the ones almost no one names, that make a site feel professional and earn trust from the very first second.",
      "phil.step1": "I listen to your brand and your goals",
      "phil.step2": "I design a direction that's yours alone",
      "phil.step3": "I build it custom, minding every detail",
      "phil.step4": "I stay with you after delivery",

      "styles.h2": "One craft, many voices.",
      "styles.intro": "I don't build the same site every time. Tap each style and watch the very same page transform completely — typography, colour, rhythm and personality — without reloading a thing. This is, in miniature, what I can do with your brand.",
      "styles.live": "LIVE",
      "styles.tabsAria": "Style selector",
      "styles.note": "And this is just a taste. Your site wouldn't be any of these — it would be yours.",

      "works.h2": "Selected work.",
      "works.overlay": "View live site →",
      "works.meta1": "Architecture studio · Dark minimalist editorial",
      "works.meta2": "Full home renovations · Warm, bright Nordic",
      "works.meta3": "LED lighting · Bold / neon",
      "works.meta4": "Barbershop · Classic with character",
      "works.meta5": "Burger joint · Bold, fire and contrast",
      "works.meta6": "Photography studio · Dark, elegant editorial",
      "works.alt1": "Home page of the Plinth website: architecture studio, dark background with architectural photography",
      "works.alt2": "Home page of the Nórdika website: full home renovations, bright hero with a Nordic interior",
      "works.alt3": "Home page of the Neonika website: LED lighting studio, black background with blue and violet neon",
      "works.alt4": "Home page of the Barbería La Familia website: classic barbershop interior with warm light and a serif headline",
      "works.alt5": "Home page of the La Brasa website: flame-grilled burger joint, dark hero with real fire",
      "works.alt6": "Home page of the FRAME Studio website: photography studio, dark hero with a DSLR camera and a serif headline",

      "trust.label": "Why trust me",
      "trust.h2": "You work with me, not a website factory.",
      "trust.t1": "You always talk to me",
      "trust.p1": "From start to finish you deal directly with the person who designs and builds your site. No middlemen, no broken telephone.",
      "trust.t2": "Every project, from scratch",
      "trust.p2": "No reused templates. Your site is thought out for your brand and your goals, not to fit a mould.",
      "trust.t3": "Delivery down to the detail",
      "trust.p3": "Typography, performance, accessibility and those small details that make a site feel serious and well made.",
      "trust.t4": "Support after launch",
      "trust.p4": "Delivery isn't goodbye. I stay available for tweaks, questions and to help your site grow with you.",

      "pricing.h2": "Every quote is built like every site: made to measure.",
      "pricing.p1": "I don't have a fixed price list, and that's on purpose. A simple site and a full platform don't cost the same, so it wouldn't make sense to charge for them the same way. I put together each quote based on the scope, the complexity and what your project genuinely needs.",
      "pricing.p2": "The first step is simple and no-obligation: you tell me your idea, we look at it together and I give you a clear, transparent estimate. No fine print.",
      "pricing.cta": "Ask me for a quote",

      "sig.h2": "Every site I deliver is signed.",
      "sig.lead": "Like signing a painting once it's finished, I leave my mark at the foot of every site I make. A small gesture, always the same, that says — without raising its voice — that I made this.",
      "sig.note": 'You\'ll find it, far more discreet, <a href="#firma-pie">at the foot of this very page <span aria-hidden="true">↓</span></a>.',
      "sig.markAria": "Juan Diego González's personal signature — email me",

      "contact.h2": "Let's talk about your project.",
      "contact.sub": "Tell me what you have in mind. I'll reply personally, and together we'll take the first step toward building something that's yours alone.",
      "contact.cta": "Send me an email",
      "contact.key1": "Email",
      "contact.key2": "Links",

      "footer.legal": "Legal notice",
      "footer.sig": "site designed by Juan Diego Gonzalez J.",
      "footer.sigAria": "Site designed by Juan Diego Gonzalez J.",

      "legal.kicker": "Legal information",
      "legal.title": "Legal notice",
      "legal.dt1": "Owner",
      "legal.dt2": "Contact",
      "legal.dt3": "Activity",
      "legal.dd3": "Freelance web design & development.",
      "legal.body1": 'This website is owned by Juan Diego Gonzalez, whose activity is on-demand web design and development. For any enquiry you can get in touch at <a href="mailto:juandiegonjar@gmail.com">juandiegonjar@gmail.com</a>. Full tax details are provided during the service contracting process.',
      "legal.body2": "All content on this site (design, copy, code and images, except screenshots of third-party projects) is the property of Juan Diego Gonzalez and may not be reproduced in whole or in part without prior authorisation.",
      "legal.body3": "This website is governed by current Spanish law.",
      "legal.closeAria": "Close legal notice",

      /* --- Contenido del SELECTOR DE ESTILOS en inglés ---
         (el español vive en lib/manifest.js → styles) --- */
      styles: [
        {
          id: "minimal",
          label: "Minimalist",
          desc: "Space, silence and focus. Everything unnecessary, gone.",
          domain: "estudio-mave.com",
          brand: "MAVE",
          nav: ["Studio", "Work", "Contact"],
          eyebrow: "Interior architecture",
          title: "Less, but better.",
          body: "We design spaces that breathe. Every line has a reason to exist.",
          cta: "View projects",
          tags: ["Precision", "Calm", "Detail"]
        },
        {
          id: "editorial",
          label: "Editorial",
          desc: "Type with character, magazine rhythm, warmth.",
          domain: "casa-verano.com",
          brand: "Casa Verano",
          nav: ["Story", "Menu", "Book"],
          eyebrow: "Seasonal cuisine",
          title: "Flavours that tell a story.",
          body: "Local produce, slow fire and a dining room thought out to the last detail.",
          cta: "Book a table",
          tags: ["Warm", "Narrative", "Handcrafted"]
        },
        {
          id: "corporate",
          label: "Corporate",
          desc: "Trust, order and clarity. Serious without being dull.",
          domain: "novabank.io",
          brand: "Nova",
          nav: ["Product", "Pricing", "Company"],
          eyebrow: "Financial platform",
          title: "Your finances, under control.",
          body: "Secure, clear infrastructure for teams that grow fast.",
          cta: "Request a demo",
          tags: ["Reliable", "Clear", "Scalable"]
        },
        {
          id: "bold",
          label: "Bold / Neon",
          desc: "High contrast, energy and attitude. For fearless brands.",
          domain: "pulse-fest.live",
          brand: "PULSE",
          nav: ["Line-up", "Tickets", "Info"],
          eyebrow: "Festival · 2026",
          title: "Turn it up.",
          body: "Three days, forty artists and a city that never sleeps.",
          cta: "Buy tickets",
          tags: ["Vibrant", "Nocturnal", "Direct"]
        },
        {
          id: "organic",
          label: "Organic",
          desc: "Soft shapes, earthy tones and a human touch.",
          domain: "raiz-skincare.com",
          brand: "Raíz",
          nav: ["Ritual", "Shop", "About"],
          eyebrow: "Natural care",
          title: "Skin breathes too.",
          body: "Honest formulas, ingredients you recognise and zero rush.",
          cta: "Discover the ritual",
          tags: ["Natural", "Gentle", "Mindful"]
        }
      ]
    }
  };
})();
