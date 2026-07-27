"use client";

import { useEffect, useState } from "react";

type Locale = "en" | "ru" | "fr";
type DishType = "sea" | "fire" | "earth";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const asset = (path: string) => `${basePath}${path}`;

const dishImages: { src: string; type: DishType }[] = [
  { src: asset("/images/prawn-skewer.jpeg"), type: "sea" },
  { src: asset("/images/steak-board.jpeg"), type: "fire" },
  { src: asset("/images/octopus.jpeg"), type: "sea" },
  { src: asset("/images/kofta.jpeg"), type: "fire" },
  { src: asset("/images/truffle-ravioli.jpeg"), type: "earth" },
  { src: asset("/images/seafood-salad.jpeg"), type: "sea" },
  { src: asset("/images/beef-salad.jpeg"), type: "earth" },
  { src: asset("/images/lamb.jpeg"), type: "fire" },
  { src: asset("/images/broth.jpeg"), type: "earth" },
];

const cvFiles: Record<Locale, string> = {
  en: asset("/cv/Redouane-El-Haloui-CV-English.pdf"),
  ru: asset("/cv/Redouane-El-Haloui-CV-Russian.pdf"),
  fr: asset("/cv/Redouane-El-Haloui-CV-Francais.pdf"),
};

const copy = {
  en: {
    nav: ["Story", "Plates", "Journey", "Skills"], contact: "Let’s talk", cv: "Download CV",
    eyebrow: "Redouane El Haloui · Sous Chef", headline: <>Food that<br />travels <em>well.</em></>,
    intro: "Professional chef with more than eight years in the kitchen, shaped by Moroccan family tradition and four years in Russian restaurants.",
    explore: "Explore the plates", view: "View experience", home: "Rabat, Morocco", current: "Currently in Kazan, Russia",
    badge: "years in the kitchen", vertical: "REDOUANE EL HALOUI · PORTFOLIO 2026",
    marquee: "OPEN FIRE ✦ SEAFOOD ✦ MODERN COMFORT ✦ MOROCCAN INSTINCT ✦ OPEN FIRE ✦",
    storyKicker: "01 — STORY", quote: "“I learned flavor before I learned recipes.”",
    storyTitle: <>Rooted in Morocco.<br />Refined in Russia.</>,
    story1: "Redouane began cooking at home, in a family of chefs where food was a language: generous, intuitive, and shared. Professional life in Russia added discipline, speed, and a new culinary vocabulary.",
    story2: "Today, he brings that combination to high-volume restaurant service: quality food, organized stations, confident teamwork, and calm execution under pressure.",
    facts: ["years of kitchen experience", "years in Russian restaurants", "restaurant teams"],
    platesKicker: "02 — SELECTED PLATES", platesTitle: <>A portfolio<br />you can <em>taste.</em></>,
    filters: ["All plates", "From the sea", "From the fire", "From the earth"],
    dishes: [
      ["Fire & Coast", "Prawn · flatbread · pickles"], ["Open Flame", "Beef · sweet corn · rosemary"],
      ["Atlantic Memory", "Octopus · baby potato · herb jus"], ["Casablanca Grill", "Kofta · flatbread · cool herbs"],
      ["Quiet Luxury", "Ravioli · cream · black truffle"], ["The Market", "Shellfish · tomato · garden leaves"],
      ["Garden & Grill", "Beef · mushrooms · herb oil"], ["Slow Heat", "Lamb · potato · reduced jus"],
      ["Deep Comfort", "Clear broth · vegetables · grilled beef"],
    ],
    experienceKicker: "03 — EXPERIENCE", experienceTitle: <>Seven kitchens.<br />One evolving hand.</>,
    experienceIntro: "Each restaurant brought a new tempo, team, and way of seeing the plate. Together they form four years of professional kitchen experience in Russia.",
    jobs: [
      ["Refettorio", "6 months", "Daily operations · quality · service coordination"], ["Top Hop", "5 months", "Food preparation · station organization · safety"],
      ["Jungle", "6 months", "High-volume kitchen · hot dishes · team service"], ["Endorphin", "7 months", "Menu preparation · production · consistency"],
      ["Hemingway", "8 months", "Plating · recipe execution · peak-hour support"], ["Leto", "8 months", "Chef · preparation · cooking · hygiene"],
      ["Duran", "8 months", "Chef · ingredient prep · efficient team service"],
    ],
    skillsKicker: "04 — PROFESSIONAL SKILLS", skillsTitle: <>Built for<br /><em>service.</em></>,
    skillGroups: [
      ["Kitchen operations", ["Food preparation", "Menu execution", "Inventory control", "HACCP principles", "Kitchen organization"]],
      ["Leadership", ["Teamwork", "Staff training", "Time management", "Problem solving", "Working under pressure"]],
      ["Cuisine", ["European cuisine", "Grill", "Modern restaurant service", "High-volume operations"]],
    ],
    educationKicker: "05 — EDUCATION & LANGUAGES", educationTitle: <>Precision is<br />a way of thinking.</>,
    education: "Redouane is a fifth-year Dentistry student at Kazan State Medical University. His studies include general dentistry, oral surgery, prosthodontics, endodontics, and preventive dentistry—a second discipline built on focus, responsibility, and care.",
    languages: ["Arabic · Native", "English · Fluent", "French · Intermediate", "Russian · Intermediate"],
    footerKicker: "Sous Chef · Professional Chef · Dentistry Student", footerTitle: <>Let’s make something<br /><em>memorable.</em></>,
    email: "Email Redouane", back: "Back to top", downloadTitle: "Choose your CV language",
  },
  ru: {
    nav: ["История", "Блюда", "Опыт", "Навыки"], contact: "Связаться", cv: "Скачать резюме",
    eyebrow: "Redouane El Haloui · Су-шеф", headline: <>Еда, которая<br /><em>путешествует.</em></>,
    intro: "Профессиональный повар с опытом работы более восьми лет, выросший на марокканских семейных традициях и проработавший четыре года в ресторанах России.",
    explore: "Смотреть блюда", view: "Опыт работы", home: "Рабат, Марокко", current: "Сейчас в Казани, Россия",
    badge: "лет на профессиональной кухне", vertical: "REDOUANE EL HALOUI · ПОРТФОЛИО 2026",
    marquee: "ОТКРЫТЫЙ ОГОНЬ ✦ МОРЕПРОДУКТЫ ✦ СОВРЕМЕННАЯ КУХНЯ ✦ МАРОККАНСКИЙ ХАРАКТЕР ✦",
    storyKicker: "01 — ИСТОРИЯ", quote: "«Я узнал вкус раньше, чем рецепты».",
    storyTitle: <>Корни в Марокко.<br />Мастерство в России.</>,
    story1: "Редуан начал готовить дома, в семье поваров, где еда была языком щедрости, интуиции и общения. Работа в России добавила дисциплину, скорость и новый кулинарный словарь.",
    story2: "Сегодня он объединяет эти качества в ресторанном сервисе: качественная еда, организованные станции, уверенная работа в команде и спокойствие под давлением.",
    facts: ["лет опыта на кухне", "года в ресторанах России", "ресторанных команд"],
    platesKicker: "02 — ИЗБРАННЫЕ БЛЮДА", platesTitle: <>Портфолио,<br />которое можно <em>попробовать.</em></>,
    filters: ["Все блюда", "Из моря", "С огня", "Из земли"],
    dishes: [
      ["Огонь и море", "Креветки · лепёшка · маринады"], ["Открытый огонь", "Говядина · кукуруза · розмарин"],
      ["Память Атлантики", "Осьминог · молодой картофель · соус"], ["Гриль Касабланки", "Кофта · лепёшка · травы"],
      ["Тихая роскошь", "Равиоли · сливки · чёрный трюфель"], ["Рынок", "Морепродукты · томаты · зелень"],
      ["Сад и гриль", "Говядина · грибы · масло трав"], ["Медленный жар", "Ягнёнок · картофель · соус"],
      ["Глубокий вкус", "Бульон · овощи · говядина гриль"],
    ],
    experienceKicker: "03 — ОПЫТ", experienceTitle: <>Семь кухонь.<br />Один развивающийся почерк.</>,
    experienceIntro: "Каждый ресторан принёс новый темп, новую команду и новый взгляд на блюдо. Вместе это четыре года профессионального опыта на кухнях России.",
    jobs: [
      ["Refettorio", "6 месяцев", "Ежедневная работа · качество · координация сервиса"], ["Top Hop", "5 месяцев", "Подготовка · организация станции · безопасность"],
      ["Jungle", "6 месяцев", "Высокая загрузка · горячие блюда · командный сервис"], ["Endorphin", "7 месяцев", "Подготовка меню · производство · стабильность"],
      ["Hemingway", "8 месяцев", "Подача · работа по рецепту · поддержка в часы пик"], ["Leto", "8 месяцев", "Повар · подготовка · приготовление · гигиена"],
      ["Duran", "8 месяцев", "Повар · ингредиенты · эффективная работа в команде"],
    ],
    skillsKicker: "04 — ПРОФЕССИОНАЛЬНЫЕ НАВЫКИ", skillsTitle: <>Готов к<br /><em>сервису.</em></>,
    skillGroups: [
      ["Работа кухни", ["Подготовка продуктов", "Работа по меню", "Контроль запасов", "Принципы HACCP", "Организация кухни"]],
      ["Лидерство", ["Командная работа", "Обучение персонала", "Управление временем", "Решение проблем", "Стрессоустойчивость"]],
      ["Кухня", ["Европейская кухня", "Гриль", "Современный сервис", "Высокая загрузка"]],
    ],
    educationKicker: "05 — ОБРАЗОВАНИЕ И ЯЗЫКИ", educationTitle: <>Точность —<br />образ мышления.</>,
    education: "Редуан — студент 5 курса стоматологического факультета Казанского государственного медицинского университета. Изучает общую, хирургическую, ортопедическую и профилактическую стоматологию, а также эндодонтию.",
    languages: ["Арабский · Родной", "Английский · Свободно", "Французский · Средний", "Русский · Средний"],
    footerKicker: "Су-шеф · Профессиональный повар · Студент-стоматолог", footerTitle: <>Создадим что-то<br /><em>незабываемое.</em></>,
    email: "Написать Редуану", back: "Наверх", downloadTitle: "Выберите язык резюме",
  },
  fr: {
    nav: ["Histoire", "Plats", "Parcours", "Compétences"], contact: "Contact", cv: "Télécharger le CV",
    eyebrow: "Redouane El Haloui · Sous-chef", headline: <>Une cuisine qui<br /><em>voyage bien.</em></>,
    intro: "Chef professionnel avec plus de huit ans d’expérience, nourri par les traditions familiales marocaines et quatre années dans des restaurants en Russie.",
    explore: "Découvrir les plats", view: "Voir le parcours", home: "Rabat, Maroc", current: "Actuellement à Kazan, Russie",
    badge: "ans en cuisine professionnelle", vertical: "REDOUANE EL HALOUI · PORTFOLIO 2026",
    marquee: "FEU OUVERT ✦ FRUITS DE MER ✦ CUISINE MODERNE ✦ INSTINCT MAROCAIN ✦ FEU OUVERT ✦",
    storyKicker: "01 — HISTOIRE", quote: "« J’ai appris le goût avant les recettes. »",
    storyTitle: <>Enraciné au Maroc.<br />Affiné en Russie.</>,
    story1: "Redouane a commencé à cuisiner chez lui, dans une famille de chefs où la cuisine était un langage généreux, intuitif et partagé. La Russie lui a apporté discipline, vitesse et un nouveau vocabulaire culinaire.",
    story2: "Aujourd’hui, il réunit ces qualités dans le service à haut volume : cuisine de qualité, postes organisés, travail d’équipe et calme sous pression.",
    facts: ["ans d’expérience en cuisine", "ans dans les restaurants russes", "équipes de restaurant"],
    platesKicker: "02 — PLATS SÉLECTIONNÉS", platesTitle: <>Un portfolio<br />qui se <em>déguste.</em></>,
    filters: ["Tous les plats", "De la mer", "Du feu", "De la terre"],
    dishes: [
      ["Feu & Côte", "Crevettes · pain plat · pickles"], ["Flamme ouverte", "Bœuf · maïs · romarin"],
      ["Mémoire atlantique", "Poulpe · pomme de terre · jus aux herbes"], ["Grill de Casablanca", "Kefta · pain plat · herbes"],
      ["Luxe discret", "Ravioli · crème · truffe noire"], ["Le Marché", "Fruits de mer · tomate · jeunes pousses"],
      ["Jardin & Grill", "Bœuf · champignons · huile aux herbes"], ["Chaleur lente", "Agneau · pomme de terre · jus réduit"],
      ["Réconfort profond", "Bouillon · légumes · bœuf grillé"],
    ],
    experienceKicker: "03 — EXPÉRIENCE", experienceTitle: <>Sept cuisines.<br />Une main en évolution.</>,
    experienceIntro: "Chaque restaurant a apporté un nouveau rythme, une nouvelle équipe et une nouvelle façon de voir l’assiette. Ensemble : quatre ans d’expérience professionnelle en Russie.",
    jobs: [
      ["Refettorio", "6 mois", "Opérations · qualité · coordination du service"], ["Top Hop", "5 mois", "Préparation · organisation du poste · sécurité"],
      ["Jungle", "6 mois", "Haut volume · plats chauds · service en équipe"], ["Endorphin", "7 mois", "Mise en place · production · régularité"],
      ["Hemingway", "8 mois", "Dressage · recettes · soutien aux heures de pointe"], ["Leto", "8 mois", "Chef · préparation · cuisson · hygiène"],
      ["Duran", "8 mois", "Chef · ingrédients · service efficace en équipe"],
    ],
    skillsKicker: "04 — COMPÉTENCES", skillsTitle: <>Prêt pour<br /><em>le service.</em></>,
    skillGroups: [
      ["Opérations de cuisine", ["Préparation culinaire", "Exécution des menus", "Contrôle des stocks", "Principes HACCP", "Organisation de la cuisine"]],
      ["Leadership", ["Travail d’équipe", "Formation du personnel", "Gestion du temps", "Résolution de problèmes", "Travail sous pression"]],
      ["Cuisine", ["Cuisine européenne", "Grill", "Service moderne", "Opérations à haut volume"]],
    ],
    educationKicker: "05 — FORMATION & LANGUES", educationTitle: <>La précision est<br />une façon de penser.</>,
    education: "Redouane est étudiant en 5e année de médecine dentaire à l’Université médicale d’État de Kazan. Il étudie la dentisterie générale, la chirurgie orale, la prothèse, l’endodontie et la dentisterie préventive.",
    languages: ["Arabe · Langue maternelle", "Anglais · Courant", "Français · Intermédiaire", "Russe · Intermédiaire"],
    footerKicker: "Sous-chef · Chef professionnel · Étudiant en médecine dentaire", footerTitle: <>Créons quelque chose<br /><em>d’inoubliable.</em></>,
    email: "Écrire à Redouane", back: "Retour en haut", downloadTitle: "Choisissez la langue du CV",
  },
};

export default function Home() {
  const [locale, setLocale] = useState<Locale>("en");
  const [filter, setFilter] = useState<"all" | DishType>("all");
  const [selected, setSelected] = useState<number | null>(null);
  const [cvOpen, setCvOpen] = useState(false);
  const t = copy[locale];

  useEffect(() => {
    document.documentElement.lang = locale;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setSelected(null); setCvOpen(false); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [locale]);

  const visible = dishImages.map((dish, index) => ({ ...dish, index })).filter((dish) => filter === "all" || dish.type === filter);

  return (
    <main>
      <header className="nav">
        <a className="brand" href="#top" aria-label="Redouane El Haloui portfolio">R<span>／</span>EH</a>
        <nav aria-label="Main navigation">
          {["story", "work", "journey", "skills"].map((id, index) => <a key={id} href={`#${id}`}>{t.nav[index]}</a>)}
        </nav>
        <div className="nav-tools">
          <div className="locale-switch" aria-label="Language">
            {(["en", "ru", "fr"] as Locale[]).map((lang) => <button key={lang} className={locale === lang ? "active" : ""} onClick={() => setLocale(lang)}>{lang.toUpperCase()}</button>)}
          </div>
          <button className="cv-nav" onClick={() => setCvOpen(true)}>{t.cv} ↓</button>
          <a className="nav-cta" href="#contact">{t.contact} ↓</a>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">{t.eyebrow}</p>
          <h1>{t.headline}</h1>
          <p className="intro">{t.intro}</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#work">{t.explore} <span>↓</span></a>
            <a className="text-link" href="#journey">{t.view} <span>↗</span></a>
          </div>
          <div className="hero-index"><span>{t.home}</span><span>{t.current}</span></div>
        </div>
        <div className="hero-image">
          <img src={asset("/images/chef-portrait.png")} alt="Redouane El Haloui in a black chef jacket" />
          <div className="image-badge"><strong>8+</strong><span>{t.badge}</span></div>
          <p className="vertical-label">{t.vertical}</p>
        </div>
      </section>

      <section className="marquee" aria-label="Chef specialties"><div>{t.marquee} &nbsp; {t.marquee}</div></section>

      <section className="story section" id="story">
        <div className="section-number">{t.storyKicker}</div>
        <div className="story-main"><p className="pull-quote">{t.quote}</p><h2>{t.storyTitle}</h2></div>
        <div className="story-copy">
          <p>{t.story1}</p><p>{t.story2}</p>
          <div className="fact-grid">{[["8+", t.facts[0]], ["04", t.facts[1]], ["07", t.facts[2]]].map(([number, label]) => <div key={label}><strong>{number}</strong><span>{label}</span></div>)}</div>
        </div>
      </section>

      <section className="work section" id="work">
        <div className="work-heading">
          <div><div className="section-number">{t.platesKicker}</div><h2>{t.platesTitle}</h2></div>
          <div className="filters" aria-label="Filter dishes">
            {(["all", "sea", "fire", "earth"] as const).map((key, index) => <button key={key} className={filter === key ? "active" : ""} onClick={() => setFilter(key)}>{t.filters[index]}</button>)}
          </div>
        </div>
        <div className="dish-grid">
          {visible.map((dish, shownIndex) => (
            <button className="dish-card" key={dish.src} onClick={() => setSelected(dish.index)}>
              <img src={dish.src} alt={t.dishes[dish.index][0]} />
              <span className="dish-overlay"><span className="dish-index">{String(shownIndex + 1).padStart(2, "0")}</span><span><strong>{t.dishes[dish.index][0]}</strong><small>{t.dishes[dish.index][1]}</small></span><span className="open-icon">↗</span></span>
            </button>
          ))}
        </div>
      </section>

      <section className="journey section" id="journey">
        <div className="journey-intro"><div className="section-number">{t.experienceKicker}</div><h2>{t.experienceTitle}</h2><p>{t.experienceIntro}</p></div>
        <ol className="timeline">
          {t.jobs.map((job, index) => <li key={job[0]}><span>{String(index + 1).padStart(2, "0")}</span><span className="job-name"><strong>{job[0]}</strong><em>{job[2]}</em></span><small>{job[1]}</small></li>)}
        </ol>
      </section>

      <section className="skills section" id="skills">
        <div className="skills-heading"><div className="section-number">{t.skillsKicker}</div><h2>{t.skillsTitle}</h2></div>
        <div className="skill-groups">
          {t.skillGroups.map((group, index) => <article key={group[0] as string}><span>0{index + 1}</span><h3>{group[0]}</h3><ul>{(group[1] as string[]).map((item) => <li key={item}>{item}</li>)}</ul></article>)}
        </div>
      </section>

      <section className="mind section">
        <div className="mind-image"><img src={asset("/images/salmon.jpeg")} alt="Salmon served on charred wood" /></div>
        <div className="mind-copy"><div className="section-number">{t.educationKicker}</div><h2>{t.educationTitle}</h2><p>{t.education}</p><div className="language-list">{t.languages.map((language) => <span key={language}>{language}</span>)}</div></div>
      </section>

      <footer id="contact">
        <p className="eyebrow">{t.footerKicker}</p><h2>{t.footerTitle}</h2>
        <div className="contact-links">
          <a className="button button-light" href="mailto:redoineelhaloui@yahoo.com">{t.email} ↗</a>
          <button className="download-main" onClick={() => setCvOpen(true)}>{t.cv} ↓</button>
          <a href="tel:+79869254199">+7 986 925 41 99</a><a href="mailto:redoineelhaloui@yahoo.com">redoineelhaloui@yahoo.com</a>
        </div>
        <div className="footer-bottom"><span>REDOUANE EL HALOUI © 2026</span><span>Rabat ↔ Kazan</span><a href="#top">{t.back} ↑</a></div>
      </footer>

      {selected !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={t.dishes[selected][0]} onClick={() => setSelected(null)}>
          <button aria-label="Close image" onClick={() => setSelected(null)}>×</button>
          <div className="lightbox-content" onClick={(event) => event.stopPropagation()}><img src={dishImages[selected].src} alt={t.dishes[selected][0]} /><div><h3>{t.dishes[selected][0]}</h3><p>{t.dishes[selected][1]}</p></div></div>
        </div>
      )}

      {cvOpen && (
        <div className="cv-modal" role="dialog" aria-modal="true" aria-label={t.downloadTitle} onClick={() => setCvOpen(false)}>
          <div className="cv-panel" onClick={(event) => event.stopPropagation()}>
            <button className="cv-close" aria-label="Close" onClick={() => setCvOpen(false)}>×</button>
            <p className="section-number">CV · PDF</p><h3>{t.downloadTitle}</h3>
            <div className="cv-options">
              <a href={cvFiles.en} download>English <span>EN ↘</span></a>
              <a href={cvFiles.ru} download>Русский <span>RU ↘</span></a>
              <a href={cvFiles.fr} download>Français <span>FR ↘</span></a>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
