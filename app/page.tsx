import SiteHeader from "./site-header";
import SiteFooter from "./site-footer";
import type { Metadata } from "next";
import { createPageMetadata } from "./seo";
import { ArrowRight, Bot, Check, ExternalLink, GitFork, Plus, Users, Workflow } from "lucide-react";

export const metadata: Metadata = createPageMetadata({
  title: "FlowMax｜创建和运行你的 AI 交易策略团队",
  description: "FlowMax 帮助你创建 AI 分析师与交易策略团队，结合市场研究、风险管理和执行流程，先在模拟环境中验证，再持续优化。",
  path: "/",
});

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "FlowMax",
    url: "https://www.flowmax.com/",
    logo: "https://www.flowmax.com/flowmax-logo-mark-dark.png",
    sameAs: [],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "FlowMax",
    url: "https://www.flowmax.com/",
    inLanguage: "zh-CN",
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "FlowMax",
    url: "https://www.flowmax.com/",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    description: "创建 AI 分析师与交易策略团队，并在模拟环境中完成研究、风险管理和验证。",
    provider: {
      "@type": "Organization",
      name: "FlowMax",
      url: "https://www.flowmax.com/",
    },
  },
];

const capabilityIcons = {
  "01": Bot,
  "02": Workflow,
  "03": GitFork,
} as const;

const strategies = [
  {
    name: "Steady Alpha",
    type: "稳健保值",
    status: "WAIT",
    analysts: "3",
    assets: "BTC · ETH",
    pnl: "+12.6%",
    tone: "gain",
  },
  {
    name: "Trend Navigator",
    type: "趋势跟踪",
    status: "LONG",
    analysts: "2",
    assets: "BTC · SOL",
    pnl: "+8.4%",
    tone: "gain",
  },
  {
    name: "Funding Hedge",
    type: "套利对冲",
    status: "HEDGE",
    analysts: "4",
    assets: "Crypto",
    pnl: "+5.7%",
    tone: "gold",
  },
];

const capabilities = [
  {
    number: "01",
    eyebrow: "RESEARCH AGENT",
    title: "让 AI 持续研究市场",
    copy: "定义市场、分析方向、数据类型和输出规则，让 Research Agent 持续读取数据并产出可追踪的市场观点。",
    tags: ["资金流", "投资研究", "量化分析"],
  },
  {
    number: "02",
    eyebrow: "PM AGENT",
    title: "把信号变成策略决策",
    copy: "组合一个或多个分析师信号，再配置交易目标、风险风格、标的、频率和止盈止损，生成可运行的 PM Agent。",
    tags: ["策略目标", "风险管理", "交易执行"],
  },
  {
    number: "03",
    eyebrow: "FORK & VALIDATE",
    title: "从优质 Agent 快速开始",
    copy: "查看公开分析师与策略的逻辑和表现，通过 Fork 建立自己的版本，并优先在模拟环境中持续验证。",
    tags: ["策略市场", "一键 Fork", "Paper Trading"],
  },
];

const workflow = [
  {
    number: "01",
    title: "发现",
    label: "DISCOVER",
    copy: "浏览 AI 策略与分析师市场，查看最新观点、决策和历史表现。",
  },
  {
    number: "02",
    title: "创建",
    label: "BUILD",
    copy: "从零创建 Research Agent 或 PM Agent，也可以 Fork 已有 Agent。",
  },
  {
    number: "03",
    title: "验证",
    label: "VALIDATE",
    copy: "先用私有和模拟方式观察策略逻辑、风险边界与实际运行状态。",
  },
  {
    number: "04",
    title: "进化",
    label: "EVOLVE",
    copy: "基于持续产生的观点、决策和表现，调整配置并迭代自己的策略。",
  },
];

const faqs = [
  {
    question: "不懂编程，可以创建 AI Agent 吗？",
    answer: "可以。Flowmax 使用问答式创建流程，引导你选择市场、目标、风险、标的、频率和止盈止损，不要求编写代码。",
  },
  {
    question: "Research Agent 和 PM Agent 有什么区别？",
    answer: "Research Agent 负责市场研究与信号输出；PM Agent 组合研究信号、策略规则和风险参数，负责形成交易决策。",
  },
  {
    question: "Fork 会复制原策略的收益吗？",
    answer: "不会。Fork 复制的是可以复用的结构和配置。市场环境、运行时间和参数不同，结果也会不同。",
  },
  {
    question: "第一次使用应该从哪里开始？",
    answer: "先浏览公开 Agent，查看详情并理解风险；再 Fork 一个接近自己目标的策略，用私有和模拟方式验证。",
  },
];

export default function Home() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <SiteHeader />

      <section id="top" className="hero">
        <div className="heroGrid" aria-hidden="true" />
        <div className="heroGlow heroGlowOne" aria-hidden="true" />
        <div className="heroGlow heroGlowTwo" aria-hidden="true" />

        <div className="shell heroInner">
          <div className="heroCopy">
            <div className="eyebrowPill">
              <span className="liveDot" />
              AI AGENT AUTOMATED TRADING
            </div>
            <h1>创建和运行你的 <span>AI 交易策略团队。</span></h1>
            <p>
              创建、验证和 Fork AI 分析师与交易策略。Flowmax 把实时市场分析、风险管理与订单执行连接成一套持续运行的 Agent 工作流。
            </p>
            <div className="heroActions">
              <a className="primaryButton" href="https://flowmax.com/create-strategy" target="_blank" rel="noreferrer">
                创建 AI 策略 <ArrowRight size={16} strokeWidth={1.8} aria-hidden="true" />
              </a>
              <a className="secondaryButton" href="#workflow">
                了解工作原理
              </a>
            </div>
            <div className="heroMeta">
              <span><Check size={13} strokeWidth={2} aria-hidden="true" /> 问答式创建</span>
              <span><Check size={13} strokeWidth={2} aria-hidden="true" /> Paper Trading</span>
              <span><Check size={13} strokeWidth={2} aria-hidden="true" /> 可查看决策过程</span>
            </div>
          </div>

          <div className="terminalWrap" aria-label="Flowmax AI 策略广场界面示意">
            <div className="terminalGlow" />
            <div className="terminal">
              <div className="terminalTop">
                <div>
                  <span className="terminalLabel">AI 策略广场</span>
                  <strong>正在运行的策略</strong>
                </div>
                <span className="demoBadge">产品示意</span>
              </div>
              <div className="terminalFilters">
                <span className="selected">全部</span>
                <span>Crypto</span>
                <span>股票</span>
                <b>30D PnL ↓</b>
              </div>
              <div className="strategyHeader">
                <span>名称</span>
                <span>最新决策</span>
                <span>分析师</span>
                <span>标的</span>
                <span>30D PnL</span>
              </div>
              <div className="strategyRows">
                {strategies.map((strategy, index) => (
                  <div className="strategyRow" key={strategy.name}>
                    <div className="strategyName">
                      <span className={`agentAvatar avatar${index + 1}`}>{strategy.name.slice(0, 1)}</span>
                      <span>
                        <strong>{strategy.name}</strong>
                        <small>{strategy.type}</small>
                      </span>
                    </div>
                    <span className={`decisionTag ${strategy.status.toLowerCase()}`}>{strategy.status}</span>
                    <span className="analystCount"><Users size={15} strokeWidth={1.7} aria-hidden="true" /> {strategy.analysts}</span>
                    <span className="assets">{strategy.assets}</span>
                    <strong className={strategy.tone}>{strategy.pnl}</strong>
                  </div>
                ))}
              </div>
              <div className="terminalFoot">
                <span><i className="statusDot" /> Agent network online</span>
                <a className="inlineIconLink" href="https://flowmax.com/" target="_blank" rel="noreferrer">查看全部策略 <ExternalLink size={12} strokeWidth={1.8} aria-hidden="true" /></a>
              </div>
            </div>
            <div className="signalCard signalOne">
              <span>RESEARCH SIGNAL</span>
              <strong>OI 空头减仓</strong>
              <small>置信度 78%</small>
            </div>
            <div className="signalCard signalTwo">
              <span>RISK STATUS</span>
              <strong>LOW · 1x</strong>
              <small>Hard stop enabled</small>
            </div>
          </div>
        </div>
      </section>

      <section className="trustStrip" aria-label="Flowmax 核心能力">
        <div className="shell trustStripInner">
          <span>RESEARCH AGENT</span>
          <i />
          <span>PM AGENT</span>
          <i />
          <span>RISK CONTROL</span>
          <i />
          <span>PAPER TRADING</span>
          <i />
          <span>FORK &amp; EVOLVE</span>
        </div>
      </section>

      <section id="product" className="section shell">
        <div className="sectionIntro">
          <div>
            <span className="sectionKicker">PRODUCT CAPABILITIES</span>
            <h2>从研究信号到交易执行，<br />都在一个 AI Agent 平台。</h2>
          </div>
          <p>
            专业交易者与 Builder 可以创建和验证策略；普通用户可以从公开 Agent 出发，理解、Fork 并运行自己的版本。
          </p>
        </div>

        <div className="capabilityGrid">
          {capabilities.map((capability) => {
            const CapabilityIcon = capabilityIcons[capability.number as keyof typeof capabilityIcons];
            return <article className="capabilityCard" key={capability.number}>
              <div className="capabilityTop">
                <span>{capability.number}</span>
                <small>{capability.eyebrow}</small>
              </div>
              <div className="capabilityIcon" aria-hidden="true"><CapabilityIcon size={38} strokeWidth={1.5} /></div>
              <h3>{capability.title}</h3>
              <p>{capability.copy}</p>
              <div className="tagRow">
                {capability.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </article>;
          })}
        </div>
      </section>

      <section id="workflow" className="workflowSection">
        <div className="shell">
          <div className="workflowTitle">
            <span className="sectionKicker">HOW IT WORKS</span>
            <h2>一个清晰的 Agent 交易闭环</h2>
            <p>把研究、决策、风控和验证拆开，让每一步都更容易理解和检查。</p>
          </div>

          <div className="workflowRail">
            {workflow.map((step, index) => (
              <article className="workflowStep" key={step.number}>
                <div className="stepNode">
                  <span>{step.number}</span>
                  {index < workflow.length - 1 && <i />}
                </div>
                <small>{step.label}</small>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </article>
            ))}
          </div>

          <div className="agentComposer">
            <div className="composerCopy">
              <span className="sectionKicker">AGENT COMPOSER</span>
              <h2>Research 提供证据，<br />PM 负责做决定。</h2>
              <p>
                先创建专注于不同数据与研究方向的分析师，再由 PM Agent 组合信号、执行风险规则，并把每次决策和结果留下来。
              </p>
              <a className="primaryButton" href="https://flowmax.com/create-analyst" target="_blank" rel="noreferrer">
                创建 Research Agent <ArrowRight size={16} strokeWidth={1.8} aria-hidden="true" />
              </a>
            </div>

            <div className="composerDiagram" aria-label="Research Agent 到 PM Agent 的组合流程">
              <div className="researchStack">
                {[
                  ["01", "资金流分析", "Funding · OI"],
                  ["02", "投资研究", "Market context"],
                  ["03", "量化分析", "Momentum · Risk"],
                ].map(([number, title, label]) => (
                  <div className="researchNode" key={number}>
                    <span>{number}</span>
                    <div>
                      <strong>{title}</strong>
                      <small>{label}</small>
                    </div>
                    <b>LIVE</b>
                  </div>
                ))}
              </div>
              <div className="mergeLine" aria-hidden="true">
                <span />
                <Plus size={14} strokeWidth={1.8} aria-hidden="true" />
                <span />
              </div>
              <div className="pmNode">
                <div className="pmNodeTop">
                  <span>PM</span>
                  <b>RUNNING</b>
                </div>
                <strong>Steady Alpha</strong>
                <small>Signals → Decision → Risk</small>
                <div className="riskMeter">
                  <span><i /></span>
                  <b>LOW RISK</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="safety" className="safetySection">
        <div className="shell safetyInner">
          <div className="safetyCopy">
            <span className="sectionKicker">SAFETY BY DESIGN</span>
            <h2>先验证，再运行。<br />让风险边界始终清晰。</h2>
            <p>
              Flowmax 把模拟验证、杠杆限制、止盈止损与决策记录放进创建流程。你可以先观察 Agent 如何研究和决策，再决定是否继续运行。
            </p>
            <div className="safetyBadges" aria-label="安全能力">
              <span>Paper Trading</span>
              <span>Hard Stop</span>
              <span>Decision Log</span>
            </div>
          </div>

          <div className="safetyPanel" aria-label="Flowmax 风险检查清单">
            <div className="safetyPanelTop">
              <div>
                <span>PRE-FLIGHT CHECK</span>
                <strong>策略运行前检查</strong>
              </div>
              <b>4 / 4 READY</b>
            </div>
            {[
              ["01", "模拟盘验证", "已完成 30 天观察"],
              ["02", "仓位与杠杆", "1x · 保守模式"],
              ["03", "止盈止损", "Hard stop enabled"],
              ["04", "决策记录", "全程可追踪"],
            ].map(([number, title, status]) => (
              <div className="safetyCheck" key={number}>
                <span>{number}</span>
                <div>
                  <strong>{title}</strong>
                  <small>{status}</small>
                </div>
                <Check size={14} strokeWidth={2} aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="aboutSection">
        <div className="shell">
          <div className="aboutHeader">
            <span className="sectionKicker">ABOUT FLOWMAX</span>
          </div>
          <div className="aboutLead">
            <h2>以智能重塑交易。</h2>
            <p>
              Flowmax 是面向加密资产与美股市场的 AI Agent 自动交易平台。我们将专业交易策略、实时市场分析、风险管理与订单执行整合进 AI Agent，让 AI 能够持续分析市场、捕捉交易信号并自动完成交易。
            </p>
            <p>
              Flowmax 既服务于希望创建和验证策略的专业交易者与 Builder，也帮助普通用户更轻松地使用优质 AI 交易策略，减少复杂操作，让专业交易能力触手可及。
            </p>
          </div>

          <div className="aboutGrid">
            <article>
              <span>01</span>
              <h3>团队背景</h3>
              <p>
                Flowmax 核心团队拥有华尔街量化交易、金融科技与 AI 产品背景，具备从策略研究、风险控制到交易系统搭建的完整经验。
              </p>
              <p>
                由具备深厚数字资产与交易基础设施经验的团队打造，并获得机构投资 Vernal 的战略支持。
              </p>
            </article>
            <article>
              <span>02</span>
              <h3>我们的使命</h3>
              <p>
                以智能重塑交易，让专业 AI 策略接管市场监测、机会识别与交易执行，在严谨风控下持续进化，追求更具竞争力的投资回报，让用户不再被市场束缚，真正释放时间与财富增长的潜力。
              </p>
            </article>
            <article>
              <span>03</span>
              <h3>我们的愿景</h3>
              <p>
                打造一个开放、透明且持续进化的 AI Agent 交易生态，让优秀策略被验证、被使用并创造长期价值，推动交易从人工决策走向智能自动化。
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="faq" className="faqSection shell">
        <div className="faqIntro">
          <span className="sectionKicker">GETTING STARTED</span>
          <h2>第一次使用 Flowmax？</h2>
          <p>从最常见的问题开始，快速理解分析师、策略和 Fork。</p>
          <a className="inlineIconLink" href="https://flowmax.com/" target="_blank" rel="noreferrer">进入 Flowmax 开始使用 <ExternalLink size={13} strokeWidth={1.8} aria-hidden="true" /></a>
        </div>
        <div className="faqList">
          {faqs.map((faq, index) => (
            <details key={faq.question} open={index === 0}>
              <summary>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {faq.question}
                <Plus size={18} strokeWidth={1.8} aria-hidden="true" />
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="closing">
        <div className="closingGrid" aria-hidden="true" />
        <div className="shell closingInner">
          <span className="sectionKicker">BUILD YOUR AI TRADING TEAM</span>
          <h2>你的第一个 AI 交易 Agent，<br />不必从代码开始。</h2>
          <p>创建 Research Agent，或 Fork 一个已有策略开始验证。</p>
          <div className="closingActions">
            <a className="primaryButton lightButton" href="https://flowmax.com/create-strategy" target="_blank" rel="noreferrer">
              创建 AI 策略 <ArrowRight size={16} strokeWidth={1.8} aria-hidden="true" />
            </a>
            <a className="secondaryButton" href="https://flowmax.com/analysts" target="_blank" rel="noreferrer">
              浏览 AI 分析师
            </a>
          </div>
          <small>历史表现不代表未来结果。AI Agent 的研究与策略输出不构成投资建议。</small>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
