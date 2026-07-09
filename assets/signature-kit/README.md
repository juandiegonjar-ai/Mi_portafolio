# Signature Kit — firma personal (Juan Diego)

Monograma de autoría personal, **independiente de la marca de cada proyecto**. Se coloca al final del footer de cualquier web, como firma discreta del diseñador — no compite con el logo del cliente/estudio.

## Qué hay aquí

- `firma.svg` — el monograma "JD", con el color controlado por `var(--signature-color, currentColor)`. Sin colores fijos: úsalo inline (pegado directo en el HTML) para que herede el color por CSS.
- `firma-negativo.svg` — la misma firma en blanco fijo (`#ffffff`), para usarla como `<img src="...">` suelta sobre fondos oscuros, en contextos donde no hay herencia de `currentColor` disponible.
- Este `README.md`.

## Cómo integrarla en un proyecto nuevo

1. Copia esta carpeta completa (`signature-kit/`) tal cual dentro de `assets/` del nuevo proyecto.
2. Pega el siguiente bloque HTML al final del `<footer>` de esa web (después de todo el contenido de marca del cliente: logo, redes, copyright).
3. Ajusta **solo** la variable `--signature-color` en el CSS del proyecto para que combine con su paleta (ver ejemplos abajo). Sustituye también el `href` por tu URL real de portfolio.

No hace falta tocar nada más del SVG ni del markup — está pensado para pegarse y funcionar.

### HTML (pegar al final del footer)

```html
<div class="site-signature">
  <a href="https://tu-portfolio-aqui.com" target="_blank" rel="noopener" aria-label="Sitio diseñado por Juan Diego Gonzalez J.">
    <svg class="site-signature__mark" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M18,9 L18,28 A7,7 0 0 1 11,35" fill="none" stroke="var(--signature-color, currentColor)" stroke-width="4" stroke-linecap="round"/>
      <path d="M24,9 L24,39" fill="none" stroke="var(--signature-color, currentColor)" stroke-width="4" stroke-linecap="round"/>
      <path d="M24,9 A14,14 0 0 1 24,39" fill="none" stroke="var(--signature-color, currentColor)" stroke-width="4" stroke-linecap="round"/>
    </svg>
    <span class="site-signature__text">sitio diseñado por Juan Diego Gonzalez J.</span>
  </a>
</div>
```

### CSS (pegar en el stylesheet del proyecto)

```css
:root {
  /* Único valor a ajustar por proyecto: color/opacidad del footer de ESE sitio.
     Debe quedar tenue (40-50% de opacidad aprox.) respecto al resto del footer. */
  --signature-color: rgba(255, 255, 255, 0.45);
}

.site-signature {
  margin-top: 2.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08); /* si el footer es claro, usa rgba(0,0,0,0.08) */
  display: flex;
  justify-content: center;
}
.site-signature a {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--signature-color);
  transition: opacity 0.3s ease;
}
.site-signature a:hover,
.site-signature a:focus-visible { opacity: 0.85; }
.site-signature__mark {
  width: 18px;
  height: 18px;
  display: block;
}
.site-signature__text {
  font-size: 0.68rem;
  letter-spacing: 0.03em;
  text-transform: none; /* respeta las mayúsculas tal como las escribas en el HTML */
  font-family: inherit;
}
```

## Qué representa el símbolo

Las letras **J** y **D** reales — no un icono ni un pictograma temático — dibujadas con un único grosor de trazo y kerning apretado, para que se lean como un solo lockup compacto en vez de dos letras sueltas. Funciona sola, sin el texto al lado, y sigue siendo reconocible a 16-18px de alto. Es deliberadamente independiente del lenguaje visual de cualquier proyecto (no reutiliza formas ni iconografía del sitio en el que se instala), para que sea la misma firma reconocible en todas tus webs.

## Variables que controlan su aspecto

| Variable | Qué controla | Valor por defecto en el snippet |
|---|---|---|
| `--signature-color` | Color y, vía `rgba(...)`, la opacidad del trazo y del texto | `rgba(255,255,255,0.45)` (pensado para footers oscuros) |

Si el footer del nuevo proyecto es de fondo claro, cambia el valor a algo como `rgba(0,0,0,0.4)` y el `border-top` de `.site-signature` a `rgba(0,0,0,0.08)`.

## Tamaño

`.site-signature__mark` está fijado a 18px de alto (dentro del rango 16-24px pedido). Puedes ajustarlo directamente en esa regla si un proyecto necesita otro tamaño — no afecta al resto del kit.
