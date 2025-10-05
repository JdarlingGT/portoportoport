import ClickToLaunch from "../../components/ClickToLaunch";
import KPIChips from "../../components/KPIChips";

export default function SmartPricing() {
  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Smart Sales & Pricing Tool</h1>
          <p className="text-xl text-slate-300">Dynamic pricing scenarios and sales configuration tool.</p>
          <KPIChips app="smart-pricing" />
        </header>

        <ClickToLaunch
          appTitle="Smart Pricing Tool"
          tagline="Configure pricing scenarios and sales strategies with intelligent recommendations."
          bullets={[
            "24 pre-built pricing scenarios for different market conditions",
            "Dynamic configuration with real-time impact calculations",
            "Export-ready pricing sheets and sales materials"
          ]}
          src="/apps/smart-pricing/index.html"
          height={1100}
        />

        <section id="how-it-works" className="mt-12 space-y-4">
          <h2 className="text-2xl font-semibold">How it works</h2>
          <p className="text-slate-300">
            Select your market conditions, target segments, and competitive positioning to generate 
            optimized pricing strategies with supporting sales materials.
          </p>
        </section>
      </div>
    </div>
  );
}
