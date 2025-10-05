
// Animated background patterns for hero sections
export const TechGridPattern = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5" />
    <div 
      className="absolute inset-0 opacity-20"
      style={{
        backgroundImage: `
          linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px'
      }}
    />
  </div>
);

// Floating particles animation
export const FloatingParticles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(20)].map((_, i) => (
      <div
        key={i}
        className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-pulse"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 3}s`,
          animationDuration: `${2 + Math.random() * 2}s`
        }}
      />
    ))}
  </div>
);

// Circuit board pattern
export const CircuitPattern = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
    <svg className="w-full h-full" viewBox="0 0 400 400">
      <defs>
        <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <path 
            d="M20 20h60v20h-60z M20 60h20v20h-20z M60 60h20v20h-20z" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1"
            className="text-cyan-400"
          />
          <circle cx="20" cy="20" r="2" fill="currentColor" className="text-cyan-400" />
          <circle cx="80" cy="40" r="2" fill="currentColor" className="text-cyan-400" />
          <circle cx="40" cy="80" r="2" fill="currentColor" className="text-cyan-400" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#circuit)" />
    </svg>
  </div>
);

// Data flow animation
export const DataFlowPattern = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent transform -skew-y-12 animate-pulse" />
    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-blue-500/5 to-transparent transform skew-y-12 animate-pulse" style={{ animationDelay: '1s' }} />
  </div>
);

// Hexagon pattern
export const HexagonPattern = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
    <svg className="w-full h-full" viewBox="0 0 400 400">
      <defs>
        <pattern id="hexagon" x="0" y="0" width="60" height="52" patternUnits="userSpaceOnUse">
          <polygon 
            points="30,2 52,15 52,37 30,50 8,37 8,15" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1"
            className="text-cyan-400"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hexagon)" />
    </svg>
  </div>
);

// Code matrix effect
export const CodeMatrixPattern = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
    <div className="font-mono text-xs text-cyan-400/30 leading-4 whitespace-pre-wrap break-all">
      {Array.from({ length: 50 }, (_, i) => (
        <div key={i} className="animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}>
          {Math.random().toString(36).substring(2, 15)}
        </div>
      ))}
    </div>
  </div>
);
