import { useMemo, useState } from "react";

/**
 * Quiz reutilizable para el manual.
 * props:
 * - title: string
 * - lead?: string
 * - questions: Array<{ id, text, options: Array<{key,label}>, correct, explain? }>
 * - passingScore?: number (por defecto 0.8 => 80%)
 */
export default function Quiz({
  title = "Test de repaso",
  lead = "Responde sin ejecutar código. Si dudas, vuelve a los ejemplos y compruébalo.",
  questions = [],
  passingScore = 0.8,
}) {
  const qList = useMemo(() => questions, [questions]);
  const total = qList.length;

  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const allAnswered = qList.every((q) => Boolean(answers[q.id]));
  const score = qList.reduce((acc, q) => acc + (answers[q.id] === q.correct ? 1 : 0), 0);
  const percent = total ? Math.round((score / total) * 100) : 0;
  const passed = total ? score / total >= passingScore : false;

  function pick(qid, key) {
    setAnswers((prev) => ({ ...prev, [qid]: key }));
  }

  function reset() {
    setAnswers({});
    setSubmitted(false);
  }

  return (
    <section className="card">
      <h2>{title}</h2>
      <p>{lead}</p>

      <details className="dd" open>
        <summary>Preguntas (elige la opción correcta)</summary>
        <div className="dd-body">
          {qList.map((q, idx) => {
            const chosen = answers[q.id];
            const isCorrect = chosen === q.correct;

            return (
              <div key={q.id} style={{ margin: "1rem 0" }}>
                <p style={{ margin: "0 0 .5rem" }}>
                  <strong>
                    {idx + 1}. {q.text}
                  </strong>
                </p>

                <div
                  role="radiogroup"
                  aria-label={`Pregunta ${idx + 1}`}
                  style={{ display: "grid", gap: ".5rem" }}
                >
                  {q.options.map((opt) => {
                    const checked = chosen === opt.key;
                    const showState = submitted && checked;

                    return (
                      <label
                        key={opt.key}
                        className="quiz-option"
                        style={{
                          display: "flex",
                          gap: ".55rem",
                          alignItems: "flex-start",
                          padding: ".55rem .7rem",
                          borderRadius: 12,
                          border: "1px solid rgba(2,6,23,.12)",
                          background: checked ? "rgba(79,70,229,.06)" : "rgba(255,255,255,.85)",
                          cursor: submitted ? "not-allowed" : "pointer",
                        }}
                      >
                        <input
                          type="radio"
                          name={q.id}
                          value={opt.key}
                          checked={checked}
                          onChange={() => pick(q.id, opt.key)}
                          disabled={submitted}
                          style={{ marginTop: ".2rem" }}
                        />
                        <span>
                          <strong>{opt.key})</strong> {opt.label}
                          {showState && <span style={{ marginLeft: ".5rem" }}>{isCorrect ? "✅" : "❌"}</span>}
                        </span>
                      </label>
                    );
                  })}
                </div>

                {submitted && (
                  <div className={isCorrect ? "callout tip" : "callout warn"}>
                    <strong>{isCorrect ? "Correcto." : "Incorrecto."}</strong>{" "}
                    Respuesta: <strong>{q.correct}</strong>
                    {q.explain ? ` — ${q.explain}` : null}
                  </div>
                )}
              </div>
            );
          })}

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => setSubmitted(true)}
              disabled={!allAnswered || submitted}
              aria-disabled={!allAnswered || submitted}
              title={!allAnswered ? "Responde todas las preguntas" : ""}
            >
              Corregir test
            </button>

            <button type="button" className="btn" onClick={reset}>
              Reiniciar
            </button>
          </div>

          {submitted && (
            <div className="callout">
              Resultado: <strong>{score}/{total}</strong> ({percent}%) —{" "}
              <strong>{passed ? "Aprobado ✅" : "Sigue practicando 💪"}</strong>
            </div>
          )}

          {!allAnswered && !submitted && (
            <div className="callout warn">
              Te falta responder alguna pregunta antes de corregir.
            </div>
          )}
        </div>
      </details>
    </section>
  );
}
