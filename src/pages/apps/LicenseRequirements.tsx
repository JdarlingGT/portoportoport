import ClickToLaunch from "../../components/ClickToLaunch";
import KPIChips from "../../components/KPIChips";

export default function LicenseRequirements() {
  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Practitioner License Requirements</h1>
          <p className="text-xl text-slate-300">Look up license/CE rules by state & discipline in seconds.</p>
          <KPIChips app="license-requirements" />
        </header>

        <ClickToLaunch
          appTitle="License Requirements"
          tagline="Simple lookups. Clear outputs. Copy-ready text."
          bullets={[
            "Filters by state and practitioner type",
            "Plain-language rule summaries",
            "Copy to clipboard for onboarding or FAQs"
          ]}
          src="/apps/license-requirements/index.html"
          height={1100}
        />

        <section id="how-it-works" className="mt-12 space-y-4">
          <h2 className="text-2xl font-semibold">How it works</h2>
          <p className="text-slate-300">
            Select a state and role to view requirements, renewal cadence, CE notes, and references.
          </p>
        </section>
      </div>
    </div>
  );
}
