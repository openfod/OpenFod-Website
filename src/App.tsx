import { useEffect, useRef, useState, type ReactNode } from 'react'
import { copy, DOCS_URL, GITHUB_URL, type Lang } from './i18n'
import { CloudMotif, CornerFrame, GoldDivider } from './ornaments'
import heroArt from './assets/hero-landscape.png'
import sealArt from './assets/dragon-seal.png'
import weiArt from './assets/faction-wei.png'
import shuArt from './assets/faction-shu.png'
import wuArt from './assets/faction-wu.png'
import cityArt from './assets/scene-city.png'
import siegeArt from './assets/scene-siege.png'
import courtArt from './assets/scene-court.png'

const LANG_KEY = 'openfod-lang'

function readLang(): Lang {
  const saved = localStorage.getItem(LANG_KEY)
  if (saved === 'en' || saved === 'zh') return saved
  return 'zh'
}

function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-in')
          io.disconnect()
        }
      },
      { threshold: 0.14, rootMargin: '0px 0px -8% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

export default function App() {
  const [lang, setLang] = useState<Lang>(readLang)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [booting, setBooting] = useState(true)
  const t = copy[lang]

  useEffect(() => {
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en'
    localStorage.setItem(LANG_KEY, lang)
  }, [lang])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const id = window.setTimeout(() => setBooting(false), 1600)
    return () => window.clearTimeout(id)
  }, [])

  const toggleLang = () => setLang((prev) => (prev === 'zh' ? 'en' : 'zh'))

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <div className={`boot ${booting ? '' : 'is-done'}`} aria-hidden={!booting}>
        <img src={sealArt} alt="" />
        <p>OpenFoD</p>
      </div>

      <div className="grain" aria-hidden="true" />

      <header className={`nav ${scrolled ? 'is-solid' : ''} ${menuOpen ? 'is-open' : ''}`}>
        <a className="nav__brand" href="#top" onClick={closeMenu}>
          <img src={sealArt} alt="" />
          <span>
            <strong>{t.brand}</strong>
            <em>{t.brandSub}</em>
          </span>
        </a>

        <button
          className="nav__burger"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <i />
          <i />
        </button>

        <nav className="nav__links">
          <a href="#chronicle" onClick={closeMenu}>
            {t.nav.chronicle}
          </a>
          <a href="#systems" onClick={closeMenu}>
            {t.nav.systems}
          </a>
          <a href="#realms" onClick={closeMenu}>
            {t.nav.realms}
          </a>
          <a href="#revival" onClick={closeMenu}>
            {t.nav.revival}
          </a>
          <a href={DOCS_URL} onClick={closeMenu}>
            {t.nav.docs}
          </a>
          <button className="lang-toggle" type="button" onClick={toggleLang}>
            {lang === 'zh' ? 'EN' : '中'}
          </button>
          <a className="nav__cta" href={GITHUB_URL} target="_blank" rel="noreferrer">
            {t.nav.source}
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero__art">
            <img src={heroArt} alt="" />
          </div>
          <div className="hero__shade" />
          <p className="hero__side">{t.hero.side}</p>

          <div className="hero__inner">
            <img className="hero__seal" src={sealArt} alt="" />
            <p className="kicker">{t.hero.kicker}</p>
            <h1>{t.hero.title}</h1>
            <p className="hero__cn">{t.hero.chinese}</p>
            <GoldDivider />
            <p className="hero__en">{t.hero.english}</p>
            <p className="hero__lead">{t.hero.lead}</p>
            <div className="hero__actions">
              <a className="btn btn--gold" href={DOCS_URL}>
                {t.hero.ctaDocs}
              </a>
              <a className="btn btn--ghost" href={GITHUB_URL} target="_blank" rel="noreferrer">
                {t.hero.ctaSource}
              </a>
            </div>
          </div>

          <a className="hero__scroll" href="#chronicle">
            <span />
            {t.hero.scroll}
          </a>
        </section>

        <section className="stats">
          {t.stats.map((item) => (
            <div className="stats__item" key={item.label}>
              <b>{item.num}</b>
              <span>{item.label}</span>
            </div>
          ))}
        </section>

        <section className="section chronicle" id="chronicle">
          <div className="section__frame">
            <CornerFrame className="tl" />
            <CornerFrame className="tr" />
            <CornerFrame className="bl" />
            <CornerFrame className="br" />
          </div>
          <div className="chronicle__grid">
            <Reveal>
              <p className="kicker">{t.chronicle.kicker}</p>
              <h2>{t.chronicle.title}</h2>
              <GoldDivider />
              <p>{t.chronicle.p1}</p>
              <p>{t.chronicle.p2}</p>
              <p>{t.chronicle.p3}</p>
            </Reveal>
            <Reveal className="chronicle__art" delay={120}>
              <figure>
                <img src={courtArt} alt="" />
                <figcaption>
                  <q>{t.chronicle.quote}</q>
                  <cite>{t.chronicle.quoteBy}</cite>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </section>

        <section className="section systems" id="systems">
          <Reveal className="section__head">
            <p className="kicker">{t.systems.kicker}</p>
            <h2>{t.systems.title}</h2>
            <GoldDivider />
            <p className="lede">{t.systems.lead}</p>
          </Reveal>

          <div className="feature-mosaic">
            <Reveal className="mosaic__hero">
              <img src={cityArt} alt="" />
              <div>
                <em>{t.systems.items[0].en}</em>
                <h3>{t.systems.items[0].title}</h3>
                <p>{t.systems.items[0].body}</p>
              </div>
            </Reveal>
            <Reveal className="mosaic__side" delay={80}>
              <img src={siegeArt} alt="" />
              <div>
                <em>{t.systems.items[3].en}</em>
                <h3>{t.systems.items[3].title}</h3>
                <p>{t.systems.items[3].body}</p>
              </div>
            </Reveal>
          </div>

          <div className="system-cards">
            {t.systems.items.slice(1, 3).map((item, i) => (
              <Reveal className="system-card" delay={i * 80} key={item.title}>
                <em>{item.en}</em>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="tags">
            <span className="tags__label">{t.systems.tagsLabel}</span>
            <ul>
              {t.systems.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </Reveal>
        </section>

        <section className="section realms" id="realms">
          <Reveal className="section__head">
            <p className="kicker">{t.realms.kicker}</p>
            <h2>{t.realms.title}</h2>
            <GoldDivider />
            <p className="lede">{t.realms.lead}</p>
          </Reveal>

          <div className="realm-grid">
            {[
              { art: weiArt, tone: 'wei' },
              { art: shuArt, tone: 'shu' },
              { art: wuArt, tone: 'wu' },
            ].map((meta, i) => {
              const card = t.realms.cards[i]
              return (
                <Reveal className={`realm realm--${meta.tone}`} delay={i * 90} key={card.name}>
                  <img src={meta.art} alt="" />
                  <div className="realm__veil" />
                  <div className="realm__copy">
                    <span className="realm__glyph">{card.name}</span>
                    <p className="realm__clan">{card.clan}</p>
                    <h3>{card.motto}</h3>
                    <p>{card.body}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </section>

        <section className="section revival" id="revival">
          <div className="revival__panel">
            <CloudMotif className="revival__cloud" />
            <Reveal>
              <p className="kicker">{t.revival.kicker}</p>
              <h2>{t.revival.title}</h2>
              <GoldDivider />
              <p className="lede">{t.revival.lead}</p>
            </Reveal>
            <div className="goal-grid">
              {t.revival.goals.map((goal, i) => (
                <Reveal className="goal" delay={i * 70} key={goal.title}>
                  <span>{String(i + 1).padStart(2, '0')}</span>
                  <h3>{goal.title}</h3>
                  <p>{goal.body}</p>
                </Reveal>
              ))}
            </div>
            <Reveal className="join">
              <img src={sealArt} alt="" />
              <div>
                <h3>{t.revival.ctaTitle}</h3>
                <p>{t.revival.ctaBody}</p>
              </div>
              <a className="btn btn--gold" href={GITHUB_URL} target="_blank" rel="noreferrer">
                {t.revival.ctaBtn}
              </a>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer__brand">
          <img src={sealArt} alt="" />
          <div>
            <strong>{t.footer.mark}</strong>
            <p>{t.footer.line}</p>
          </div>
        </div>
        <p className="footer__legal">{t.footer.legal}</p>
        <p className="footer__copy">
          {t.footer.copy}
          {' · '}
          <a href={DOCS_URL}>{t.nav.docs}</a>
        </p>
      </footer>
    </>
  )
}
