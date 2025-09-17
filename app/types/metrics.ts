export interface StrategyMetrics {
  Strategy: string;
  'Cumulative Return [%]': number;
  'CAGR [%]': number;
  'Volatility [%]': number;
  Sharpe: number;
  Sortino: number;
  Calmar: number;
  'Max Drawdown (MD) [%]': number;
  'Duration of MD [days]': number;
  'Max Drawdown Duration (MDD) [days]': number;
  'Drawdown of MDD [%]': number;
  '1-day VaR (95%)': number;
  '1-month VaR (99%)': number;
  'CVaR (95%)': number;
  'CVaR (99%)': number;
  'Gain/Pain Ratio (1M)': number;
  'Tail Ratio': number;
  'Omega Ratio': number;
  'Outlier Win Ratio': number;
  'Outlier Loss Ratio': number;
  'Gini Coefficient': number;
  'Rolling Sharpe 90d Mean': number;
  'Rolling Sharpe 90d Median': number;
  'Rolling Sharpe 90d Last': number;
  'Rolling Sharpe 365d Mean': number;
  'Rolling Sharpe 365d Median': number;
  'Rolling Sharpe 365d Last': number;
  Alpha: number;
  Beta: number;
  'Information Ratio': number;
  'Treynor Ratio': number;
  Correlation: number;
  'MTD [%]': number;
  '3M [%]': number;
  '6M [%]': number;
  'YTD [%]': number;
  'Best Day [%]': number;
  'Worst Day [%]': number;
  'Best Month [%]': number;
  'Worst Month [%]': number;
  'Best Year [%]': number;
  'Worst Year [%]': number;
}

export interface MetricsSchema {
  'Main Metrics': string[];
  'Returns Metrics': string[];
  'Rolling Metrics': string[];
  'Cumulative Return Metrics': string[];
  'Benchmark Metrics': string[];
}
