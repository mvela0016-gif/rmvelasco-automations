import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, TrendingUp, DollarSign } from "lucide-react";

export const ROICalculator = () => {
  const [hours, setHours] = useState(400);
  const [team, setTeam] = useState(100);
  const [rate, setRate] = useState(45);

  const baselineCost = hours * team * rate;
  const estimatedSavings = baselineCost * 0.85; // 85% Efficiency Optimization
  const annualSavings = estimatedSavings * 12;
  const growthOpportunity = estimatedSavings * 3;

  const formatCurrency = (val: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(val);

  return (
    <section className="py-24 relative overflow-hidden" id="calculator">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            Calculate Your AI Automation ROI
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
            Adjust the business parameters below to instantly calculate the absolute financial impact of implementing intelligent workflow automation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Side: Controls */}
          <div className="lg:col-span-5 glass p-8 rounded-[2rem] flex flex-col gap-10 sticky top-24">
            <h3 className="text-xl font-display font-bold text-foreground flex items-center gap-2.5">
              <span className="p-2 bg-primary/10 rounded-xl text-primary">
                <Calculator size={20} />
              </span>
              Business Parameters
            </h3>

            <div className="space-y-5">
              <div className="flex justify-between items-end">
                <label className="text-sm font-semibold text-foreground tracking-wide uppercase">Monthly Task Hours</label>
                <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1.5 rounded-lg">{hours}h</span>
              </div>
              <input
                type="range"
                min="10"
                max="1000"
                step="10"
                value={hours}
                onChange={(e) => setHours(Number(e.target.value))}
                className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
              />
            </div>

            <div className="space-y-5">
              <div className="flex justify-between items-end">
                <label className="text-sm font-semibold text-foreground tracking-wide uppercase">Team Members</label>
                <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1.5 rounded-lg">{team}</span>
              </div>
              <input
                type="range"
                min="1"
                max="500"
                step="1"
                value={team}
                onChange={(e) => setTeam(Number(e.target.value))}
                className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
              />
            </div>

            <div className="space-y-5">
              <div className="flex justify-between items-end">
                <label className="text-sm font-semibold text-foreground tracking-wide uppercase">Avg. Hourly Rate</label>
                <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1.5 rounded-lg">${rate}</span>
              </div>
              <input
                type="range"
                min="15"
                max="150"
                step="1"
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
              />
            </div>
          </div>

          {/* Right Side: Results */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <motion.div
              layout
              className="glass p-8 rounded-3xl border border-border/50"
            >
              <p className="text-sm text-muted-foreground font-semibold uppercase tracking-wider mb-2">Total Baseline Cost</p>
              <h4 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                {formatCurrency(baselineCost)}<span className="text-lg font-medium text-muted-foreground ml-1">/mo</span>
              </h4>
            </motion.div>

            <motion.div
              layout
              className="glass-strong p-10 rounded-[2.5rem] border-2 border-primary/30 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/15 rounded-full blur-[50px] -mr-12 -mt-12 pointer-events-none" />
              <div className="flex items-center gap-2.5 mb-4 relative z-10">
                <span className="p-2 bg-primary/20 rounded-full text-primary">
                  <DollarSign size={20} />
                </span>
                <p className="text-sm font-bold text-primary uppercase tracking-widest">Estimated Monthly Savings</p>
              </div>
              <h4 className="text-5xl md:text-6xl font-display font-extrabold text-foreground mb-4 relative z-10 tracking-tight">
                {formatCurrency(estimatedSavings)}
              </h4>
              <p className="text-sm font-semibold text-foreground/80 bg-secondary inline-flex px-4 py-2 rounded-full relative z-10 border border-border/50">
                🚀 85% Efficiency Optimization
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2">
              <motion.div
                layout
                className="glass p-8 rounded-3xl"
              >
                <p className="text-sm text-muted-foreground font-semibold uppercase tracking-wider mb-2">Annual Cost Reduction</p>
                <h4 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                  {formatCurrency(annualSavings)}
                </h4>
              </motion.div>

              <motion.div
                layout
                className="glass p-8 rounded-3xl bg-accent/5 border border-accent/20"
              >
                <div className="flex items-center gap-2 mb-2">
                  <p className="text-sm text-accent font-semibold uppercase tracking-wider">Growth Opportunity</p>
                  <TrendingUp size={16} className="text-accent" />
                </div>
                <h4 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3">
                  {formatCurrency(growthOpportunity)}
                </h4>
                <p className="text-xs text-muted-foreground font-medium leading-relaxed">
                  Potential revenue if savings are reinvested into high-leverage growth activities.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
