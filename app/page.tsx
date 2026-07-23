const analystSignals = [
  { name: "资金费率雷达", signal: "拥挤度升高", tone: "warning" },
  { name: "OI 动向", signal: "空头减仓", tone: "positive" },
  { name: "多周期共振", signal: "等待确认", tone: "neutral" },
];

const surfaces = [
  {
    index: "01",
    title: "AI 策略",
    eyebrow: "MARKETPLACE",
    copy: "实时策略排行榜把最新决策、关联分析师、30 日盈亏与胜率放在同一张卡片上。可以查看详情、关注或 Fork。",
    metric: "决策 / 盈亏 / 胜率",
  },
  {
    index: "02",
    title: "分析师广场",
    eyebrow: "RESEARCH LAYER",
    copy: "按专精与币种筛选研究 Agent，对照做多与做空观点，再把可信信号源接入自己的 PM Agent。",
    metric: "多空对垒 / 实时观点",
  },
  {
    index: "03",
    title: "我的 AI",
    eyebrow: "CONTROL ROOM",
    copy: "统一管理策略和分析师，查看运行状态、模拟盘、决策频率、模型与信号源，并进入详情页持续运维。",
    metric: "状态 / 频率 / 组合",
  },
];

const pmSteps = [
  ["目标", "稳健保值 / 波段交易 / 趋势跟踪 / 套利对冲"],
  ["风格", "保守 1x / 平衡 1–3x / 激进 1–5x"],
  ["标的", "主流币或扩展主流组合"],
  ["频率", "每 15 分钟或每 1 小时"],
  ["纪律", "止盈止损模板"],
  ["合成", "自动生成策略提示词、风控与分析师组合"],
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="主导航">
        <a className="brand" href="#top" aria-label="Flowmax 首页">
          <span className="brandMark">F</span>
          <span>FLOWMAX</span>
        </a>
        <div className="navLinks">
          <a href="#product">产品</a>
          <a href="#workflow">工作流</a>
          <a href="#safety">安全</a>
        </div>
        <a className="navCta" href="https://flowmax.com/" target="_blank" rel="noreferrer">
          打开 Flowmax <span>↗</span>
        </a>
      </nav>

      <section id="top" className="hero shell">
        <div className="heroCopy">
          <div className="kicker">
            <span className="pulse" />
            ONE-PERSON HEDGE FUND
          </div>
          <h1>
            把研究、决策与风控
            <span>组装成你的 AI 投资团队。</span>
          </h1>
          <p className="heroLead">
            Flowmax 让 Research Agent 持续产出观点，让 PM Agent 汇总信号、执行纪律化决策，并在模拟盘中留下可追踪的过程与结果。
          </p>
          <div className="heroActions">
            <a className="primaryButton" href="https://flowmax.com/create-strategy" target="_blank" rel="noreferrer">
              创建 AI 策略 <span>→</span>
            </a>
            <a className="textButton" href="#workflow">
              查看创建流程 <span>↓</span>
            </a>
          </div>
          <div className="trustRow" aria-label="产品特性">
            <span>模拟盘先行</span>
            <span>研究信号可组合</span>
            <span>决策过程可追踪</span>
          </div>
        </div>

        <div className="heroVisual" aria-label="Flowmax AI 策略示意">
          <div className="orbit orbitOne" />
          <div className="orbit orbitTwo" />
          <div className="dashboardCard">
            <div className="cardTop">
              <div>
                <span className="overline">PM AGENT · LIVE</span>
                <h2>保守 · 稳健保值</h2>
              </div>
              <span className="status">运行中</span>
            </div>
            <div className="decision">
              <div className="coin">₿</div>
              <div>
                <span>最新决策</span>
                <strong>WAIT / 等待信号共振</strong>
              </div>
              <b>15m</b>
            </div>
            <div className="signalList">
              {analystSignals.map((item) => (
                <div className="signalRow" key={item.name}>
                  <span className="analystDot" />
                  <span>{item.name}</span>
                  <span className={`signalTag ${item.tone}`}>{item.signal}</span>
                </div>
              ))}
            </div>
            <div className="riskBar">
              <div>
                <span>风险配置</span>
                <strong>1x · 硬止损</strong>
              </div>
              <div className="barTrack">
                <span />
              </div>
              <em>LOW</em>
            </div>
          </div>
          <div className="floatingNote noteTop">
            <span>Research</span>
            <strong>3 个信号源</strong>
          </div>
          <div className="floatingNote noteBottom">
            <span>Paper trading</span>
            <strong>模拟盘</strong>
          </div>
        </div>
      </section>

      <section className="ticker" aria-label="核心能力">
        <div>
          <span>RESEARCH AGENT</span><i>✦</i>
          <span>PM AGENT</span><i>✦</i>
          <span>RISK CONTROL</span><i>✦</i>
          <span>PAPER TRADING</span><i>✦</i>
          <span>LIVE SIGNALS</span><i>✦</i>
        </div>
      </section>

      <section id="product" className="section shell">
        <div className="sectionHead">
          <div>
            <span className="sectionNo">/ 01</span>
            <p className="eyebrow">PRODUCT SURFACES</p>
          </div>
          <h2>从市场观察，到自己的 AI 控制室。</h2>
          <p>三个核心界面把发现、研究和管理连成一条清晰路径。</p>
        </div>
        <div className="surfaceGrid">
          {surfaces.map((surface) => (
            <article className="surfaceCard" key={surface.index}>
              <div className="surfaceTop">
                <span>{surface.index}</span>
                <small>{surface.eyebrow}</small>
              </div>
              <h3>{surface.title}</h3>
              <p>{surface.copy}</p>
              <div className="surfaceMetric">{surface.metric}</div>
            </article>
          ))}
        </div>
      </section>

      <section id="workflow" className="workflowSection">
        <div className="shell">
          <div className="sectionHead light">
            <div>
              <span className="sectionNo">/ 02</span>
              <p className="eyebrow">AGENT WORKFLOW</p>
            </div>
            <h2>Research 提供证据，PM 负责做决定。</h2>
            <p>把不同职责拆开，能够更清楚地检查数据源、观点和风险纪律。</p>
          </div>

          <div className="agentFlow">
            <article className="agentPanel">
              <div className="agentLabel"><span>R</span> RESEARCH AGENT</div>
              <h3>先定义“看什么”</h3>
              <p>选择 Crypto 市场、LLM 和分析类型，明确必用数据源，并规定输出格式与缺失数据处理方式。</p>
              <ul>
                <li>资金费率 / OI / 爆仓</li>
                <li>信号方向与置信度</li>
                <li>关键价位与数据缺口</li>
              </ul>
              <a href="https://flowmax.com/create-analyst" target="_blank" rel="noreferrer">创建分析师 ↗</a>
            </article>

            <div className="flowConnector" aria-hidden="true">
              <span>01</span>
              <div />
              <b>信号输入</b>
              <div />
              <span>02</span>
            </div>

            <article className="agentPanel pmPanel">
              <div className="agentLabel"><span>P</span> PM AGENT</div>
              <h3>再定义“怎么做”</h3>
              <p>选择目标、风险风格、交易标的、决策频率和止盈止损纪律，再由系统合成提示词与风控规则。</p>
              <ul>
                <li>保守 / 平衡 / 激进</li>
                <li>15 分钟 / 1 小时</li>
                <li>模拟盘验证后再放大</li>
              </ul>
              <a href="https://flowmax.com/create-strategy" target="_blank" rel="noreferrer">创建策略 ↗</a>
            </article>
          </div>

          <div className="stepRail" aria-label="PM Agent 六步创建流程">
            {pmSteps.map(([title, copy], index) => (
              <div className="step" key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{title}</strong>
                <p>{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="safety" className="section shell">
        <div className="safetyWrap">
          <div className="safetyCopy">
            <span className="sectionNo">/ 03</span>
            <p className="eyebrow">SAFETY BY DEFAULT</p>
            <h2>先在模拟盘里证明纪律。</h2>
            <p>
              PM Agent 默认应先使用纸面交易凭证，并设置明确的杠杆、仓位、止损和决策周期。Research Agent 只使用声明过的数据源，缺失时明确说“不知道”。
            </p>
            <div className="safetyBadges">
              <span>PRIVATE FIRST</span>
              <span>PAPER TRADING</span>
              <span>HARD STOP</span>
            </div>
          </div>
          <div className="checklist">
            <div className="checklistHead">
              <span>上线前检查</span>
              <b>4 / 4</b>
            </div>
            {[
              "Scheduler 正在运行",
              "决策周期与预期一致",
              "持仓数量没有异常堆积",
              "名称、标的与风险档位正确",
            ].map((item) => (
              <div className="checkItem" key={item}>
                <span>✓</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="closing">
        <div className="shell closingInner">
          <p>RESEARCH → DECISION → DISCIPLINE</p>
          <h2>你的 AI 投资团队，<br />从一个清晰的策略开始。</h2>
          <a className="primaryButton inverted" href="https://flowmax.com/" target="_blank" rel="noreferrer">
            进入 Flowmax <span>↗</span>
          </a>
          <small>仅供产品演示与研究，不构成投资建议。</small>
        </div>
      </section>

      <footer className="footer shell">
        <a className="brand" href="#top">
          <span className="brandMark">F</span>
          <span>FLOWMAX</span>
        </a>
        <p>One-person hedge fund · AI-native research &amp; portfolio management</p>
        <span>© 2026</span>
      </footer>
    </main>
  );
}
