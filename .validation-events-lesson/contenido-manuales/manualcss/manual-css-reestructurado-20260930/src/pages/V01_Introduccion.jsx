import { Link } from "react-router-dom";

export default function V01_Introduccion() {
  return (
    <div className="doc">
      {/* HERO */}
      <section className="card hero">
        <figure className="media">
          <img
            src="/fundamentos.png"
            alt="Fundamentos de CSS · Manual CSS"
            width="500"
            height="320"
            loading="lazy"
            decoding="async"
          />
          <figcaption>
            Fundamentos de CSS · Las bases que explican cómo funciona realmente
            el navegador
          </figcaption>
        </figure>

        <p className="doc-kicker">Fundamentos</p>
        <h1>Las reglas del juego de CSS</h1>
        <p className="doc-lead">
          Antes de escribir más CSS, necesitamos entender{" "}
          <strong>cómo lo interpreta el navegador</strong>.  
          En este bloque aprenderás las reglas que deciden qué estilos se
          aplican, cuáles se ignoran y por qué.
        </p>

        
      </section>

      {/* OBJETIVO DE FUNDAMENTOS */}
      <section className="card">
        <h2>Qué vas a conseguir con este bloque</h2>

        <p>
          Fundamentos no va de aprender nuevas propiedades.  
          Va de adquirir una <strong>forma correcta de razonar CSS</strong>.
        </p>

        <p>
          Al terminar este bloque serás capaz de anticipar el comportamiento del
          navegador, entender conflictos entre reglas y escribir estilos con
          intención, no por ensayo y error.
        </p>

        <ul>
          <li>
            ✅ Saber por qué una regla se aplica y otra no
          </li>
          <li>✅ Saber dónde empezar a buscar un fallo cuando no se aplica CSS como esperabas.</li>
          <li>
            ✅ Detectar errores de cascada y especificidad sin frustrarte
          </li>
          <li>
            ✅ Escribir CSS más simple, evitando soluciones innecesarias
          </li>
          <li>
            ✅ Leer CSS ajeno y entender qué está ocurriendo
          </li>
          <li>
            ✅ Tener una base sólida para layouts, responsive y componentes
          </li>
        </ul>

        <div className="callout tip">
          Fundamentos es el bloque que transforma el “no entiendo por qué pasa”
          en “sé exactamente por qué pasa”.
        </div>
      </section>

      {/* CONCEPTOS CLAVE */}
      <section className="card">
        <h2>Los conceptos que gobiernan todo CSS</h2>

        <p>
          Cada vez que el navegador pinta una página, sigue una serie de reglas.
          En este bloque vamos a estudiar esas reglas antes de entrar en
          propiedades concretas.
        </p>

        <ul>
          <li>
            <strong>Cómo se carga y se organiza CSS</strong> en un documento
            (interno, externo e inline)
          </li>
          <li>
            <strong>La cascada</strong>: el orden real en el que se aplican los
            estilos
          </li>
          <li>
            <strong>La herencia</strong>: qué estilos se transmiten y por qué
          </li>
          <li>
            <strong>La especificidad</strong>: cómo compiten los selectores
          </li>
          <li>
            <strong>DevTools</strong>: observar y depurar CSS como en un entorno
            profesional
          </li>
        </ul>

        <div className="callout">
          Estos conceptos aparecen en absolutamente todos los temas posteriores.
          Dominarlos aquí hará que el resto del manual sea mucho más fluido.
        </div>
      </section>

      {/* METODOLOGÍA */}
      <details className="dd" open>
        <summary>Cómo vamos a trabajar Fundamentos</summary>
        <div className="dd-body">
          <p>
            Este bloque está diseñado para que entiendas, pruebes y confirmes
            cada idea por ti misma/o:
          </p>

          <ol>
            <li>Explicaciones conceptuales claras</li>
            <li>Ejemplos pequeños y controlados</li>
            <li>Pruebas guiadas para ver qué ocurre realmente</li>
            <li>Errores comunes explicados y corregidos</li>
            <li>Uso constante de DevTools</li>
          </ol>

          <div className="callout warn">
            Fundamentos no es rápido, pero es decisivo.  
            Invertir tiempo aquí te ahorrará horas de frustración más adelante.
          </div>
        </div>
      </details>

      {/* CIERRE */}
      <section className="card">
        <h2>Antes de seguir, entiende esto</h2>
        <p>
          A partir de aquí, CSS dejará de ser una sucesión de reglas que “a veces
          funcionan”. Empezarás a ver patrones, prioridades y decisiones
          claras.
        </p>

        <p>
          Si completas bien Fundamentos, el resto del manual no será más
          difícil, sino más lógico.
        </p>

        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <Link to="/css-interno-externo-1" className="btn btn-primary">
            Empezar por CSS interno y externo
          </Link>
          <Link to="/" className="btn">
            Volver a Inicio
          </Link>
        </div>
      </section>
    </div>
  );
}
