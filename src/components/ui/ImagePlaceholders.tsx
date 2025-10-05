// Professional image placeholders and enhanced visual components

export const SecurityShieldGraphic = () => (
  <div className="relative w-full h-48 bg-gradient-to-br from-red-900/20 to-red-600/10 rounded-xl overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/5 to-transparent" />
    <div className="flex items-center justify-center h-full">
      <div className="relative">
        <div className="w-24 h-24 bg-red-500/20 rounded-full flex items-center justify-center">
          <div className="w-16 h-16 bg-red-500/30 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-red-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
        <div className="absolute -inset-4 bg-red-500/10 rounded-full animate-pulse" />
      </div>
    </div>
  </div>
);

export const PerformanceGraphGraphic = () => (
  <div className="relative w-full h-48 bg-gradient-to-br from-yellow-900/20 to-yellow-600/10 rounded-xl overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/5 to-transparent" />
    <div className="flex items-center justify-center h-full p-8">
      <svg className="w-full h-full text-yellow-400/60" viewBox="0 0 400 200">
        <path 
          d="M20 180 L80 120 L140 80 L200 40 L260 60 L320 20 L380 30" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="3"
          className="animate-pulse"
        />
        <path 
          d="M20 180 L80 140 L140 100 L200 80 L260 90 L320 60 L380 70" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          opacity="0.5"
        />
        {[20, 80, 140, 200, 260, 320, 380].map((x, i) => (
          <circle key={i} cx={x} cy={180 - i * 20} r="3" fill="currentColor" className="animate-pulse" />
        ))}
      </svg>
    </div>
  </div>
);

export const AnalyticsChartGraphic = () => (
  <div className="relative w-full h-48 bg-gradient-to-br from-blue-900/20 to-blue-600/10 rounded-xl overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent" />
    <div className="flex items-center justify-center h-full p-8">
      <div className="grid grid-cols-6 gap-2 w-full h-full items-end">
        {[60, 80, 45, 90, 70, 95].map((height, i) => (
          <div 
            key={i}
            className="bg-blue-400/40 rounded-t animate-pulse"
            style={{ 
              height: `${height}%`,
              animationDelay: `${i * 0.2}s`
            }}
          />
        ))}
      </div>
    </div>
  </div>
);

export const ServerInfrastructureGraphic = () => (
  <div className="relative w-full h-48 bg-gradient-to-br from-slate-900/40 to-slate-600/20 rounded-xl overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-500/5 to-transparent" />
    <div className="flex items-center justify-center h-full">
      <div className="grid grid-cols-3 gap-4">
        {[1, 2, 3].map((server) => (
          <div key={server} className="flex flex-col gap-1">
            {[1, 2, 3, 4].map((rack) => (
              <div 
                key={rack}
                className="w-12 h-3 bg-slate-400/30 rounded-sm animate-pulse"
                style={{ animationDelay: `${(server + rack) * 0.1}s` }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const CodePatternBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
    <div className="font-mono text-xs text-cyan-400 leading-tight">
      <div className="grid grid-cols-8 gap-1 h-full">
        {Array.from({ length: 64 }, (_, i) => (
          <div key={i} className="animate-pulse" style={{ animationDelay: `${i * 0.05}s` }}>
            {Math.random() > 0.5 ? '1' : '0'}
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const TechStackVisualization = () => (
  <div className="relative w-full h-64 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 rounded-xl overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent" />
    <div className="flex items-center justify-center h-full p-8">
      <div className="grid grid-cols-4 gap-6">
        {['Frontend', 'Backend', 'Database', 'Cloud'].map((tech, i) => (
          <div key={tech} className="text-center">
            <div 
              className="w-12 h-12 bg-cyan-400/20 rounded-lg mb-2 animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
            <div className="text-xs text-slate-400">{tech}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
