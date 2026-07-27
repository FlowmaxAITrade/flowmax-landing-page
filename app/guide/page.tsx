import { ArrowRight, Check } from "lucide-react";
import type { Metadata } from "next";
import ContentLayout from "../content-layout";
import { createPageMetadata } from "../seo";

export const metadata: Metadata = createPageMetadata({ title: "FlowMax 使用指南｜从分析师到 AI 交易策略", description: "按照 FlowMax 使用指南创建分析师和交易策略，了解从市场研究、参数配置到模拟验证与持续管理的完整产品使用流程。", path: "/guide" });

const steps = [
  ["01", "认识两类 Agent", "Research Agent 负责研究与输出信号；PM Agent 将信号、目标和风险规则组合成决策。"],
  ["02", "浏览公开内容", "先查看策略和分析师的目标、风险风格、最新输出及统计周期。"],
  ["03", "Fork 或创建", "可以 Fork 现有 Agent 建立自己的版本，也可以从零开始创建。"],
  ["04", "私有、模拟、验证", "第一次建议设为私有，并优先在产品提供的模拟环境中观察和验证。"],
];

const firstRunChecklist = ["选择私有可见性", "从一个熟悉的主流标的开始", "选择保守的风险风格", "启用止损与仓位上限", "先使用 1–2 个互补信号"];

export default function GuidePage() {
  return (
    <ContentLayout eyebrow="RESOURCE CENTER" title="从想法到可验证的 AI 交易工作流" intro="第一次使用 Flowmax，建议从浏览、Fork 和私有模拟开始。让每一次研究、决策与风险边界都更清楚。">
      <div className="guidePath">
        {steps.map(([number, title, copy]) => <article key={number}><span>{number}</span><h2>{title}</h2><p>{copy}</p></article>)}
      </div>
      <div className="contentSplit">
        <div>
          <span className="sectionKicker">START HERE</span>
          <h2>新手的第一条路径</h2>
          <p>注册并登录后，先浏览公开策略和分析师。确认研究方向、交易标的、风险风格和表现的统计口径，再决定是否关注、Fork 或创建。</p>
          <a className="primaryButton" href="https://flowmax.com/" target="_blank" rel="noreferrer">打开 Flowmax <ArrowRight size={16} strokeWidth={1.8} aria-hidden="true" /></a>
        </div>
        <div className="checklist">
          <strong>首次创建建议</strong>
          {firstRunChecklist.map((item) => <span key={item}><Check size={14} strokeWidth={2} aria-hidden="true" />{item}</span>)}
        </div>
      </div>
      <div className="guideLinks">
        <a href="/guide/create-analyst"><small>01</small><strong>创建分析师</strong><span>定义研究目标、数据与输出规则 <ArrowRight size={14} strokeWidth={1.8} aria-hidden="true" /></span></a>
        <a href="/guide/create-strategy"><small>02</small><strong>创建策略</strong><span>组合信号、风险规则与决策频率 <ArrowRight size={14} strokeWidth={1.8} aria-hidden="true" /></span></a>
        <a href="/guide/manage"><small>03</small><strong>Fork、Credits 与管理</strong><span>在“我的 AI”中持续监控 <ArrowRight size={14} strokeWidth={1.8} aria-hidden="true" /></span></a>
      </div>
    </ContentLayout>
  );
}
