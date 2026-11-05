import { Link } from "react-router-dom";

export default function FundamentosIntro() {
  return (
    <div className="doc">
      {/* HERO / CABECERA DEL TEMA */}
      <section className="card hero">
        <p className="doc-kicker">Fundamentos</p>
        <h1>Las bases de CSS: entender antes de memorizar</h1>
        <p className="doc-lead">
          Antes de aprender “propiedades sueltas”, vamos a aprender{" "}
          <strong>cómo funciona CSS por dentro</strong>. Si entiendes la cascada,
          la herencia y la especificidad, CSS deja de parecer aleatorio y se
          convierte en un sistema que puedes controlar.
        </p>

        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <Link to="/tema-1" className="btn btn-primary">
            Empezar por Introducción
          </Link>
          <a
            href="https://developer.mozilla.org/es/docs/Web/CSS"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            CSS en MDN
          </a>
        </div>
      </section>

      {/* PRESENTACIÓN GENERAL */}
      <section className="card">
        <h2>Objetivo del manual</h2>
        <p>
          Este manual está diseñado para llevarte{" "}
          <strong>desde cero hasta un nivel profesional</strong> en CSS. Y cuando
          digo “profesional” no me refiero a saber muchas propiedades, sino a
          ser capaz de:
        </p>

        <ul>
          <li>
            ✅ Construir interfaces claras y coherentes, sin depender de copiar
            código
          </li>
          <li>
            ✅ Entender por qué un estilo se aplica (o no) y resolverlo con
            criterio
          </li>
          <li>
            ✅ Escribir CSS mantenible: ordenado, legible y escalable
          </li>
          <li>
            ✅ Crear diseños accesibles y responsivos desde el principio
          </li>
        </ul>

        <div className="callout tip">
          El objetivo no es que “te salga” por casualidad. Es que puedas
          explicar el resultado y repetirlo en cualquier proyecto.
        </div>
      </section>

      {/* POR QUÉ EMPEZAMOS POR FUNDAMENTOS */}
      <section className="card">
        <h2>¿Por qué empezamos por las bases?</h2>
        <p>
          Mucha gente aprende CSS como una lista de reglas: “pon esto, prueba
          esto otro, a ver si se arregla”. Ese enfoque funciona para salir del
          paso, pero falla cuando el proyecto crece.
        </p>

        <p>
          CSS tiene una lógica propia: el navegador recibe un conjunto de reglas
          y decide el resultado final siguiendo un orden:{" "}
          <strong>cascada</strong>, <strong>herencia</strong> y{" "}
          <strong>especificidad</strong>, además del flujo del documento y el
          modelo de cajas.
        </p>

        <p>
          Si no entiendes esas reglas del juego, el código se convierte en una
          colección de parches. Si las entiendes, CSS se vuelve predecible:{" "}
          <strong>tú decides y el navegador obedece</strong>.
        </p>

        <div className="callout">
          Fundamentos es el bloque que te enseña a leer CSS como un sistema, no
          como trucos aislados.
        </div>
      </section>

      {/* QUÉ VAMOS A VER ANTES DE "PROPIEDADES" */}
      <section className="card">
        <h2>Qué vas a dominar antes de entrar en “reglas concretas”</h2>
        <p>
          En esta sección vamos a recorrer los conceptos que necesitas para
          comenzar con seguridad. No son “tema 0”: son la base de TODO lo que
          vendrá después.
        </p>

        <ul>
          <li>
            <strong>Cómo se conecta CSS a una página</strong> (interno, externo,
            buenas prácticas y orden)
          </li>
          <li>
            <strong>La cascada</strong>: cómo compiten las reglas y por qué gana
            una u otra
          </li>
          <li>
            <strong>Herencia</strong>: qué propiedades se heredan y cómo afecta a
            la estructura HTML
          </li>
          <li>
            <strong>Especificidad</strong>: el “ranking” real de selectores y
            cómo evitar guerras de estilos
          </li>
          <li>
            <strong>Variables CSS</strong>: cómo pensar el CSS como un sistema de
            diseño (colores, espacios, tipografías)
          </li>
        </ul>

        <div className="callout tip">
          Cuando domines esto, entenderás por qué un botón no cambia de color,
          por qué un margin “no funciona” o por qué un selector no está haciendo
          efecto. Y lo resolverás con calma y criterio.
        </div>
      </section>

      {/* METODOLOGÍA */}
      <details className="dd" open>
        <summary>Metodología: cómo vamos a trabajar cada concepto</summary>
        <div className="dd-body">
          <p>
            Aprender CSS requiere dos cosas:{" "}
            <strong>comprender</strong> y <strong>practicar</strong>. Por eso
            cada bloque incluirá:
          </p>

          <ol>
            <li>
              Una explicación clara, con ejemplos pequeños y controlados
            </li>
            <li>
              Práctica guiada: “hazlo tú” con pistas y comprobaciones
            </li>
            <li>
              Mini-retos para que apliques lo aprendido sin copiar
            </li>
            <li>
              Recursos extra: vídeos, documentación y herramientas útiles
            </li>
          </ol>

          <div className="callout warn">
            Aviso honesto: CSS no es fácil. A veces se tiene la sensación de que
            no es importante, que basta con copiar reglas y ver si “funcionan”.
            La realidad es otra: CSS se domina con práctica. Y con una buena
            guía y constancia, deja de ser frustrante y se convierte en una
            herramienta poderosa.
          </div>
        </div>
      </details>

      {/* CIERRE / MOTIVACIÓN */}
      <section className="card">
        <h2>Si avanzas aquí, avanzarás en todo</h2>
        <p>
          Lo que aprendas en Fundamentos te va a acompañar en cada tema: cuando
          entres en selectores, layouts, componentes o responsive, estarás
          aplicando estas mismas bases una y otra vez.
        </p>
        <p>
          Mi consejo es simple: no corras. Haz los ejemplos, repite los
          ejercicios, escribe tus propias variantes y comprueba lo que ocurre.
          En CSS, la diferencia entre “sé algo” y “lo domino” está en la
          constancia.
        </p>

        <div className="callout">
          ¿Lista/o para empezar bien? Vamos con el primer concepto:{" "}
          <strong>CSS interno y CSS externo</strong>.
        </div>

        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <Link to="/fundamentos/css-interno-externo" className="btn btn-primary">
            Ir a CSS interno / externo
          </Link>
          <Link to="/fundamentos/cascada-especificidad" className="btn">
            Ver cascada y especificidad
          </Link>
        </div>
      </section>
    </div>
  );
}
