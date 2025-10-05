import ClickToLaunch from "../../components/ClickToLaunch";
import KPIChips from "../../components/KPIChips";

export default function ROICalculator() {
  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-2">ROI Calculator — Essential Training</h1>
          <p className="text-xl text-slate-300">Estimate revenue impact and time saved from automation & training.</p>
          <KPIChips app="roi-calculator" />
        </header>

        <ClickToLaunch
          appTitle="ROI Calculator"
          tagline="Input your volume and efficiency—get instant projections."
          bullets={[
            "Inputs: sends/visits, AOV, close rate, hours saved",
            "Outputs: revenue delta, payback period, lift ranges",
            "Export: copy, print, or snapshot"
          ]}
          src="/apps/roi-calculator/index.html"
          height={1000}
        />

        <section id="how-it-works" className="mt-12 space-y-4">
          <h2 className="text-2xl font-semibold">How it works</h2>
          <p className="text-slate-300">
            Model impact using your own numbers. Useful for stakeholder buy-in and prioritization.
          </p>
        </section>
      </div>
    </div>
  );
}
