from pathlib import Path
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, HRFlowable, KeepTogether, PageBreak
)

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "output" / "pdf"
WEB = ROOT / "public" / "cv"
OUT.mkdir(parents=True, exist_ok=True)
WEB.mkdir(parents=True, exist_ok=True)

FONT_DIR = Path("/System/Library/Fonts/Supplemental")
pdfmetrics.registerFont(TTFont("CVRegular", str(FONT_DIR / "Arial Unicode.ttf")))
pdfmetrics.registerFont(TTFont("CVBold", str(FONT_DIR / "Arial Bold.ttf")))

INK = colors.HexColor("#1B1B1B")
ACCENT = colors.HexColor("#8A5700")
MUTED = colors.HexColor("#5B5B5B")
LINE = colors.HexColor("#C9C9C9")

COMMON = {
    "email": "redoineelhaloui@yahoo.com",
    "phone": "+7 986 925 41 99",
    "name": "REDOUANE EL HALOUI",
}

DATA = {
    "en": {
        "file": "Redouane-El-Haloui-CV-English.pdf",
        "headline": "SOUS CHEF | PROFESSIONAL CHEF",
        "location": "Rabat, Morocco | Currently in Kazan, Russia",
        "summary_h": "PROFESSIONAL SUMMARY",
        "summary": "Culinary professional with more than 8 years of kitchen experience, including 4 years in restaurants across Russia. Experienced in high-volume service, mise en place, recipe execution, station organization, inventory control, food safety and team coordination. Recognized for discipline, consistency and calm performance under pressure. Currently completing the fifth year of a Dentistry degree at Kazan State Medical University.",
        "skills_h": "CORE COMPETENCIES",
        "skills": [
            "Kitchen Operations: Food preparation, mise en place, menu execution, station organization",
            "Food Safety: Hygiene standards, HACCP principles, cleaning and sanitation",
            "Operations: Inventory control, high-volume service, quality and portion consistency",
            "Leadership: Teamwork, staff support and training, time management, problem solving",
            "Cuisine: European cuisine, grill and modern restaurant service",
        ],
        "experience_h": "PROFESSIONAL EXPERIENCE",
        "continued": "PROFESSIONAL EXPERIENCE - CONTINUED",
        "jobs": [
            ("Duran", "Chef | Russia | 8 months", [
                "Prepared ingredients and cooked dishes according to kitchen requirements.",
                "Maintained an organized station and worked efficiently with the service team.",
            ]),
            ("Leto", "Chef | Russia | 8 months", [
                "Completed food preparation and cooking for daily restaurant service.",
                "Maintained workstation hygiene, organization and readiness throughout service.",
            ]),
            ("Hemingway", "Kitchen Professional | Russia | 8 months", [
                "Prepared and plated meals according to restaurant recipes and presentation standards.",
                "Supported kitchen operations during peak service periods.",
            ]),
            ("Endorphin", "Kitchen Professional | Russia | 7 months", [
                "Supported menu preparation and daily production requirements.",
                "Maintained consistency, quality and station organization during service.",
            ]),
            ("Jungle", "Kitchen Professional | Russia | 6 months", [
                "Prepared hot dishes in a high-volume kitchen environment.",
                "Coordinated timing and service with the wider kitchen team.",
            ]),
            ("Top Hop", "Kitchen Professional | Russia | 5 months", [
                "Prepared dishes according to restaurant standards and recipes.",
                "Organized food preparation and maintained cleanliness and food safety.",
            ]),
            ("Refettorio", "Kitchen Professional | Russia | 6 months", [
                "Supported daily kitchen operations and busy service periods.",
                "Maintained food quality and presentation while coordinating with kitchen staff.",
            ]),
        ],
        "education_h": "EDUCATION",
        "education": "<b>Dentistry - Fifth Year Student</b><br/>Kazan State Medical University (KSMU), Kazan, Russia<br/>Relevant studies: General Dentistry, Oral Surgery, Prosthodontics, Endodontics, Preventive Dentistry",
        "languages_h": "LANGUAGES",
        "languages": "Arabic - Native | English - Fluent | French - Intermediate | Russian - Intermediate",
        "additional_h": "PROFESSIONAL AVAILABILITY",
        "additional": "Based in Kazan, Russia. Open to professional kitchen opportunities, restaurant teams and culinary collaborations.",
    },
    "fr": {
        "file": "Redouane-El-Haloui-CV-Francais.pdf",
        "headline": "SOUS-CHEF | CHEF PROFESSIONNEL",
        "location": "Rabat, Maroc | Actuellement à Kazan, Russie",
        "summary_h": "PROFIL PROFESSIONNEL",
        "summary": "Professionnel de la cuisine avec plus de 8 ans d'expérience, dont 4 ans dans des restaurants en Russie. Expérience du service à haut volume, de la mise en place, de l'exécution des recettes, de l'organisation du poste, du contrôle des stocks, de la sécurité alimentaire et de la coordination d'équipe. Reconnu pour sa discipline, sa régularité et son calme sous pression. Actuellement en 5e année de médecine dentaire à l'Université médicale d'État de Kazan.",
        "skills_h": "COMPÉTENCES CLÉS",
        "skills": [
            "Opérations: Préparation, mise en place, exécution des menus, organisation du poste",
            "Sécurité alimentaire: Hygiène, principes HACCP, nettoyage et désinfection",
            "Gestion: Contrôle des stocks, service à haut volume, qualité et régularité des portions",
            "Leadership: Travail d'équipe, soutien et formation, gestion du temps, résolution de problèmes",
            "Cuisine: Cuisine européenne, grill et service de restaurant moderne",
        ],
        "experience_h": "EXPÉRIENCE PROFESSIONNELLE",
        "continued": "EXPÉRIENCE PROFESSIONNELLE - SUITE",
        "jobs": [
            ("Duran", "Chef | Russie | 8 mois", ["Préparation des ingrédients et cuisson selon les exigences de la cuisine.", "Organisation du poste et travail efficace avec l'équipe de service."]),
            ("Leto", "Chef | Russie | 8 mois", ["Préparation et cuisson pour le service quotidien du restaurant.", "Maintien de l'hygiène, de l'organisation et de la disponibilité du poste."]),
            ("Hemingway", "Professionnel de cuisine | Russie | 8 mois", ["Préparation et dressage selon les recettes et standards de présentation.", "Soutien des opérations pendant les périodes de pointe."]),
            ("Endorphin", "Professionnel de cuisine | Russie | 7 mois", ["Participation à la mise en place du menu et à la production quotidienne.", "Maintien de la régularité, de la qualité et de l'organisation pendant le service."]),
            ("Jungle", "Professionnel de cuisine | Russie | 6 mois", ["Préparation de plats chauds dans une cuisine à haut volume.", "Coordination du rythme et du service avec l'équipe."]),
            ("Top Hop", "Professionnel de cuisine | Russie | 5 mois", ["Préparation selon les recettes et standards du restaurant.", "Organisation de la mise en place, propreté et sécurité alimentaire."]),
            ("Refettorio", "Professionnel de cuisine | Russie | 6 mois", ["Soutien des opérations quotidiennes et des services chargés.", "Maintien de la qualité et du dressage en coordination avec l'équipe."]),
        ],
        "education_h": "FORMATION",
        "education": "<b>Médecine dentaire - Étudiant en 5e année</b><br/>Université médicale d'État de Kazan (KSMU), Kazan, Russie<br/>Études: Dentisterie générale, Chirurgie orale, Prothèse, Endodontie, Dentisterie préventive",
        "languages_h": "LANGUES",
        "languages": "Arabe - Langue maternelle | Anglais - Courant | Français - Intermédiaire | Russe - Intermédiaire",
        "additional_h": "DISPONIBILITÉ",
        "additional": "Basé à Kazan, Russie. Disponible pour des opportunités en cuisine professionnelle, des équipes de restaurant et des collaborations culinaires.",
    },
    "ru": {
        "file": "Redouane-El-Haloui-CV-Russian.pdf",
        "headline": "СУ-ШЕФ | ПРОФЕССИОНАЛЬНЫЙ ПОВАР",
        "location": "Рабат, Марокко | Сейчас в Казани, Россия",
        "summary_h": "ПРОФЕССИОНАЛЬНЫЙ ПРОФИЛЬ",
        "summary": "Профессиональный повар с опытом работы более 8 лет, включая 4 года в ресторанах России. Опыт работы при высокой загрузке, подготовки продуктов, выполнения рецептур, организации станции, контроля запасов, пищевой безопасности и координации команды. Дисциплинирован, поддерживает стабильное качество и спокойно работает под давлением. Студент 5 курса стоматологического факультета Казанского государственного медицинского университета.",
        "skills_h": "КЛЮЧЕВЫЕ КОМПЕТЕНЦИИ",
        "skills": [
            "Работа кухни: Подготовка продуктов, mise en place, выполнение меню, организация станции",
            "Пищевая безопасность: Санитарные нормы, принципы HACCP, уборка и дезинфекция",
            "Операции: Контроль запасов, высокая загрузка, стабильность качества и порций",
            "Лидерство: Командная работа, поддержка и обучение персонала, управление временем",
            "Кухня: Европейская кухня, гриль и современный ресторанный сервис",
        ],
        "experience_h": "ОПЫТ РАБОТЫ",
        "continued": "ОПЫТ РАБОТЫ - ПРОДОЛЖЕНИЕ",
        "jobs": [
            ("Duran", "Повар | Россия | 8 месяцев", ["Подготовка ингредиентов и приготовление блюд согласно требованиям кухни.", "Организация станции и эффективная работа с командой сервиса."]),
            ("Leto", "Повар | Россия | 8 месяцев", ["Подготовка продуктов и приготовление блюд для ежедневного сервиса.", "Поддержание гигиены, порядка и готовности рабочего места."]),
            ("Hemingway", "Работник кухни | Россия | 8 месяцев", ["Приготовление и подача блюд по рецептурам и стандартам ресторана.", "Поддержка работы кухни в часы пик."]),
            ("Endorphin", "Работник кухни | Россия | 7 месяцев", ["Подготовка меню и выполнение ежедневного производственного плана.", "Поддержание стабильного качества и порядка во время сервиса."]),
            ("Jungle", "Работник кухни | Россия | 6 месяцев", ["Приготовление горячих блюд на кухне с высокой загрузкой.", "Координация времени отдачи и сервиса с командой."]),
            ("Top Hop", "Работник кухни | Россия | 5 месяцев", ["Приготовление блюд по рецептурам и стандартам ресторана.", "Организация подготовки, чистота и соблюдение пищевой безопасности."]),
            ("Refettorio", "Работник кухни | Россия | 6 месяцев", ["Поддержка ежедневной работы кухни и загруженных смен.", "Контроль качества и подачи, взаимодействие с персоналом кухни."]),
        ],
        "education_h": "ОБРАЗОВАНИЕ",
        "education": "<b>Стоматология - студент 5 курса</b><br/>Казанский государственный медицинский университет (КГМУ), Казань, Россия<br/>Дисциплины: Общая стоматология, Хирургическая стоматология, Ортопедическая стоматология, Эндодонтия, Профилактическая стоматология",
        "languages_h": "ЯЗЫКИ",
        "languages": "Арабский - Родной | Английский - Свободно | Французский - Средний | Русский - Средний",
        "additional_h": "ПРОФЕССИОНАЛЬНАЯ ДОСТУПНОСТЬ",
        "additional": "Нахожусь в Казани, Россия. Рассматриваю профессиональные вакансии на кухне, работу в ресторанных командах и кулинарные проекты.",
    },
}

styles = {
    "name": ParagraphStyle("name", fontName="CVBold", fontSize=22, leading=24, textColor=INK, alignment=TA_CENTER, spaceAfter=4),
    "headline": ParagraphStyle("headline", fontName="CVBold", fontSize=10, leading=13, textColor=ACCENT, alignment=TA_CENTER, spaceAfter=5),
    "contact": ParagraphStyle("contact", fontName="CVRegular", fontSize=8.3, leading=11, textColor=MUTED, alignment=TA_CENTER),
    "section": ParagraphStyle("section", fontName="CVBold", fontSize=9.8, leading=12, textColor=INK, spaceBefore=7, spaceAfter=4),
    "body": ParagraphStyle("body", fontName="CVRegular", fontSize=8.2, leading=10.8, textColor=INK, spaceAfter=2),
    "job": ParagraphStyle("job", fontName="CVBold", fontSize=9.2, leading=11.5, textColor=INK, spaceAfter=1),
    "meta": ParagraphStyle("meta", fontName="CVRegular", fontSize=8.1, leading=10.5, textColor=ACCENT, spaceAfter=3),
    "bullet": ParagraphStyle("bullet", fontName="CVRegular", fontSize=8.0, leading=10.2, textColor=INK, leftIndent=9, firstLineIndent=-9, spaceAfter=1),
    "footer": ParagraphStyle("footer", fontName="CVRegular", fontSize=7.2, leading=9, textColor=MUTED),
}

def header_footer(canvas, doc):
    canvas.saveState()
    canvas.setStrokeColor(LINE)
    canvas.line(18 * mm, 13 * mm, A4[0] - 18 * mm, 13 * mm)
    canvas.setFont("CVRegular", 7)
    canvas.setFillColor(MUTED)
    canvas.drawString(18 * mm, 8.5 * mm, COMMON["name"])
    canvas.drawRightString(A4[0] - 18 * mm, 8.5 * mm, f"{doc.page}")
    canvas.restoreState()

def section(title):
    return [
        Spacer(1, 0.8 * mm),
        Paragraph(title, styles["section"]),
        HRFlowable(width="100%", thickness=0.6, color=ACCENT, spaceAfter=4),
    ]

def build_cv(data):
    target = OUT / data["file"]
    doc = SimpleDocTemplate(
        str(target), pagesize=A4, rightMargin=18 * mm, leftMargin=18 * mm,
        topMargin=16 * mm, bottomMargin=18 * mm, title=f"{COMMON['name']} - CV",
        author=COMMON["name"], subject=data["headline"],
    )
    story = [
        Paragraph(COMMON["name"], styles["name"]),
        Paragraph(data["headline"], styles["headline"]),
        Paragraph(f"{COMMON['email']} | {COMMON['phone']}<br/>{data['location']}", styles["contact"]),
        Spacer(1, 3 * mm),
    ]
    story += section(data["summary_h"])
    story.append(Paragraph(data["summary"], styles["body"]))
    story += section(data["skills_h"])
    story.append(Paragraph(" | ".join(data["skills"]), styles["body"]))
    story += section(data["experience_h"])
    for company, meta, bullets in data["jobs"]:
        block = [Paragraph(company, styles["job"]), Paragraph(meta, styles["meta"])]
        block.append(Paragraph(f"- {' '.join(bullets)}", styles["bullet"]))
        block.append(Spacer(1, 2.4 * mm))
        story.append(KeepTogether(block))
    story.append(KeepTogether(section(data["education_h"]) + [Paragraph(data["education"], styles["body"])]))
    story.append(KeepTogether(section(data["languages_h"]) + [Paragraph(data["languages"], styles["body"])]))
    doc.build(story, onFirstPage=header_footer, onLaterPages=header_footer)
    (WEB / data["file"]).write_bytes(target.read_bytes())
    return target

for language in ("en", "ru", "fr"):
    build_cv(DATA[language])
