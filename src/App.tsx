import { FormEvent, useEffect, useState } from 'react'

type IconName = 'arrow' | 'bank' | 'check' | 'chevron' | 'cloud' | 'document' | 'fraud' | 'menu' | 'mobile' | 'network' | 'report' | 'shield' | 'spark' | 'users' | 'whatsapp' | 'x'

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
    bank: <><path d="m3 9 9-5 9 5" /><path d="M5 10v8m5-8v8m4-8v8m5-8v8M3 20h18" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    chevron: <path d="m9 18 6-6-6-6" />,
    cloud: <><path d="M17.5 19H6a4 4 0 0 1-.5-7.97A6.5 6.5 0 0 1 18 9.5a4.75 4.75 0 0 1-.5 9.5Z" /><path d="M12 12v5m-2-2 2 2 2-2" /></>,
    document: <><path d="M6 3h8l4 4v14H6Z" /><path d="M14 3v5h5M9 13h6m-6 4h6" /></>,
    fraud: <><path d="M12 3 4 6v6c0 4.7 3.4 7.7 8 9 4.6-1.3 8-4.3 8-9V6Z" /><path d="m9 12 2 2 4-5" /></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
    mobile: <><rect x="7" y="2" width="10" height="20" rx="2" /><path d="M10 6h4m-3 12h2" /></>,
    network: <><circle cx="12" cy="5" r="2" /><circle cx="5" cy="18" r="2" /><circle cx="19" cy="18" r="2" /><path d="m11 7-5 9m7-9 5 9M7 18h10" /></>,
    report: <><path d="M4 20V10m5 10V4m5 16v-7m5 7V7" /></>,
    shield: <><path d="M12 3 4 6v6c0 4.7 3.4 7.7 8 9 4.6-1.3 8-4.3 8-9V6Z" /><path d="M9 12h6M12 9v6" /></>,
    spark: <><path d="m12 3 1.2 4.3L17 9l-3.8 1.7L12 15l-1.2-4.3L7 9l3.8-1.7Z" /><path d="m19 15 .6 2.2L22 18l-2.4.8L19 21l-.6-2.2L16 18l2.4-.8Z" /></>,
    users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.9m-2-11.9a4 4 0 0 1 0 7.7" /></>,
    whatsapp: <><path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.5L3 20.5l1.3-4.7a8.5 8.5 0 1 1 16.2-4.1Z" /><path d="M8.2 7.8c.3 3.7 2.3 5.7 6 6.1m.2 0 1.5-1.5m-7.7-4.6 1.5-1.5" /></>,
    x: <><path d="m6 6 12 12M18 6 6 18" /></>,
  }
  return <svg aria-hidden="true" className="icon" fill="none" height={size} viewBox="0 0 24 24" width={size}><g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8">{paths[name]}</g></svg>
}

const features = [
  { icon: 'fraud' as IconName, title: 'AI-powered risk controls', copy: 'Flag suspicious applications, duplicate identities and unusual repayment patterns before exposure grows.' },
  { icon: 'mobile' as IconName, title: 'M-Pesa & MoMo reconciliation', copy: 'Match mobile money transactions to member accounts automatically, with a complete exception trail.' },
  { icon: 'report' as IconName, title: 'Regulatory reporting', copy: 'Generate SASRA, CBK and management reports from one validated source of truth.' },
  { icon: 'bank' as IconName, title: 'End-to-end loan management', copy: 'Configure products, automate schedules, manage arrears and track every facility from one core.' },
  { icon: 'network' as IconName, title: 'Multi-branch operations', copy: 'Run branches and field teams with central oversight, role controls and real-time portfolio visibility.' },
  { icon: 'users' as IconName, title: 'Member 360° view', copy: 'See savings, loans, guarantors, interactions and risk signals in a single member profile.' },
  { icon: 'mobile' as IconName, title: 'USSD banking solution', copy: 'Give members secure access to balances, statements, loan requests and payments from any mobile phone.' },
  { icon: 'spark' as IconName, title: 'Customer mobile app', copy: 'Deliver branded Android and iOS digital banking with self-service, mobile money and real-time notifications.' },
  { icon: 'network' as IconName, title: 'Agent & field officer app', copy: 'Equip field teams with digital onboarding, collections, KYC capture and offline-ready portfolio tools.' },
]

const services = [
  { icon: 'spark' as IconName, title: 'Custom Software Solutions', copy: 'Bespoke business software, workflow automation and systems integration designed around your operations.' },
  { icon: 'cloud' as IconName, title: 'Website Development', copy: 'Fast, accessible and SEO-ready corporate websites, customer portals and high-converting digital platforms.' },
  { icon: 'mobile' as IconName, title: 'Mobile App Development', copy: 'Secure native and cross-platform Android and iOS apps for customers, teams and field operations.' },
  { icon: 'document' as IconName, title: 'Microsoft 365 Development', copy: 'SharePoint, Power Apps, Power Automate and Microsoft 365 customization that connects people and processes.' },
  { icon: 'report' as IconName, title: 'Odoo ERP Customization', copy: 'Odoo implementation, module development, integrations and workflow customization for growing organizations.' },
  { icon: 'users' as IconName, title: 'Zoho Customization', copy: 'Zoho CRM setup, custom functions, automation, analytics and integrations for connected customer operations.' },
  { icon: 'network' as IconName, title: 'Microsoft AI Solutions', copy: 'Responsible Microsoft Copilot and Azure AI deployment, automation and enterprise knowledge solutions.' },
  { icon: 'bank' as IconName, title: 'Financial Systems Consulting', copy: 'Digital transformation, core banking selection, integration strategy and financial process optimization.' },
]

const Logo = ({ inverse = false }: { inverse?: boolean }) => <a aria-label="Zenlow home" className={`logo ${inverse ? 'logo--inverse' : ''}`} href="#top"><img alt="Zenlow" src="/zenlow-logo.png" /></a>

function DemoModal({ onClose }: { onClose: () => void }) {
  const [sent, setSent] = useState(false)
  useEffect(() => {
    const listener = (event: KeyboardEvent) => event.key === 'Escape' && onClose()
    document.addEventListener('keydown', listener)
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', listener); document.body.style.overflow = '' }
  }, [onClose])

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)
    const name = String(formData.get('name') ?? '')
    const email = String(formData.get('email') ?? '')
    const institution = String(formData.get('institution') ?? '')
    const country = String(formData.get('country') ?? '')
    const phone = String(formData.get('phone') ?? '')
    const type = String(formData.get('type') ?? '')

    const subject = encodeURIComponent(`Demo request from ${name || 'website visitor'}`)
    const body = encodeURIComponent(
      [
        'Full name: ' + name,
        'Work email: ' + email,
        'Institution: ' + institution,
        'Country: ' + country,
        'Phone number: ' + phone,
        'Institution type: ' + type,
      ].join('\n')
    )

    window.location.href = `mailto:sales@zenlow.co?subject=${subject}&body=${body}`
    setSent(true)
  }

  return <div aria-labelledby="demo-title" aria-modal="true" className="modal-backdrop" role="dialog" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
    <div className="modal">
      <button aria-label="Close demo request" className="icon-button modal-close" onClick={onClose}><Icon name="x" /></button>
      {sent ? <div className="success-state" role="status">
        <span className="success-icon"><Icon name="check" size={28} /></span><p className="eyebrow">Request received</p>
        <h2 id="demo-title">Thank you. Let’s modernise your lending operations.</h2>
        <p>Our institutional solutions team will contact you within one business day to arrange your live walkthrough.</p>
        <button className="button button--primary" onClick={onClose}>Return to Zenlow</button>
      </div> : <>
        <p className="eyebrow">Live, tailored product session</p><h2 id="demo-title">See SyncLend with your workflows.</h2>
        <p className="modal-intro">Tell us about your institution. We’ll tailor the 30-minute session to your market, loan products and reporting needs.</p>
        <form className="demo-form" onSubmit={submit}>
          <label>Full name<input autoComplete="name" name="name" required /></label>
          <label>Work email<input autoComplete="email" name="email" required type="email" /></label>
          <label>Institution<input autoComplete="organization" name="institution" required /></label>
          <label>Country<select name="country" required defaultValue=""><option disabled value="">Select country</option><option>Kenya</option><option>Uganda</option><option>Tanzania</option><option>Rwanda</option><option>Other</option></select></label>
          <label>Phone number<input autoComplete="tel" name="phone" required type="tel" /></label>
          <label>Institution type<select name="type" required defaultValue=""><option disabled value="">Select institution type</option><option>SACCO</option><option>Microfinance institution</option><option>Bank</option><option>Fintech</option><option>Other</option></select></label>
          <button className="button button--primary form-submit" type="submit">Request my live demo <Icon name="arrow" /></button>
        </form><p className="form-note"><Icon name="shield" size={16} /> Your information is handled securely and never shared.</p>
      </>}
    </div>
  </div>
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [demoOpen, setDemoOpen] = useState(false)
  const requestDemo = () => { setMenuOpen(false); setDemoOpen(true) }
  return <>
    <header className="site-header" id="top"><div className="header-inner"><Logo />
      <nav aria-label="Primary navigation" className={menuOpen ? 'nav nav--open' : 'nav'}>
        <a href="#product" onClick={() => setMenuOpen(false)}>SyncLend Suite</a><a href="#services" onClick={() => setMenuOpen(false)}>Services</a><a href="#about" onClick={() => setMenuOpen(false)}>About</a><a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
        <a className="nav-phone" href="tel:+254720610371">+254 720 610 371</a><button className="button button--primary button--small" onClick={requestDemo}>Request Demo</button>
      </nav>
      <button aria-expanded={menuOpen} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} className="icon-button menu-button" onClick={() => setMenuOpen(!menuOpen)}><Icon name={menuOpen ? 'x' : 'menu'} /></button>
    </div></header>

    <main>
      <section className="hero"><div className="hero-grid page-shell">
        <div className="hero-copy"><div className="eyebrow"><span /> Built for Eastern Africa & Pan-African Lenders</div>
          <h1>Intelligent core banking & lending automation.</h1>
          <p className="hero-lead">One secure platform for SACCOs, MFIs and credit providers—combining AI fraud detection, M-Pesa and MoMo reconciliation, and one-click regulatory reporting.</p>
          <div className="hero-actions"><button className="button button--primary button--large" onClick={requestDemo}>Request Live Demo <Icon name="arrow" /></button><a className="button button--outline button--large" href="#services">Explore services</a></div>
          <p className="hero-assurance"><Icon name="shield" size={18} /> Built for regulated, data-sensitive institutions</p>
        </div>
        <div aria-label="Animated Zenlow transaction network" className="hero-motion">
          <div className="motion-ring motion-ring--one" />
          <div className="motion-ring motion-ring--two" />
          <div className="motion-core"><span className="motion-z">Z</span><small>ZENLOW CORE</small><strong>Live & secure</strong><i /></div>
          <div className="motion-node node-bank"><Icon name="bank" /><span>Core banking</span></div>
          <div className="motion-node node-mobile"><Icon name="mobile" /><span>Mobile money</span></div>
          <div className="motion-node node-shield"><Icon name="shield" /><span>AI risk control</span></div>
          <div className="motion-node node-report"><Icon name="report" /><span>Live reporting</span></div>
          <span className="data-pulse pulse-one" />
          <span className="data-pulse pulse-two" />
          <span className="data-pulse pulse-three" />
        </div>
      </div>
      <div className="trust-strip"><div className="page-shell trust-grid"><div className="country-list"><span>LIVE ACROSS</span><strong>Kenya</strong><i /><strong>Uganda</strong><i /><strong>Tanzania</strong></div></div></div>
      </section>

      <section aria-label="Customer trust" className="proof-bar"><div className="page-shell proof-inner"><p>Trusted by institutions managing <strong>multi-billion-shilling loan books</strong></p></div></section>

      <section className="section product-section" id="product"><div className="page-shell">
        <div className="section-heading split-heading"><div><p className="eyebrow">One intelligent lending core</p><h2>Control the full portfolio.<br />From one clear view.</h2></div><p>SyncLend gives institutions a single operating picture across lending, collections, treasury, risk and reporting.</p></div>
        <div className="product-focus"><div className="focus-nav"><div className="focus-item active"><span>01</span><div><strong>Executive command centre</strong><p>Portfolio, liquidity, risk and branch performance updates in real time.</p></div></div></div>
          <div className="portfolio-panel"><div className="portfolio-head"><div><span>PORTFOLIO CONTROL</span><h3>Branch performance</h3></div><div className="status-pill"><i /> Live data</div></div>
            <div className="branch-grid"><div><span>Total disbursed</span><strong>KES 384.6M</strong><small>Current month</small></div><div><span>Collection rate</span><strong>96.8%</strong><small className="muted">On target</small></div></div>
          </div>
        </div>
      </div></section>

      <section className="section features-section" id="solutions"><div className="page-shell"><div className="section-heading centered"><p className="eyebrow">SACCO & microfinance software</p><h2>Modular tools built for fast-moving African institutions.</h2></div>
        <div className="feature-grid">{features.map((feature) => <a className="feature-card" href="#contact" key={feature.title}><span className="feature-icon"><Icon name={feature.icon} size={23} /></span><h3>{feature.title}</h3><p>{feature.copy}</p></a>)}</div>
      </div></section>

      <section className="section services-section" id="services"><div className="page-shell">
        <div className="section-heading split-heading"><div><p className="eyebrow">Technology services in Kenya</p><h2>Software that moves your business forward.</h2></div><p>From custom software development to AI and ERP optimization, we help organizations modernize systems without disrupting operations.</p></div>
        <div className="services-grid">{services.map((service, index) => <a className="service-card" href="#contact" key={service.title}><span className="service-number">{String(index + 1).padStart(2, '0')}</span><span className="feature-icon"><Icon name={service.icon} size={20} /></span><h3>{service.title}</h3><p>{service.copy}</p></a>)}</div>
      </div></section>

      <section className="section process-section" id="how"><div className="page-shell"><div className="section-heading split-heading light"><div><p className="eyebrow">A complete digital lending journey</p><h2>From application to collections, in one flow.</h2></div><p>Modernize the full experience for staff, members and managers without creating fragmented tools.</p></div>
        <div className="process-grid">{[['01', 'Origination', 'Capture applications in branch, online or from the field with complete KYC.'], ['02', 'AI verification', 'Apply policy rules, identity checks and risk alerts automatically.'], ['03', 'Disbursement', 'Trigger digital disbursement and reconcile every transaction instantly.'], ['04', 'Collections', 'Track repayments, follow-up actions and portfolio health in real time.']].map(([number, title, copy]) => <div className="process-card" key={title}><span>{number}</span><h3>{title}</h3><p>{copy}</p></div>)}</div>
      </div></section>

      <section className="section results-section" id="about"><div className="page-shell results-grid"><div className="case-copy"><p className="eyebrow">Institution results · Kenya</p><h2>From manual effort to measurable growth.</h2><p>Our clients use SyncLend to modernize lending operations while maintaining control, visibility and compliance.</p></div>
        <div className="result-numbers"><div><strong>72%</strong><span>less time spent on daily reconciliation</span></div><div><strong>3×</strong><span>faster loan processing turnaround</span></div><div><strong>98%</strong><span>portfolio visibility across branches</span></div></div>
      </div></section>

      <section className="section compliance-section"><div className="page-shell compliance-grid"><div className="compliance-copy"><p className="eyebrow">Deploy with confidence</p><h2>Built for your regulatory environment.</h2><p>Run on secure infrastructure, configurable workflows and audit-friendly reporting.</p></div>
        <div className="deployment-card"><div className="deployment-top"><span className="feature-icon"><Icon name="cloud" /></span><div><small>FLEXIBLE INFRASTRUCTURE</small><h3>Your environment. Your controls.</h3></div></div><p>Deploy in your preferred cloud, private hosting or hybrid model with the same core product.</p></div>
      </div></section>

      <section className="section faq-section" id="faq"><div className="page-shell faq-grid"><div className="faq-intro"><p className="eyebrow">Frequently asked questions</p><h2>Clear answers for your team.</h2></div>
        <div className="faq-list">{[['Which institutions is SyncLend designed for?', 'SyncLend supports regulated SACCOs, microfinance institutions and credit providers, from growing single-branch lenders to multi-branch enterprises.'], ['Can it work with mobile money?', 'Yes. SyncLend supports M-Pesa and MoMo reconciliations and integration workflows for digital collections.'], ['Is it customizable?', 'Yes. Product rules, approvals, reporting and operational workflows can be configured around your institution.']].map(([question, answer]) => <div className="faq-item" key={question}><strong>{question}</strong><p>{answer}</p></div>)}</div>
      </div></section>

      <section className="final-cta" id="contact"><div className="page-shell cta-inner"><div><p className="eyebrow">Ready to see SyncLend in action?</p><h2>Schedule your institutional demo.</h2><p>Get tailored guidance for your institution, products and reporting workflows.</p></div><button className="button button--primary button--large" onClick={requestDemo}>Request live demo</button></div></section>
    </main>

    <footer className="footer"><div className="page-shell footer-grid"><div className="footer-brand"><Logo inverse /><p>Intelligent core banking and lending automation for Africa’s financial institutions.</p></div><div className="footer-meta"><a href="mailto:sales@zenlow.co">sales@zenlow.co</a><a href="tel:+254720610371">+254 720 610 371</a></div></div></footer>
    <a aria-label="Chat with Zenlow on WhatsApp" className="whatsapp-float" href="https://wa.me/254720610371" rel="noreferrer" target="_blank"><Icon name="whatsapp" size={26} /><span>Chat with us</span></a>
    {demoOpen && <DemoModal onClose={() => setDemoOpen(false)} />}
  </>
}
