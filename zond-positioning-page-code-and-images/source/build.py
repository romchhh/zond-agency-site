from pathlib import Path
from html import escape
from urllib.parse import quote
import json

root = Path(__file__).resolve().parent
out = root / 'dist'
out.mkdir(exist_ok=True)

services = [
    ('01', 'Аудит бізнесу', 'Вивчаємо продукт, бізнес-модель, цілі та наявну комунікацію. З’ясовуємо, яку роль бренд має відігравати для компанії й клієнтів.', 'positioning-02.png'),
    ('02', 'Аналіз ринку', 'Досліджуємо категорію та конкурентів: як вони себе описують, що обіцяють і де залишається простір для відмінності.', 'positioning-02.png'),
    ('03', 'Дослідження аудиторії', 'Визначаємо потреби, бар’єри та мотиви людей, для яких працює бренд. Спираємося на доступні дані й уточнюємо гіпотези з командою.', 'positioning-03.png'),
    ('04', 'Ціннісна пропозиція', 'Формулюємо користь продукту для конкретної аудиторії та причини, через які саме цей бренд варто обрати.', 'positioning-04.png'),
    ('05', 'Територія бренду', 'Знаходимо змістовний простір між потребою аудиторії, можливостями бізнесу й тим, що вже зайнято конкурентами.', 'positioning-01.png'),
    ('06', 'Характер і тон', 'Описуємо характер бренду та принципи його голосу, щоб візуальні й текстові рішення звучали послідовно.', 'positioning-03.png'),
    ('07', 'Ключове повідомлення', 'Перекладаємо стратегічну ідею на зрозуміле формулювання: що ми говоримо людям і чому це має значення.', 'positioning-05.png'),
    ('08', 'Стратегічна платформа', 'Збираємо висновки в документ із логікою позиціонування та рекомендаціями для айдентики, сайту й комунікації.', 'positioning-06.png'),
]
needs = [
    ('Новий бренд', 'Перед запуском потрібно чітко визначити, для кого існує бізнес і яке місце він займе у своїй категорії.'),
    ('Ребрендинг', 'Компанія змінилася, а старий образ уже не відображає продукт, масштаб або амбіції.'),
    ('Новий ринок', 'Потрібно адаптувати цінність бренду до іншої аудиторії та конкурентного середовища.'),
    ('Розрізнена комунікація', 'Сайт, реклама й команда говорять по-різному, а клієнту складно зрозуміти головну перевагу.'),
]
steps = [
    ('01', 'Знайомство', 'Обговорюємо задачі бізнесу, продукт, аудиторію та рішення, які має підтримати стратегія.'),
    ('02', 'Аудит', 'Збираємо матеріали бренду, аналізуємо наявні повідомлення та розмовляємо з командою.'),
    ('03', 'Дослідження', 'Вивчаємо ринок, конкурентів і поведінку аудиторії в межах погодженого обсягу.'),
    ('04', 'Гіпотези', 'Формуємо кілька стратегічних напрямів та оцінюємо їхню відповідність бізнесу.'),
    ('05', 'Позиціонування', 'Уточнюємо цінність, відмінність, характер і центральне повідомлення бренду.'),
    ('06', 'Впровадження', 'Готуємо платформу та рекомендації для дизайну, текстів і наступних точок контакту.'),
]
cases = [
    ('Carbit', 'Сервіс пошуку авто', 'carbit.gif', 'https://zond-carbit-case.zond-des.chatgpt.site'),
    ('Нове місто', 'Девелопмент', 'nove.gif', 'https://zond-nove-misto-case.zond-des.chatgpt.site'),
    ('Київ — місто кожного', 'Міський бренд', 'kyiv.jpg', 'https://zond-kyiv-tourism-case.zond-des.chatgpt.site'),
    ('Digital Residence', 'Нерухомість', 'digital.gif', 'https://zond-digital-residence-case.zond-des.chatgpt.site'),
]
reviews = [
    ('01', '«Ми змогли коротко пояснити, чому клієнти обирають нас і чим наш підхід відрізняється від інших пропозицій».', 'Команда продукту'),
    ('02', '«Стратегія допомогла погодити один напрям для сайту, презентацій і рекламних повідомлень».', 'Команда бренду'),
    ('03', '«Ми побачили свою категорію очима клієнтів і зрозуміли, на чому варто зосередити комунікацію».', 'Команда компанії'),
    ('04', '«Після роботи з позиціонуванням стало легше ставити задачі дизайнеру й оцінювати нові ідеї».', 'Команда сервісу'),
]
deliverables = [
    'Аудит поточної комунікації та продукту.',
    'Огляд категорії й конкурентного поля.',
    'Опис цільових аудиторій та їхніх потреб.',
    'Ціннісну пропозицію бренду.',
    'Стратегічну ідею та формулу позиціонування.',
    'Ключові відмінності й аргументи довіри.',
    'Характер бренду та принципи тону голосу.',
    'Ключове повідомлення й рекомендації для комунікації.',
    'Презентацію стратегічної платформи.',
]
faq = [
    ('Що таке позиціонування бренду?', 'Позиціонування — це чітка відповідь на питання, для кого існує бренд, яку цінність він створює та чим відрізняється від альтернатив. Воно допомагає приймати послідовні рішення в продукті, дизайні та комунікації.'),
    ('Скільки коштує розробка позиціонування?', 'Вартість залежить від глибини дослідження, кількості ринків, аудиторій і продуктів. Після знайомства з бізнесом ми визначимо потрібний обсяг роботи та підготуємо кошторис.'),
    ('Скільки часу займає робота?', 'Термін залежить від доступності даних, кількості інтерв’ю та швидкості погодження. Ми фіксуємо етапи й графік у пропозиції перед стартом.'),
    ('Чим позиціонування відрізняється від слогана?', 'Позиціонування задає стратегічний напрям і пояснює цінність бренду. Слоган — короткий комунікаційний вислів, який може передавати частину цієї ідеї, але не замінює саму стратегію.'),
    ('Чи потрібне позиціонування перед дизайном?', 'Так, якщо бренд ще не визначив, до кого звертається та яку цінність має підкреслювати. Чітка стратегічна основа допомагає створити айдентику, яка підтримує бізнес-задачу.'),
    ('Чи можна замовити тільки позиціонування?', 'Так. Стратегічна платформа може бути окремим результатом для вашої команди або основою наступних робіт: неймінгу, айдентики, сайту й рекламної комунікації.'),
    ('Чи працюєте ви з існуючим брендом?', 'Так. Ми можемо уточнити чинне позиціонування, знайти причину розриву між образом і продуктом або сформувати новий напрям перед ребрендингом.'),
]
editorial = [
    ('Для чого бізнесу позиціонування?', 'Коли бренд намагається говорити одразу з усіма, його повідомлення стає розмитим. Позиціонування допомагає обрати аудиторію, зрозуміти її задачу й сформулювати значущу цінність.', 'Це робочий орієнтир для команди: він допомагає оцінювати ідеї, тримати спільний напрям і пояснювати продукт однаково в різних каналах.'),
    ('Як знайти відмінність від конкурентів?', 'Відмінність не обов’язково означає властивість, якої більше ні в кого немає. Вона може виникати з поєднання продукту, сервісу, характеру й способу говорити про користь.', 'Ми порівнюємо обіцянки в категорії з тим, що бізнес здатен підтвердити на практиці. Так з’являється позиція, якій можна довіряти.'),
    ('Що містить стратегічна платформа?', 'Платформа описує аудиторію, її контекст, ціннісну пропозицію, характер бренду, ключові відмінності та центральне повідомлення.', 'Точний склад залежить від задачі: для нового продукту й компанії з кількома напрямами потрібна різна глибина опрацювання.'),
    ('Як стратегія переходить у дизайн?', 'Позиціонування задає критерії для назви, айдентики, сайту, контенту й рекламних матеріалів. Команда розуміє, що має підкреслити кожне рішення.', 'Коли смислова основа сформульована, візуальна мова допомагає її побачити, а комунікація — почути в кожній точці контакту.'),
]

subject = quote('Позиціонування — запит')
contact = f'mailto:ask@zond.agency?subject={subject}'

def service_card(row):
    num, title, body, img = row
    return f'<article class="service-card"><div class="service-visual"><img src="assets/{img}" alt="Ілюстрація етапу: {escape(title)}" loading="lazy"></div><div class="service-index">{num}</div><div class="service-copy"><h3>{title}</h3><p>{body}</p></div></article>'

def case_card(row):
    name, category, img, url = row
    return f'<a class="case-card" href="{url}" target="_blank" rel="noopener noreferrer"><div class="case-cover"><img src="assets/{img}" alt="Кейс {escape(name)}" loading="lazy"></div><div class="case-meta"><div><span>{category}</span><h3>{name}</h3></div><b aria-hidden="true">↗</b></div></a>'

parts = [f'''<!doctype html><html lang="uk"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Позиціонування бренду для бізнесу — ZOND</title><meta name="description" content="Розробляємо позиціонування бренду: дослідження бізнесу, ринку й аудиторії, ціннісна пропозиція, стратегічна ідея та рекомендації до впровадження."><link rel="icon" type="image/svg+xml" href="assets/zond.svg"><link rel="stylesheet" href="style.css"></head><body><a class="skip" href="#main">Перейти до вмісту</a><header class="site-header"><div class="header-pill"><a class="logo" href="https://www.zond.agency" aria-label="ZOND — головна"><img src="assets/zond.svg" alt="ZOND" width="100" height="35"></a><nav aria-label="Головна навігація"><a href="#service">Послуга</a><a href="#cases">Проєкти</a><a href="#process">Процес</a><a href="#faq">FAQ</a></nav><a class="header-action" href="{contact}">Консультація ↗</a></div></header><main id="main"><section class="hero"><div class="hero-copy"><p class="eyebrow">Послуги / Позиціонування</p><h1>Знайдемо місце<br>вашого бренду<br><span>в головах людей.</span></h1><div class="hero-bottom"><p class="lead">Формуємо позиціонування, яке пояснює цінність бізнесу й допомагає виділитися у своїй категорії.</p><p>Від дослідження аудиторії та конкурентів — до чіткої ідеї, характеру й повідомлень бренду.</p><a class="orange-button" href="{contact}">Обговорити проєкт <span>↗</span></a></div></div><figure class="hero-image"><img src="assets/positioning-01.png" alt="Стратегічна робота над позиціонуванням бренду: картки, дослідницькі матеріали та графічні форми" fetchpriority="high"><figcaption>Чітка ідея стає основою кожного рішення.</figcaption></figure></section><div class="page-body">''']
parts.append('<section class="section metrics"><div class="wrap"><p class="section-label">01 / ПІДХІД</p><h2>Одна ідея. Багато точок контакту.</h2><div class="metrics-grid">'+''.join(f'<div class="metric"><strong>{num}</strong><span>{body}</span></div>' for num,body in [('01','чітка позиція на ринку'),('03','опори: бізнес, аудиторія, конкуренти'),('06','кроків від аудиту до впровадження'),('04','приклади застосування: сайт, реклама, соцмережі, продукт')])+'</div></div></section>')
parts.append('<section id="service" class="section"><div class="wrap"><p class="section-label">02 / ПОСЛУГА</p><div class="section-heading"><h2>Що входить у позиціонування</h2><p>Починаємо з фактів про бізнес і ринок. З них формуємо стратегічний напрям, який команда зможе використовувати в роботі щодня.</p></div><div class="services-grid">'+''.join(map(service_card, services))+'</div></div></section>')
parts.append('<section class="section"><div class="wrap"><p class="section-label">03 / КОЛИ ЦЕ АКТУАЛЬНО</p><h2>Коли потрібне позиціонування</h2><div class="need-grid">'+''.join(f'<article><span>0{i}</span><h3>{title}</h3><p>{body}</p></article>' for i,(title,body) in enumerate(needs,1))+'</div></div></section>')
parts.append('<section class="feature"><div class="wrap feature-grid"><div><p class="section-label">ОСНОВА ДЛЯ РІШЕНЬ</p><h2>Знайти своє місце.<br><em>Зайняти його впевнено.</em></h2></div><p>Сильне позиціонування виростає з реальної цінності продукту. Воно допомагає клієнту зробити вибір, а команді — говорити одним голосом.</p></div></section>')
parts.append('<section id="cases" class="section"><div class="wrap"><p class="section-label">04 / ПРОЄКТИ</p><div class="section-heading"><h2>Бренди з виразним характером</h2><p>Добірка суміжних кейсів ZOND. Деталі задачі та виконаних робіт наведені на сторінці кожного проєкту.</p></div><div class="cases-grid">'+''.join(map(case_card,cases))+'</div></div></section>')
parts.append('<section class="section review-section"><div class="wrap"><p class="section-label">05 / ЗВОРОТНИЙ ЗВ’ЯЗОК</p><div class="section-heading"><h2>Що змінюється для команди</h2><p>Демонстраційні тексти для макета. Це не опубліковані відгуки клієнтів; перед публічним використанням замініть їх підтвердженими цитатами.</p></div><div class="reviews-grid">'+''.join(f'<blockquote class="review"><span>ПРИКЛАД ВІДГУКУ {num}</span><p>{quote}</p><footer>{role}<small>Текст для погодження</small></footer></blockquote>' for num,quote,role in reviews)+'</div></div></section>')
parts.append('<section class="section"><div class="wrap"><p class="section-label">06 / ЗАСТОСУВАННЯ</p><div class="section-heading"><h2>Стратегія стає видимою.</h2><p>Ілюстративні концепти показують, як ідея бренду може перейти в упаковку, простір і щоденну комунікацію. Це не фотографії клієнтських робіт.</p></div><div class="use-gallery">'+''.join(f'<figure><img src="assets/{img}" alt="Ілюстративне застосування позиціонування: {alt}" loading="lazy"><figcaption>{caption}</figcaption></figure>' for img,alt,caption in [('positioning-04.png','упаковка','Продукт'),('positioning-05.png','простір і навігація','Простір'),('positioning-06.png','брендовані матеріали','Комунікація')])+'</div></div></section>')
parts.append('<section id="process" class="section"><div class="wrap"><p class="section-label">07 / ПРОЦЕС</p><h2>Як ми працюємо</h2><div class="process-grid">'+''.join(f'<article><span>{num}</span><h3>{title}</h3><p>{body}</p></article>' for num,title,body in steps)+'</div></div></section>')
parts.append('<section class="section editorial"><div class="wrap"><p class="section-label">08 / ДЕТАЛЬНІШЕ</p><h2>Позиціонування дає напрям розвитку.</h2><div class="editorial-grid">'+''.join(f'<article><h3>{title}</h3><p>{first}</p><p>{second}</p></article>' for title,first,second in editorial)+'</div></div></section>')
parts.append('<section class="section deliverables"><div class="wrap"><p class="section-label">09 / РЕЗУЛЬТАТ</p><h2>Що ви отримуєте</h2><div class="deliverable-grid">'+''.join(f'<div><span>{i:02}</span><p>{item}</p></div>' for i,item in enumerate(deliverables,1))+'</div><p class="fineprint">Точний склад результату погоджуємо перед стартом, відповідно до задачі бренду.</p></div></section>')
parts.append('<section id="faq" class="section faq"><div class="wrap"><p class="section-label">10 / FAQ</p><h2>Відповідаємо на запитання</h2><div class="faq-list">'+''.join(f'<details><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>' for question,answer in faq)+'</div></div></section>')
parts.append(f'''<section class="section cta"><div class="wrap"><div class="cta-panel"><p class="section-label">ПОЧНІМО З ГОЛОВНОГО</p><h2>Знайдемо ідею,<br>яку впізнаватимуть.</h2><p>Розкажіть про свій бізнес і задачі. Ми запропонуємо формат стратегічної роботи.</p><a class="orange-button" href="{contact}">Обговорити проєкт <span>↗</span></a></div></div></section></div></main><footer class="site-footer"><a href="https://www.zond.agency"><img src="assets/zond.svg" width="90" height="32" alt="ZOND"></a><span>Позиціонування · Стратегія бренду</span><a href="mailto:ask@zond.agency">ask@zond.agency ↗</a></footer></body></html>''')
(out/'index.html').write_text(''.join(parts), encoding='utf-8')
(root/'README.md').write_text('Позиціонування / ZOND\nВідкрийте dist/index.html. Усі зображення та шрифт зберігаються локально в dist/assets. Статична адаптивна сторінка без залежностей.\nІлюстративні фотографії згенеровано для макета; чотири обкладинки суміжних кейсів належать відповідним кейсам ZOND. Відгуки демонстраційні й потребують заміни перед публікацією.\n', encoding='utf-8')
(root/'asset-sources.json').write_text(json.dumps({'reference':'https://zond-naming-service.zond-des.chatgpt.site/','original_visuals':[f'assets/positioning-{i:02}.png' for i in range(1,7)],'case_covers':{c[2]:c[3] for c in cases}},ensure_ascii=False,indent=2),encoding='utf-8')
print('Wrote',out/'index.html')
