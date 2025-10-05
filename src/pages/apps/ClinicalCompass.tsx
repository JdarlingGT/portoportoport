import ClickToLaunch from "../../components/ClickToLaunch";
import KPIChips from "../../components/KPIChips";
import HotspotHelp from "../../components/HotspotHelp";

export default function ClinicalCompass() {
  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Clinical Compass</h1>
          <p className="text-xl text-slate-300">Clinical reasoning + treatment protocol explorer.</p>
          <KPIChips app="clinical-compass" />
        </header>

        <ClickToLaunch
          appTitle="Clinical Compass"
          tagline="Navigate from symptoms → reasoning → protocol in one guided flow."
          bullets={[
            "Decision flow: intake → DX clues → recommended protocol",
            "One-screen clarity with collapsible depth",
            "Fast, offline-capable HTML build"
          ]}
          src="/apps/clinical-compass/index.html"
          height={1200}
        />

        <section id="how-it-works" className="mt-12 space-y-4">
          <h2 className="text-2xl font-semibold">How it works</h2>
          <p className="text-slate-300">
            Start with patient presentation, refine with decision points, then output a concise,
            clinically sensible protocol. Built to be fast in clinic settings.
          </p>
        </section>

        <div className="mt-10">
          <HotspotHelp
            tips={[
              { x: "14%", y: "24%", text: "Intake: capture key symptoms & flags quickly." },
              { x: "46%", y: "52%", text: "Decision nodes: toggle to refine clinical direction." },
              { x: "78%", y: "70%", text: "Protocol: copy/print for records and patient handouts." }
            ]}
          />
        </div>
      </div>
    </div>
  );
}
