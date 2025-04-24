import type { PortfolioData } from "./types";
import portfolioData from "@/data/portfolio.json";

export function getData(): PortfolioData {
  return portfolioData as PortfolioData;
}
