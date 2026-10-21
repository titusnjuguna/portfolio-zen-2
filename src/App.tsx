import { FormEvent, useEffect, useState } from 'react'

type IconName = 'arrow' | 'bank' | 'check' | 'chevron' | 'cloud' | 'document' | 'fraud' | 'menu' | 'mobile' | 'network' | 'report' | 'shield' | 'spark' | 'users' | 'x'

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
]

const Logo = ({ inverse = false }: { inverse?: boolean }) => <a aria-label="Zenlow home" className={`logo ${inverse ? 'logo--inverse' : ''}`} href="#top"><span className="logo-mark" aria-hidden="true"><span /><span /><span /></span><span className="logo-type">ZENLOW</span></a>

function DemoModal({ onClose }: { onClose: () => void }) {
  const [sent, setSent] = useState(false)
  useEffect(() => {
    const listener = (event: KeyboardEvent) => event.key === 'Escape' && onClose()
    document.addEventListener('keydown', listener)
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', listener); document.body.style.overflow = '' }
  }, [onClose])
  function submit(event: FormEvent) { event.preventDefault(); setSent(true) }
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
          <label>Institution type<select name="type" required defaultValue=""><option disabled value="">Select institution type</option><option>SACCO</option><option>Microfinance institution</option><option>Credit provider</option><option>Bank</option></select></label>
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
        <a href="#product" onClick={() => setMenuOpen(false)}>SyncLend Suite</a><a href="#solutions" onClick={() => setMenuOpen(false)}>Services</a><a href="#about" onClick={() => setMenuOpen(false)}>About</a><a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        <a className="nav-phone" href="tel:+254709353000">+254 709 353 000</a><button className="button button--primary button--small" onClick={requestDemo}>Request Demo</button>
      </nav>
      <button aria-expanded={menuOpen} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} className="icon-button menu-button" onClick={() => setMenuOpen(!menuOpen)}><Icon name={menuOpen ? 'x' : 'menu'} size={24} /></button>
    </div></header>

    <main>
      <section className="hero"><div className="hero-grid page-shell">
        <div className="hero-copy"><div className="eyebrow"><span /> Built for Eastern Africa & Pan-African Lenders</div>
          <h1>Intelligent core banking & lending automation.</h1>
          <p className="hero-lead">One secure platform for SACCOs, MFIs and credit providers—combining AI fraud detection, M-Pesa and MoMo reconciliation, and one-click regulatory reporting.</p>
          <div className="hero-actions"><button className="button button--primary button--large" onClick={requestDemo}>Request Live Demo <Icon name="arrow" /></button><a className="button button--outline button--large" href="#how">See How It Works <Icon name="chevron" /></a></div>
          <p className="hero-assurance"><Icon name="shield" size={18} /> Built for regulated, data-sensitive institutions</p>
        </div>
        <div aria-label="SyncLend live portfolio dashboard preview" className="dashboard-shell">
          <div className="dash-topbar"><div className="dash-brand"><span className="mini-mark" /> SyncLend</div><div className="dash-period">Portfolio overview <strong>Today</strong></div><div className="avatar">JK</div></div>
          <div className="dash-body"><aside className="dash-sidebar" aria-hidden="true"><span className="active"><Icon name="report" size={17} /></span><span><Icon name="users" size={17} /></span><span><Icon name="bank" size={17} /></span><span><Icon name="document" size={17} /></span></aside>
            <div className="dash-content"><div className="dash-greeting"><div><strong>Good morning, Jane</strong><small>Consolidated portfolio · 8 branches</small></div><button aria-label="Export portfolio report"><Icon name="document" size={16} /> Export</button></div>
              <div className="metric-row"><div className="metric"><span>Gross loan book</span><strong>KES 2.48B</strong><small className="positive">↑ 8.4% this month</small></div><div className="metric"><span>Active loans</span><strong>12,804</strong><small>Across 8 branches</small></div><div className="metric"><span>PAR 30</span><strong>3.2%</strong><small className="positive">↓ 0.8% improvement</small></div></div>
              <div className="dash-lower"><div className="chart-card"><div className="card-title"><strong>Portfolio performance</strong><span>KES millions</span></div>
                <svg aria-label="Portfolio growth chart" className="chart" role="img" viewBox="0 0 410 160"><defs><linearGradient id="fill" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#1f67e9" stopOpacity=".26" /><stop offset="1" stopColor="#1f67e9" stopOpacity="0" /></linearGradient></defs><g className="grid-lines"><path d="M15 25h380M15 65h380M15 105h380M15 145h380" /></g><path className="area" d="M15 126C52 121 73 112 102 116S155 95 190 97s48-33 83-27 55-27 82-38 40-7 40-7v120H15Z" /><path className="line" d="M15 126C52 121 73 112 102 116S155 95 190 97s48-33 83-27 55-27 82-38 40-7 40-7" /><circle cx="395" cy="25" r="4" /></svg>
                <div className="chart-months"><span>Jan</span><span>Mar</span><span>May</span><span>Jul</span><span>Sep</span><span>Nov</span></div></div>
                <div className="activity-card"><div className="card-title"><strong>Live controls</strong><span>All systems active</span></div>
                  <div className="activity"><i className="activity-icon blue"><Icon name="mobile" size={15} /></i><div><strong>M-Pesa reconciled</strong><small>248 transactions · now</small></div><b>100%</b></div>
                  <div className="activity"><i className="activity-icon green"><Icon name="fraud" size={15} /></i><div><strong>Fraud block</strong><small>Duplicate ID prevented</small></div><b className="flagged">Flagged</b></div>
                  <div className="activity"><i className="activity-icon navy"><Icon name="document" size={15} /></i><div><strong>SASRA return</strong><small>Ready for review</small></div><b className="ready">Ready</b></div>
                </div></div>
            </div>
          </div>
          <div className="dashboard-tag tag-one"><Icon name="mobile" size={16} /><span>M-Pesa settlement<strong>Balanced to KES 0.00</strong></span></div><div className="dashboard-tag tag-two"><Icon name="fraud" size={16} /><span>Fraud prevention<strong>Risk stopped pre-disbursement</strong></span></div>
        </div>
      </div>
      <div className="trust-strip"><div className="page-shell trust-grid"><div className="country-list"><span>LIVE ACROSS</span><strong>Kenya</strong><i /><strong>Uganda</strong><i /><strong>Tanzania</strong><i /><strong>Rwanda</strong></div><div className="trust-stats"><div><strong>99.9%</strong><span>Platform availability</span></div><div><strong>24/7</strong><span>Regional support</span></div><div><strong>8+</strong><span>Years in fintech</span></div></div></div></div>
      </section>

      <section aria-label="Customer trust" className="proof-bar"><div className="page-shell proof-inner"><p>Trusted by institutions managing <strong>multi-billion-shilling loan books</strong></p><div className="proof-logos" aria-label="Institution types using SyncLend"><span><Icon name="bank" /> LEADING SACCOs</span><span><Icon name="network" /> REGIONAL MFIs</span><span><Icon name="shield" /> LICENSED LENDERS</span></div></div></section>

      <section className="section product-section" id="product"><div className="page-shell">
        <div className="section-heading split-heading"><div><p className="eyebrow">One intelligent lending core</p><h2>Control the full portfolio.<br />From one clear view.</h2></div><p>SyncLend gives leaders, credit teams and branch operators the same accurate picture—turning fragmented operations into a controlled, auditable lending engine.</p></div>
        <div className="product-focus"><div className="focus-nav"><div className="focus-item active"><span>01</span><div><strong>Executive command centre</strong><p>Portfolio, liquidity, risk and branch performance in real time.</p></div></div><div className="focus-item"><span>02</span><div><strong>Intelligent credit operations</strong><p>Faster decisions with configurable policy and AI risk signals.</p></div></div><div className="focus-item"><span>03</span><div><strong>Financial control</strong><p>Automated posting, reconciliation and an audit-ready ledger.</p></div></div></div>
          <div className="portfolio-panel"><div className="portfolio-head"><div><span>PORTFOLIO CONTROL</span><h3>Branch performance</h3></div><div className="status-pill"><i /> Live data</div></div>
            <div className="branch-grid"><div><span>Total disbursed</span><strong>KES 384.6M</strong><small>Current month</small></div><div><span>Collection rate</span><strong>96.8%</strong><small className="positive">2.1% above target</small></div></div>
            <div className="branch-table" role="table" aria-label="Branch performance"><div className="table-row table-head" role="row"><span>Branch</span><span>Portfolio</span><span>PAR 30</span><span>Status</span></div><div className="table-row" role="row"><strong>Nairobi Central</strong><span>KES 722.4M</span><span>2.4%</span><em>On target</em></div><div className="table-row" role="row"><strong>Mombasa</strong><span>KES 416.8M</span><span>3.1%</span><em>On target</em></div><div className="table-row" role="row"><strong>Kisumu</strong><span>KES 308.2M</span><span>3.8%</span><em className="watch">Review</em></div><div className="table-row" role="row"><strong>Nakuru</strong><span>KES 272.6M</span><span>2.9%</span><em>On target</em></div></div>
          </div>
        </div>
      </div></section>

      <section className="section features-section" id="solutions"><div className="page-shell"><div className="section-heading centered"><p className="eyebrow">Built around how you operate</p><h2>Modern capability. Institutional control.</h2><p>Everything your teams need to lend confidently, serve members better and stay ready for scrutiny.</p></div>
        <div className="feature-grid">{features.map((feature) => <a className="feature-card" href="#contact" key={feature.title}><span className="feature-icon"><Icon name={feature.icon} size={23} /></span><h3>{feature.title}</h3><p>{feature.copy}</p><span className="text-link">Explore capability <Icon name="arrow" size={17} /></span></a>)}</div>
      </div></section>

      <section className="section process-section" id="how"><div className="page-shell"><div className="section-heading split-heading light"><div><p className="eyebrow">A complete digital lending journey</p><h2>From application to reporting—without the gaps.</h2></div><p>Move every application through a controlled workflow while SyncLend automates checks, calculations, posting and compliance records.</p></div>
        <div className="process-grid">{[['01','Origination','Capture applications in branch, online or from the field with complete KYC.'],['02','AI verification','Apply policy rules, identity checks and fraud signals in seconds.'],['03','Disbursement','Approve and pay to bank or mobile wallet with automated ledger entries.'],['04','Compliance report','Produce complete audit trails and regulator-ready returns in one click.']].map(([number,title,copy], index) => <div className="process-step" key={title}><div className="step-top"><span>{number}</span>{index < 3 && <i />}</div><h3>{title}</h3><p>{copy}</p></div>)}</div>
      </div></section>

      <section className="section results-section" id="about"><div className="page-shell results-grid"><div className="case-copy"><p className="eyebrow">Institution results · Kenya</p><h2>From manual reconciliation to same-day financial control.</h2><blockquote>“SyncLend gave our management team confidence in the numbers. We now close our M-Pesa reconciliation daily and identify portfolio risk before it becomes arrears.”</blockquote><div className="case-person"><span>CO</span><div><strong>Chief Operations Officer</strong><small>Tier 1 Kenyan SACCO · Identity withheld by agreement</small></div></div></div>
        <div className="result-numbers"><div><strong>72%</strong><span>less time spent on daily reconciliation</span></div><div><strong>3×</strong><span>faster loan processing turnaround</span></div><div><strong>100%</strong><span>traceability across approval decisions</span></div><div><strong>8</strong><span>branches operating on one live core</span></div></div>
      </div></section>

      <section className="section compliance-section"><div className="page-shell compliance-grid"><div className="compliance-copy"><p className="eyebrow">Deploy with confidence</p><h2>Built for your regulatory and operational reality.</h2><p>Choose secure cloud, private cloud or on-premise deployment. Keep control of data residency, access and change management while our regional team supports your rollout.</p><ul><li><Icon name="check" /> SASRA and CBK reporting readiness</li><li><Icon name="check" /> Role-based access and maker-checker controls</li><li><Icon name="check" /> Complete audit logs and configurable approvals</li><li><Icon name="check" /> Encryption in transit and at rest</li></ul></div>
        <div className="deployment-card"><div className="deployment-top"><span className="feature-icon"><Icon name="cloud" /></span><div><small>FLEXIBLE INFRASTRUCTURE</small><h3>Your environment. Your control.</h3></div></div><div className="deployment-options"><div><strong>Secure cloud</strong><span>Managed, resilient and ready to scale.</span></div><div><strong>Private cloud</strong><span>Dedicated environment and data control.</span></div><div><strong>On-premise</strong><span>Deploy within your own infrastructure.</span></div></div><div className="data-row"><Icon name="shield" /><span><strong>Data residency options</strong><small>Aligned to your jurisdiction and policy requirements</small></span></div></div>
      </div></section>

      <section className="section faq-section" id="faq"><div className="page-shell faq-grid"><div className="faq-intro"><p className="eyebrow">Frequently asked questions</p><h2>Clear answers for your evaluation team.</h2><p>Need a detailed technical or procurement response? Our institutional team is ready to help.</p><a className="text-link" href="mailto:info@zenlow.co">Email our solutions team <Icon name="arrow" /></a></div>
        <div className="faq-list">{[['Which institutions is SyncLend designed for?','SyncLend supports regulated SACCOs, microfinance institutions and credit providers, from growing single-branch lenders to established multi-branch institutions.'],['Can SyncLend integrate with M-Pesa and mobile money?','Yes. SyncLend supports automated transaction matching, settlement tracking and exception handling for M-Pesa and regional mobile money workflows.'],['How long does implementation take?','Timing depends on data migration, integrations and operating complexity. A structured discovery provides a clear implementation plan, ownership model and rollout schedule.'],['Can we host SyncLend on our own infrastructure?','Yes. We support secure cloud, private cloud and on-premise deployment, with data residency options aligned to your institution’s requirements.']].map(([q,a]) => <details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div>
      </div></section>

      <section className="final-cta" id="contact"><div className="page-shell cta-inner"><div><p className="eyebrow">Ready to see SyncLend in action?</p><h2>Schedule your institutional demo.</h2><p>Get a tailored walkthrough for your products, branches and reporting needs.</p></div><div className="cta-actions"><button className="button button--white button--large" onClick={requestDemo}>Schedule Your Demo <Icon name="arrow" /></button><div><a href="tel:+254709353000">+254 709 353 000</a><a href="https://wa.me/254709353000" rel="noreferrer" target="_blank">WhatsApp our team</a></div></div></div></section>
    </main>

    <footer className="footer"><div className="page-shell footer-grid"><div className="footer-brand"><Logo inverse /><p>Intelligent core banking and lending automation for Africa’s financial institutions.</p><a href="https://www.linkedin.com/company/zenlow" rel="noreferrer" target="_blank">LinkedIn <Icon name="arrow" size={16} /></a></div><div><h3>Platform</h3><a href="#product">SyncLend Suite</a><a href="#solutions">Credit Operations</a><a href="#solutions">Core Banking</a><a href="#solutions">Regulatory Reporting</a></div><div><h3>Company</h3><a href="#about">About Zenlow</a><a href="#about">Customer Results</a><a href="#faq">FAQ</a><a href="#contact">Contact</a></div><div><h3>Nairobi office</h3><address>Westlands Business District<br />Nairobi, Kenya</address><a href="mailto:info@zenlow.co">info@zenlow.co</a><a href="tel:+254709353000">+254 709 353 000</a></div></div><div className="page-shell footer-bottom"><span>© {new Date().getFullYear()} Zenlow Technologies Ltd. All rights reserved.</span><div><a href="#top">Privacy Policy</a><a href="#top">Terms of Use</a><a href="#top">Security</a></div></div></footer>
    {demoOpen && <DemoModal onClose={() => setDemoOpen(false)} />}
  </>
}
