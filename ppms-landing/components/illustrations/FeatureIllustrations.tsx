"use client";

// 8 unique SVG illustrations — one per PPMS module

export function DashboardIllustration() {
  return (
    <svg viewBox="0 0 160 120" className="w-full h-full" fill="none">
      {/* Background panels */}
      <rect x="4" y="4" width="152" height="112" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
      {/* Top bar */}
      <rect x="4" y="4" width="152" height="22" rx="10" fill="rgba(245,158,11,0.08)"/>
      <rect x="4" y="16" width="152" height="10" fill="rgba(245,158,11,0.08)"/>
      <circle cx="16" cy="15" r="4" fill="rgba(245,158,11,0.3)"/>
      <rect x="24" y="12" width="40" height="5" rx="2.5" fill="rgba(255,255,255,0.15)"/>
      <circle cx="148" cy="15" r="3" fill="rgba(52,211,153,0.6)"/>

      {/* KPI cards */}
      {[0,1,2].map(i => (
        <g key={i}>
          <rect x={10 + i*50} y="32" width="44" height="28" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5"/>
          <rect x={14 + i*50} y="37" width="20" height="4" rx="2" fill="rgba(255,255,255,0.12)"/>
          <rect x={14 + i*50} y="44" width="30" height="6" rx="3" fill={i===0?"rgba(245,158,11,0.5)":i===1?"rgba(52,211,153,0.5)":"rgba(96,165,250,0.5)"}/>
        </g>
      ))}

      {/* Line chart */}
      <rect x="10" y="68" width="96" height="42" rx="6" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5"/>
      <defs>
        <linearGradient id="dIllGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.3"/>
          <stop offset="100%" stopColor="#f59e0b" stopOpacity="0"/>
        </linearGradient>
      </defs>
      <path d="M14,100 L28,92 L42,96 L56,84 L70,88 L84,78 L98,82 L102,100 Z" fill="url(#dIllGrad)"/>
      <polyline points="14,100 28,92 42,96 56,84 70,88 84,78 98,82" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="84" cy="78" r="3" fill="#f59e0b" stroke="rgba(10,15,30,1)" strokeWidth="1.5"/>

      {/* Right panel: alerts */}
      <rect x="114" y="68" width="42" height="42" rx="6" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5"/>
      <rect x="118" y="74" width="34" height="7" rx="3" fill="rgba(245,158,11,0.2)" stroke="rgba(245,158,11,0.3)" strokeWidth="0.5"/>
      <rect x="118" y="84" width="34" height="7" rx="3" fill="rgba(52,211,153,0.15)" stroke="rgba(52,211,153,0.3)" strokeWidth="0.5"/>
      <rect x="118" y="94" width="34" height="7" rx="3" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5"/>

      {/* Amber glow */}
      <circle cx="80" cy="60" r="40" fill="rgba(245,158,11,0.04)"/>
    </svg>
  );
}

export function SalesIllustration() {
  return (
    <svg viewBox="0 0 160 120" className="w-full h-full" fill="none">
      <defs>
        <linearGradient id="sIllGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.35"/>
          <stop offset="100%" stopColor="#60a5fa" stopOpacity="0"/>
        </linearGradient>
      </defs>

      {/* Receipt/ticket shape */}
      <rect x="45" y="8" width="70" height="90" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(96,165,250,0.2)" strokeWidth="1"/>
      {/* Ticket tear */}
      {[0,1,2,3,4,5,6].map(i => (
        <circle key={i} cx={48 + i*10} cy="98" r="3" fill="rgba(10,15,30,1)"/>
      ))}

      {/* Receipt lines */}
      <rect x="52" y="16" width="56" height="6" rx="3" fill="rgba(96,165,250,0.5)"/>
      <rect x="52" y="26" width="35" height="3" rx="1.5" fill="rgba(255,255,255,0.12)"/>
      <rect x="52" y="32" width="28" height="3" rx="1.5" fill="rgba(255,255,255,0.08)"/>

      {/* Line items */}
      {[40, 47, 54, 61].map((y, i) => (
        <g key={i}>
          <rect x="52" y={y} width="20" height="3" rx="1.5" fill="rgba(255,255,255,0.1)"/>
          <rect x="88" y={y} width="16" height="3" rx="1.5" fill="rgba(96,165,250,0.4)"/>
        </g>
      ))}

      <line x1="52" y1="71" x2="108" y2="71" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="3,2"/>

      {/* Total */}
      <rect x="52" y="76" width="26" height="5" rx="2.5" fill="rgba(255,255,255,0.15)"/>
      <rect x="82" y="76" width="22" height="5" rx="2.5" fill="rgba(52,211,153,0.6)"/>

      {/* Nozzle icon left side */}
      <g opacity="0.5">
        <path d="M20 55 Q20 40 30 38 L35 38 L35 72 L30 72 Q20 70 20 55Z" fill="rgba(96,165,250,0.2)" stroke="rgba(96,165,250,0.3)" strokeWidth="1"/>
        <rect x="28" y="34" width="12" height="6" rx="2" fill="rgba(96,165,250,0.2)" stroke="rgba(96,165,250,0.3)" strokeWidth="0.8"/>
        <path d="M35 72 L40 78 L40 84 Q40 86 38 86 L36 86" stroke="rgba(96,165,250,0.4)" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      </g>

      {/* Cash/credit indicator */}
      <rect x="8" y="86" width="30" height="14" rx="4" fill="rgba(52,211,153,0.15)" stroke="rgba(52,211,153,0.3)" strokeWidth="0.8"/>
      <text x="23" y="96" textAnchor="middle" fontSize="6" fill="rgba(52,211,153,1)" fontWeight="700">CASH</text>

      <rect x="122" y="86" width="30" height="14" rx="4" fill="rgba(245,158,11,0.15)" stroke="rgba(245,158,11,0.3)" strokeWidth="0.8"/>
      <text x="137" y="96" textAnchor="middle" fontSize="6" fill="rgba(245,158,11,1)" fontWeight="700">CREDIT</text>
    </svg>
  );
}

export function InventoryIllustration() {
  return (
    <svg viewBox="0 0 160 120" className="w-full h-full" fill="none">
      {/* Ground */}
      <rect x="8" y="96" width="144" height="4" rx="2" fill="rgba(255,255,255,0.05)"/>

      {/* Tank 1 - Petrol (tall, mostly full) */}
      <rect x="20" y="30" width="32" height="66" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(245,158,11,0.25)" strokeWidth="1.5"/>
      <rect x="22" y="56" width="28" height="38" rx="4" fill="rgba(245,158,11,0.25)"/>
      <text x="36" y="22" textAnchor="middle" fontSize="7" fill="rgba(245,158,11,0.8)" fontWeight="600">72%</text>
      <text x="36" y="106" textAnchor="middle" fontSize="6" fill="rgba(255,255,255,0.4)">Petrol</text>
      {/* Dip stick */}
      <line x1="44" y1="32" x2="44" y2="94" stroke="rgba(245,158,11,0.5)" strokeWidth="1" strokeDasharray="2,2"/>

      {/* Tank 2 - Diesel (low, warning) */}
      <rect x="64" y="42" width="32" height="54" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(239,68,68,0.35)" strokeWidth="1.5"/>
      <rect x="66" y="76" width="28" height="18" rx="4" fill="rgba(239,68,68,0.3)"/>
      <text x="80" y="34" textAnchor="middle" fontSize="7" fill="rgba(239,68,68,0.9)" fontWeight="600">⚠ 28%</text>
      <text x="80" y="106" textAnchor="middle" fontSize="6" fill="rgba(255,255,255,0.4)">Diesel</text>

      {/* Tank 3 - CNG (medium) */}
      <rect x="108" y="36" width="32" height="60" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(96,165,250,0.25)" strokeWidth="1.5"/>
      <rect x="110" y="59" width="28" height="35" rx="4" fill="rgba(96,165,250,0.25)"/>
      <text x="124" y="28" textAnchor="middle" fontSize="7" fill="rgba(96,165,250,0.8)" fontWeight="600">55%</text>
      <text x="124" y="106" textAnchor="middle" fontSize="6" fill="rgba(255,255,255,0.4)">CNG</text>

      {/* Pipes at bottom */}
      <path d="M36 96 Q36 108 48 108 L80 108 Q96 108 96 96" stroke="rgba(255,255,255,0.08)" strokeWidth="2" fill="none"/>

      {/* Tanker truck arriving */}
      <g opacity="0.7">
        <rect x="2" y="78" width="14" height="10" rx="2" fill="rgba(245,158,11,0.2)" stroke="rgba(245,158,11,0.3)" strokeWidth="0.8"/>
        <rect x="4" y="74" width="8" height="6" rx="1" fill="rgba(245,158,11,0.15)" stroke="rgba(245,158,11,0.25)" strokeWidth="0.8"/>
        <circle cx="5" cy="90" r="2.5" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8"/>
        <circle cx="13" cy="90" r="2.5" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8"/>
      </g>
    </svg>
  );
}

export function AccountingIllustration() {
  return (
    <svg viewBox="0 0 160 120" className="w-full h-full" fill="none">
      <defs>
        <linearGradient id="aIllUp" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#a78bfa" stopOpacity="0"/>
          <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.3"/>
        </linearGradient>
      </defs>

      {/* Ledger book */}
      <rect x="30" y="8" width="100" height="90" rx="6" fill="rgba(255,255,255,0.03)" stroke="rgba(167,139,250,0.2)" strokeWidth="1"/>
      <rect x="30" y="8" width="12" height="90" rx="4" fill="rgba(167,139,250,0.15)"/>

      {/* Ledger header */}
      <rect x="46" y="16" width="76" height="7" rx="3" fill="rgba(167,139,250,0.3)"/>

      {/* Ledger rows */}
      {[28, 37, 46, 55, 64, 73].map((y, i) => (
        <g key={i}>
          <rect x="46" y={y} width="36" height="4" rx="2" fill={`rgba(255,255,255,${0.06 + (i%2)*0.03})`}/>
          <rect x="86" y={y} width="18" height="4" rx="2" fill={i<3?"rgba(52,211,153,0.3)":"rgba(239,68,68,0.25)"}/>
          <rect x="108" y={y} width="14" height="4" rx="2" fill="rgba(167,139,250,0.3)"/>
        </g>
      ))}

      {/* Running balance line */}
      <line x1="46" y1="82" x2="122" y2="82" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8"/>
      <rect x="46" y="84" width="30" height="5" rx="2.5" fill="rgba(255,255,255,0.12)"/>
      <rect x="92" y="84" width="30" height="5" rx="2.5" fill="rgba(52,211,153,0.5)"/>

      {/* Coin stack */}
      {[0,1,2,3].map(i => (
        <ellipse key={i} cx="140" cy={90-i*5} rx="12" ry="4" fill={`rgba(245,158,11,${0.15+i*0.08})`} stroke="rgba(245,158,11,0.4)" strokeWidth="0.8"/>
      ))}
      <ellipse cx="140" cy="70" rx="12" ry="4" fill="rgba(245,158,11,0.5)" stroke="rgba(245,158,11,0.6)" strokeWidth="1"/>
      <text x="140" y="73" textAnchor="middle" fontSize="5" fill="rgba(10,15,30,1)" fontWeight="700">₨</text>

      {/* Profit arrow */}
      <path d="M8 90 L8 50 L16 58 M8 50 L16 42" stroke="rgba(52,211,153,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <text x="8" y="100" textAnchor="middle" fontSize="5.5" fill="rgba(52,211,153,0.7)" fontWeight="600">+18%</text>
    </svg>
  );
}

export function PayrollIllustration() {
  return (
    <svg viewBox="0 0 160 120" className="w-full h-full" fill="none">
      {/* Calendar grid */}
      <rect x="8" y="8" width="88" height="80" rx="6" fill="rgba(255,255,255,0.03)" stroke="rgba(244,63,94,0.2)" strokeWidth="1"/>
      <rect x="8" y="8" width="88" height="18" rx="6" fill="rgba(244,63,94,0.12)"/>
      <rect x="8" y="18" width="88" height="8" fill="rgba(244,63,94,0.12)"/>

      {/* Calendar header */}
      <text x="52" y="20" textAnchor="middle" fontSize="7" fill="rgba(244,63,94,0.9)" fontWeight="700">April 2026</text>

      {/* Day cells */}
      {Array.from({length:28}, (_,i) => {
        const col = i % 7, row = Math.floor(i / 7);
        const x = 12 + col * 12, y = 32 + row * 12;
        const isPresent = ![5,6,12,13,19,20].includes(i);
        const isToday = i === 14;
        return (
          <g key={i}>
            {isToday
              ? <circle cx={x+4} cy={y+4} r="5" fill="rgba(244,63,94,0.5)"/>
              : isPresent
              ? <circle cx={x+4} cy={y+4} r="3.5" fill="rgba(52,211,153,0.2)"/>
              : <circle cx={x+4} cy={y+4} r="3.5" fill="rgba(255,255,255,0.04)"/>
            }
            <circle cx={x+4} cy={y+4} r="1.5" fill={isPresent ? (isToday?"white":"rgba(52,211,153,0.8)") : "rgba(255,255,255,0.1)"}/>
          </g>
        );
      })}

      {/* Staff cards */}
      {[
        { name: "Ali Hassan", role: "Operator", pay: "₨32K", color: "rgba(52,211,153,0.5)", y: 8 },
        { name: "Sara Ahmed", role: "Manager", pay: "₨58K", color: "rgba(96,165,250,0.5)", y: 42 },
        { name: "Malik Usman", role: "Accountant", pay: "₨45K", color: "rgba(167,139,250,0.5)", y: 76 },
      ].map((s, i) => (
        <g key={i}>
          <rect x="104" y={s.y} width="52" height="28" rx="5" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.07)" strokeWidth="0.8"/>
          <circle cx="114" cy={s.y+10} r="6" fill={s.color}/>
          <rect x="122" y={s.y+5} width="28" height="4" rx="2" fill="rgba(255,255,255,0.15)"/>
          <rect x="122" y={s.y+12} width="20" height="3" rx="1.5" fill="rgba(255,255,255,0.08)"/>
          <rect x="104" y={s.y+20} width="52" height="1" fill="rgba(255,255,255,0.04)"/>
          <rect x="124" y={s.y+22} width="24" height="4" rx="2" fill="rgba(52,211,153,0.3)"/>
        </g>
      ))}
    </svg>
  );
}

export function MultiStationIllustration() {
  const stations = [
    { x: 80, y: 35, size: 10, color: "rgba(245,158,11,1)", label: "HQ", online: true },
    { x: 30, y: 70, size: 7, color: "rgba(96,165,250,0.9)", label: "S1", online: true },
    { x: 130, y: 65, size: 7, color: "rgba(96,165,250,0.9)", label: "S2", online: true },
    { x: 55, y: 25, size: 6, color: "rgba(167,139,250,0.8)", label: "S3", online: true },
    { x: 125, y: 25, size: 6, color: "rgba(52,211,153,0.8)", label: "S4", online: true },
    { x: 25, y: 100, size: 5, color: "rgba(255,255,255,0.3)", label: "S5", online: false },
    { x: 140, y: 100, size: 5, color: "rgba(255,255,255,0.3)", label: "S6", online: false },
  ];

  return (
    <svg viewBox="0 0 160 120" className="w-full h-full" fill="none">
      {/* Map background */}
      <rect x="4" y="4" width="152" height="112" rx="8" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>

      {/* Road lines */}
      <path d="M80 35 L30 70" stroke="rgba(255,255,255,0.06)" strokeWidth="6" strokeLinecap="round"/>
      <path d="M80 35 L30 70" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="4,3"/>
      <path d="M80 35 L130 65" stroke="rgba(255,255,255,0.06)" strokeWidth="6" strokeLinecap="round"/>
      <path d="M80 35 L130 65" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="4,3"/>
      <path d="M80 35 L55 25" stroke="rgba(255,255,255,0.06)" strokeWidth="4" strokeLinecap="round"/>
      <path d="M80 35 L125 25" stroke="rgba(255,255,255,0.06)" strokeWidth="4" strokeLinecap="round"/>
      <path d="M30 70 L25 100" stroke="rgba(255,255,255,0.05)" strokeWidth="3"/>
      <path d="M130 65 L140 100" stroke="rgba(255,255,255,0.05)" strokeWidth="3"/>

      {/* Data flow pulses */}
      {[[80,35,30,70],[80,35,130,65],[80,35,55,25],[80,35,125,25]].map(([x1,y1,x2,y2],i) => (
        <circle key={i} r="2" fill="rgba(245,158,11,0.8)">
          <animateMotion dur={`${1.5+i*0.3}s`} repeatCount="indefinite">
            <mpath href={`#road${i}`}/>
          </animateMotion>
        </circle>
      ))}

      {/* Station nodes */}
      {stations.map((s, i) => (
        <g key={i}>
          <circle cx={s.x} cy={s.y} r={s.size + 4} fill={s.color.replace("1)", "0.08)").replace("0.9)", "0.08)").replace("0.8)", "0.08)")}/>
          <circle cx={s.x} cy={s.y} r={s.size} fill={s.color.replace("1)", "0.15)").replace("0.9)", "0.12)").replace("0.8)", "0.1)")} stroke={s.color} strokeWidth="1.5"/>
          <text x={s.x} y={s.y+2} textAnchor="middle" fontSize="5" fill="white" fontWeight="700">{s.label}</text>
          {s.online && <circle cx={s.x+s.size-1} cy={s.y-s.size+1} r="2" fill="rgba(52,211,153,0.9)"/>}
        </g>
      ))}

      {/* Legend */}
      <rect x="6" y="108" width="148" height="8" rx="2" fill="rgba(255,255,255,0.02)"/>
      <circle cx="14" cy="112" r="2" fill="rgba(52,211,153,0.8)"/>
      <text x="19" y="114.5" fontSize="5" fill="rgba(255,255,255,0.4)">Online</text>
      <circle cx="50" cy="112" r="2" fill="rgba(255,255,255,0.3)"/>
      <text x="55" y="114.5" fontSize="5" fill="rgba(255,255,255,0.4)">Offline</text>
      <text x="145" y="114.5" textAnchor="end" fontSize="5" fill="rgba(245,158,11,0.7)" fontWeight="600">5 / 7 online</text>
    </svg>
  );
}

export function RBACIllustration() {
  const roles = [
    { label: "MasterAdmin", level: 0, x: 80, color: "rgba(245,158,11,1)", size: 12 },
    { label: "HeadOffice", level: 1, x: 80, color: "rgba(167,139,250,0.9)", size: 9 },
    { label: "StationAdmin", level: 2, x: 50, color: "rgba(96,165,250,0.85)", size: 7 },
    { label: "Manager", level: 2, x: 110, color: "rgba(96,165,250,0.85)", size: 7 },
    { label: "Accountant", level: 3, x: 35, color: "rgba(52,211,153,0.8)", size: 6 },
    { label: "Operator", level: 3, x: 65, color: "rgba(52,211,153,0.8)", size: 6 },
    { label: "Operator", level: 3, x: 95, color: "rgba(52,211,153,0.8)", size: 6 },
    { label: "Driver", level: 3, x: 125, color: "rgba(255,255,255,0.3)", size: 5 },
  ];
  const yMap: Record<number, number> = {0: 20, 1: 48, 2: 76, 3: 100};

  return (
    <svg viewBox="0 0 160 120" className="w-full h-full" fill="none">
      {/* Shield background */}
      <path d="M80 8 L140 30 L140 70 Q140 100 80 115 Q20 100 20 70 L20 30 Z" fill="rgba(245,158,11,0.04)" stroke="rgba(245,158,11,0.1)" strokeWidth="1"/>

      {/* Connection lines */}
      <line x1="80" y1="32" x2="80" y2="44" stroke="rgba(167,139,250,0.3)" strokeWidth="1"/>
      <line x1="80" y1="57" x2="50" y2="72" stroke="rgba(96,165,250,0.25)" strokeWidth="1"/>
      <line x1="80" y1="57" x2="110" y2="72" stroke="rgba(96,165,250,0.25)" strokeWidth="1"/>
      <line x1="50" y1="83" x2="35" y2="96" stroke="rgba(52,211,153,0.2)" strokeWidth="0.8"/>
      <line x1="50" y1="83" x2="65" y2="96" stroke="rgba(52,211,153,0.2)" strokeWidth="0.8"/>
      <line x1="110" y1="83" x2="95" y2="96" stroke="rgba(52,211,153,0.2)" strokeWidth="0.8"/>
      <line x1="110" y1="83" x2="125" y2="96" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8"/>

      {/* Role nodes */}
      {roles.map((r, i) => {
        const y = yMap[r.level];
        return (
          <g key={i}>
            <circle cx={r.x} cy={y} r={r.size + 3} fill={r.color.replace(/[\d.]+\)$/, "0.06)")}/>
            <circle cx={r.x} cy={y} r={r.size} fill={r.color.replace(/[\d.]+\)$/, "0.15)")} stroke={r.color} strokeWidth="1.2"/>
            {r.level < 2 && <text x={r.x} y={y + 2.5} textAnchor="middle" fontSize="4.5" fill="white" fontWeight="700">{r.label.slice(0,2)}</text>}
            {r.level >= 2 && <circle cx={r.x} cy={y} r="2.5" fill={r.color}/>}
          </g>
        );
      })}

      {/* Key icon at top */}
      <text x="80" y="22" textAnchor="middle" fontSize="7" fill="rgba(245,158,11,0.9)">★</text>

      {/* Labels */}
      <text x="80" y="113" textAnchor="middle" fontSize="5" fill="rgba(255,255,255,0.4)">6-level permission hierarchy</text>
    </svg>
  );
}

export function ReportsIllustration() {
  return (
    <svg viewBox="0 0 160 120" className="w-full h-full" fill="none">
      {/* Document background */}
      <rect x="20" y="6" width="90" height="108" rx="6" fill="rgba(255,255,255,0.03)" stroke="rgba(99,102,241,0.2)" strokeWidth="1"/>
      {/* Fold corner */}
      <path d="M90 6 L110 6 L110 26 L90 6Z" fill="rgba(99,102,241,0.15)" stroke="rgba(99,102,241,0.2)" strokeWidth="0.8"/>

      {/* Report title */}
      <rect x="28" y="16" width="54" height="6" rx="3" fill="rgba(99,102,241,0.5)"/>
      <rect x="28" y="25" width="36" height="4" rx="2" fill="rgba(255,255,255,0.1)"/>

      {/* Bar chart on report */}
      <rect x="28" y="36" width="74" height="40" rx="4" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5"/>
      {[25,40,30,55,45,62,50].map((h, i) => (
        <g key={i}>
          <rect x={32 + i*10} y={76 - h*0.55} width="7" height={h*0.55} rx="2"
            fill={i===5 ? "rgba(99,102,241,0.8)" : "rgba(99,102,241,0.3)"}/>
        </g>
      ))}

      {/* Report lines */}
      {[82, 88, 94, 100].map((y, i) => (
        <rect key={i} x="28" y={y} width={i===0?74:i===1?58:i===2?66:50} height="3" rx="1.5" fill="rgba(255,255,255,0.06)"/>
      ))}

      {/* Alert badges floating right */}
      <g>
        <rect x="116" y="14" width="38" height="20" rx="5" fill="rgba(245,158,11,0.1)" stroke="rgba(245,158,11,0.3)" strokeWidth="0.8"/>
        <text x="135" y="22" textAnchor="middle" fontSize="6" fill="rgba(245,158,11,0.9)" fontWeight="700">⚠ Alert</text>
        <text x="135" y="30" textAnchor="middle" fontSize="5" fill="rgba(245,158,11,0.6)">Low stock</text>
      </g>
      <g>
        <rect x="116" y="40" width="38" height="20" rx="5" fill="rgba(52,211,153,0.1)" stroke="rgba(52,211,153,0.3)" strokeWidth="0.8"/>
        <text x="135" y="48" textAnchor="middle" fontSize="6" fill="rgba(52,211,153,0.9)" fontWeight="700">✓ Done</text>
        <text x="135" y="56" textAnchor="middle" fontSize="5" fill="rgba(52,211,153,0.6)">Daily close</text>
      </g>
      <g>
        <rect x="116" y="66" width="38" height="20" rx="5" fill="rgba(239,68,68,0.1)" stroke="rgba(239,68,68,0.3)" strokeWidth="0.8"/>
        <text x="135" y="74" textAnchor="middle" fontSize="6" fill="rgba(239,68,68,0.9)" fontWeight="700">! Credit</text>
        <text x="135" y="82" textAnchor="middle" fontSize="5" fill="rgba(239,68,68,0.6)">Limit near</text>
      </g>

      {/* Download arrow */}
      <g opacity="0.6">
        <path d="M135 94 L135 108" stroke="rgba(99,102,241,0.7)" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M130 103 L135 110 L140 103" stroke="rgba(99,102,241,0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
    </svg>
  );
}
