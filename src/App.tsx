import { motion, type MotionProps, type Transition } from "framer-motion";

type Criterion = {
  title: string;
  points: string;
  text: string;
  note?: string;
};

type CriteriaSection = {
  id: string;
  numeral: string;
  title: string;
  max: number;
  intro: string;
  criteria: Criterion[];
};

const sections: CriteriaSection[] = [
  {
    id: "ese",
    numeral: "I.",
    title: "Компетентности за изграждане на есе",
    max: 10,
    intro:
      "Този модул оценява самото съдържание и способността за разсъждаване над зададения проблем. При есето проблемът обикновено е изведен от дадено литературно произведение, но се разглежда в неговия по-широк, общочовешки смисъл.",
    criteria: [
      {
        title: "Осмисляне на проблема",
        points: "до 3 т.",
        text: "Трябва да се покаже разбиране за това какво се пита в темата и умения да се приложи този проблем в актуален житейски и съвременен контекст.",
      },
      {
        title: "Многоаспектност",
        points: "до 4 т.",
        text: "Проверяващите търсят дълбочина. Нещата не се разглеждат само в „черно“ и „бяло“. Трябва да се погледне на проблема от различни ъгли - например от морална, социална, психологическа или философска гледна точка.",
        note: "Практическо уточнение: избери два или три смислени ъгъла и ги свържи с темата, вместо да изброяваш случайни гледни точки.",
      },
      {
        title: "Собствена позиция",
        points: "до 3 т.",
        text: "При есето най-важното е личното мнение и позиция. То трябва да бъде ясно заявено в текста и убедително отстоявано (разбира се, с уважителен и зрял тон).",
      },
    ],
  },
  {
    id: "argumentativen",
    numeral: "II.",
    title: "Компетентности за изграждане на аргументативен текст",
    max: 12,
    intro:
      "Това е скелетът на твоето есе - начинът, по който конструираш и подреждаш текста си.",
    criteria: [
      {
        title: "Формулиране на теза",
        points: "до 3 т.",
        text: "Тезата е сърцето на текста. Тя трябва да бъде ясна, стегната и да отговаря директно на поставения проблем. Обикновено мястото й е в края на увода.",
        note: "Кратък пример: ако проблемът е за свободата и отговорността, тезата трябва директно да заяви връзката между тях.",
      },
      {
        title: "Аргументация",
        points: "до 5 т.",
        text: "Всяко твърдение, което се прави в изложението (микротезите), трябва да бъде доказано. Използват се логически разсъждения и примери от реалния живот, историята, изкуството или литературата, за да се защити тезата. Мисълта ти трябва да тече логично и последователно.",
      },
      {
        title: "Цялост и свързаност",
        points: "до 4 т.",
        text: "Текстът ти трябва да има ясно обособени смислови части: Увод, Изложение и Заключение. Изложението обикновено се състои от няколко отделни параграфа. Важно е преходите между абзаците да са плавни, а не накъсани.",
        note: "Практическо уточнение: всеки параграф в изложението е добре да носи една основна микротеза и да я развива докрай.",
      },
    ],
  },
  {
    id: "ezikovi",
    numeral: "III.",
    title: "Езикови компетентности",
    max: 8,
    intro: "Това е техническата част - свидетелство за нивото на грамотност.",
    criteria: [
      {
        title: "Лексикална норма",
        points: "до 2 т.",
        text: "Очаква се да се използва богат, точен и стилистично уместен речник. Избягват се жаргони, диалектни думи и излишни повторения на едни и същи изрази.",
      },
      {
        title: "Граматична норма",
        points: "до 2 т.",
        text: "Внимава се за правилен словоред, съгласуване на времената, както и за правилното използване на пълен и кратък член.",
      },
      {
        title: "Правописна норма",
        points: "до 2 т.",
        text: "Внимателно се проверява за правилно слято, полуслято и разделно писане, двойно „н“, употреба на главни и малки букви, променливо „я“.",
      },
      {
        title: "Пунктуационна норма",
        points: "до 2 т.",
        text: "Следи се за правилното поставяне на запетаи (особено пред съюзи като че, който, въпреки че, при обособени части и вметнати думи), точки и тирета.",
      },
    ],
  },
];

const practicalAdvice = [
  {
    title: "Обем",
    text: "Изискването е обемът да е до 4 страници, без да е задължително да бъде изпълнен. Един добре структуриран, стегнат и смислен текст от 2-3 страници често носи много по-висока оценка от 4 страници разводнени разсъждения.",
  },
  {
    title: "Време",
    text: "За третия модул (където пишеш есето) се дават 120 минути. Трябва да се предвиди време за чернова (поне на увода, тезата и основните аргументи) и задължително да се оставят 10-15 минути накрая само за проверка.",
  },
  {
    title: "Специфика спрямо съчинението",
    text: "За разлика от интерпретативното съчинение, при есето не е задължително придържането към анализа на дадения художествен текст. Дадено произведение може да се използва като отправна точка или пример, но фокусът остава върху личните общовалидни житейски разсъждения.",
  },
  {
    title: "Химикал",
    text: "Пише се задължително с черен химикал.",
  },
];

const scoreCards = [
  { label: "Есе", points: 10, detail: "съдържание и разсъждение" },
  { label: "Аргументативен текст", points: 12, detail: "теза, доказване, свързаност" },
  { label: "Езикови компетентности", points: 8, detail: "лексика, граматика, правопис, пунктуация" },
];

const baseTransition: Transition = {
  duration: 0.55,
  ease: [0.22, 1, 0.36, 1],
};

const fadeIn: Pick<
  MotionProps,
  "whileInView" | "viewport" | "transition"
> = {
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: baseTransition,
};

function App() {
  const total = scoreCards.reduce((sum, card) => sum + card.points, 0);

  return (
    <div className="app-shell">
      <header className="topbar" aria-label="Основна навигация">
        <a className="brand" href="#top" aria-label="BGEssayGuide начало">
          <span className="brand-mark" aria-hidden="true">
            *
          </span>
          <span>BGEssayGuide</span>
        </a>
        <nav className="nav-links">
          <a href="#tochki">Точки</a>
          <a href="#kriterii">Критерии</a>
          <a href="#praktika">Изпит</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-wrap">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={baseTransition}
          >
            <p className="eyebrow">Наръчник за 41. задача</p>
            <h1>BGEssayGuide</h1>
            <p className="hero-subtitle">
              Спокоен и подреден дигитален наръчник за писане на есе за матурата
              по БЕЛ в 12. клас.
            </p>
            <p className="hero-body">
              Писането на есе за матурата по БЕЛ в 12. клас може да звучи
              стряскащо, но всъщност се подчинява на много ясни и конкретни
              правила. Познаването на критериите, по които се проверява 41.
              задача, помага мислите да се структурират и да се постигне
              максималният брой от <strong>30 точки</strong>.
            </p>
          </motion.div>

          <motion.aside
            className="hero-card"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...baseTransition, delay: 0.08 }}
          >
            <div className="paper-preview" aria-label="Визуален преглед на структурата">
              <div className="paper-header">
                <span>Правила за писане на есе</span>
                <strong>{total} т.</strong>
              </div>
              <div className="paper-line long" />
              <div className="paper-line medium" />
              <div className="paper-metrics">
                {scoreCards.map((card) => (
                  <div key={card.label}>
                    <span>{card.label}</span>
                    <strong>{card.points}</strong>
                  </div>
                ))}
              </div>
              <div className="paper-section">
                <span>Увод</span>
                <span>Изложение</span>
                <span>Заключение</span>
              </div>
            </div>
          </motion.aside>
        </section>

        <motion.section className="score-section section-wrap" id="tochki" {...fadeIn}>
          <div className="section-heading">
            <p className="eyebrow">Разпределение на оценяването</p>
            <h2>Общо: {total} точки</h2>
            <p>
              Оценяването е разделено на три части. Сборът им дава максималния
              резултат за есето.
            </p>
          </div>

          <div className="score-grid">
            {scoreCards.map((card) => (
              <article className="score-card" key={card.label}>
                <div className="score-number">
                  <strong>{card.points}</strong>
                  <span>точки</span>
                </div>
                <div>
                  <h3>{card.label}</h3>
                  <p>{card.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </motion.section>

        <section className="criteria-band" id="kriterii">
          <div className="section-wrap">
            <div className="section-heading compact">
              <p className="eyebrow">Критерии</p>
              <h2>Какво означава всеки критерий</h2>
            </div>

            <div className="criteria-stack">
              {sections.map((section) => (
                <motion.article className="criteria-section" key={section.id} {...fadeIn}>
                  <div className="criteria-section-head">
                    <div>
                      <p className="section-numeral">{section.numeral}</p>
                      <h3>{section.title}</h3>
                    </div>
                    <span className="max-badge">макс. {section.max} т.</span>
                  </div>
                  <p className="section-intro">{section.intro}</p>

                  <div className="criterion-grid">
                    {section.criteria.map((criterion) => (
                      <article className="criterion-card" key={criterion.title}>
                        <div className="criterion-title-row">
                          <h4>{criterion.title}</h4>
                          <span>{criterion.points}</span>
                        </div>
                        <p>{criterion.text}</p>
                        {criterion.note ? (
                          <div className="note">
                            <strong>
                              {criterion.note.startsWith("Кратък пример")
                                ? "Кратък пример"
                                : "Практическо уточнение"}
                            </strong>
                            <p>
                              {criterion.note
                                .replace("Кратък пример: ", "")
                                .replace("Практическо уточнение: ", "")}
                            </p>
                          </div>
                        ) : null}
                      </article>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <motion.section className="usage section-wrap" {...fadeIn}>
          <div className="usage-panel">
            <div>
              <p className="eyebrow">Как да го използваш</p>
              <h2>Провери плана си преди да пишеш</h2>
            </div>
            <div className="usage-checks" aria-label="Кратък работен списък">
              <span>Проблемът е осмислен</span>
              <span>Тезата отговаря директно</span>
              <span>Аргументите доказват микротезите</span>
              <span>Има увод, изложение и заключение</span>
              <span>Оставени са 10-15 минути за проверка</span>
            </div>
          </div>
        </motion.section>

        <section className="practical-band" id="praktika">
          <motion.div className="section-wrap practical-layout" {...fadeIn}>
            <div className="section-heading sticky-heading">
              <p className="eyebrow">Практически съвети</p>
              <h2>За самия изпит</h2>
              <p>
                Това са конкретните ориентири от наръчника за работа по време на
                третия модул.
              </p>
            </div>

            <div className="advice-list">
              {practicalAdvice.map((item) => (
                <article className="advice-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </motion.div>
        </section>

        <motion.section className="final-summary section-wrap" {...fadeIn}>
          <p className="eyebrow">Финално напомняне</p>
          <h2>Есето печели точки, когато мисълта е ясна, лична и подредена.</h2>
          <p>
            Най-силният текст разбира проблема, защитава собствена позиция,
            доказва твърденията си и е написан грамотно. Този сайт е
            неофициален учебен ориентир и не представлява държавен или
            институционален източник.
          </p>
        </motion.section>
      </main>
    </div>
  );
}

export default App;
