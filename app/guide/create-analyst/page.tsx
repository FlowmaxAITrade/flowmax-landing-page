import ContentLayout from "../../content-layout";
import type { Metadata } from "next";
import { createPageMetadata } from "../../seo";
export const metadata: Metadata = createPageMetadata({ title: "创建 AI 分析师指南｜FlowMax", description: "学习在 FlowMax 中创建 Research Agent，配置研究目标、市场数据、提示词与输出规则，并检查部署后的分析结果与运行状态。", path: "/guide/create-analyst" });
export default function AnalystGuide() { return <ContentLayout eyebrow="GUIDE / 01" title="创建你的 Research Agent" intro="让 AI 围绕明确的数据、研究目标和输出规则持续观察市场。"><div className="prose"><h2>1. 完成基础设置</h2><p>从“分析师 → 创建分析师”进入。填写名称、当前已开放的市场、研究方向、可用模型和分析类型。名称应清楚说明研究方向，例如“Crypto · 资金费率与 OI 风险雷达”。</p><h2>2. 写好提示词</h2><p>一个可用的提示词需要清楚写出研究目标、必须使用的数据、分析步骤、输出格式、数据缺失时的处理方式，以及不得编造数据的限制。</p><pre>{`研究目标：识别 BTC 永续合约中的拥挤交易与潜在反转风险。\n\n必须使用的数据：资金费率、持仓量（OI）、多空爆仓。\n输出格式：结论、信号方向、置信度、关键价位、风险提示。\n数据缺失时必须明确说明；不得编造数据。`}</pre><h2>3. 创建后检查</h2><p>提交后前往“我的 AI → 分析师”确认部署状态。检查最新观点是否遵守约定格式、是否确实使用指定数据，以及数据不足时是否明确说明。</p></div></ContentLayout>; }
