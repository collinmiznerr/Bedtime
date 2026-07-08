import { useState } from "react";

const COLORS = {
  openBg: "#7C93BF",
  cream: "#F4EFE3",
  navy: "#1F2B4A",
  navyMid: "#2E3D63",
  onboardSkyTop: "#0E1B3A",
  onboardSkyBottom: "#1C2C52",
  moon: "#F3D98B",
  modeBg: "#F6F1E7",
  bedtimeCard: "#7C93BF",
  focusCard: "#8B9A6B",
  moodCard: "#D99A61",
  resetCard: "#A79BC7",
};

function StatusBar({ light }) {
  const color = light ? COLORS.cream : COLORS.navy;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 24px 0",
        fontSize: 14,
        fontWeight: 600,
        color,
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <span>9:41</span>
      <span style={{ display: "flex", gap: 6, alignItems: "center" }}>
        <span>●●●</span>
        <span>▮▮</span>
      </span>
    </div>
  );
}

function MoonIcon({ size = 28, color = COLORS.moon }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 1 0 10.5 10.5Z"
        fill={color}
      />
      <path
        d="M15 3l0.6 1.4L17 5l-1.4 0.6L15 7l-0.6-1.4L13 5l1.4-0.6L15 3Z"
        fill={color}
      />
      <path
        d="M18.5 8l0.4 1 1 0.4-1 0.4-0.4 1-0.4-1-1-0.4 1-0.4 0.4-1Z"
        fill={color}
      />
    </svg>
  );
}

function EyeIcon({ size = 22, color = COLORS.cream }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12Z"
        stroke={color}
        strokeWidth="1.6"
      />
      <circle cx="12" cy="12" r="2.6" fill={color} />
    </svg>
  );
}

function SmileIcon({ size = 22, color = COLORS.cream }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="1.6" />
      <circle cx="8.7" cy="10" r="1" fill={color} />
      <circle cx="15.3" cy="10" r="1" fill={color} />
      <path
        d="M7.5 14c1 1.6 2.7 2.5 4.5 2.5s3.5-.9 4.5-2.5"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BedIcon({ size = 22, color = COLORS.cream }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M3 18v-7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path d="M3 18v2M21 18v2" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
      <path d="M3 13V7a1 1 0 0 1 1-1h5v4" stroke={color} strokeWidth="1.6" />
      <rect x="9" y="10" width="6" height="3" rx="1" fill={color} />
    </svg>
  );
}

function NightScene() {
  return (
    <svg
      viewBox="0 0 375 620"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      preserveAspectRatio="xMidYMax slice"
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={COLORS.onboardSkyTop} />
          <stop offset="100%" stopColor={COLORS.onboardSkyBottom} />
        </linearGradient>
        <linearGradient id="lake" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#22315a" />
          <stop offset="100%" stopColor="#101a35" />
        </linearGradient>
      </defs>
      <rect width="375" height="620" fill="url(#sky)" />
      {[
        [40, 60], [80, 40], [130, 90], [180, 50], [230, 110],
        [280, 70], [320, 100], [60, 150], [300, 160], [200, 30],
        [350, 40], [20, 200], [110, 30],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 1.6 : 1} fill="#EAE6F5" opacity="0.8" />
      ))}
      <g transform="translate(275,70)">
        <path
          d="M40 30A26 26 0 1 1 14 3a20 20 0 1 0 26 27Z"
          fill={COLORS.moon}
        />
      </g>
      <polygon points="0,420 60,320 120,400 190,300 260,410 320,340 375,400 375,460 0,460" fill="#2A3B66" opacity="0.55" />
      <polygon points="0,460 90,370 170,440 250,360 375,430 375,500 0,500" fill="#1E2C50" opacity="0.75" />
      {[30, 70, 110, 150, 300, 335].map((x, i) => (
        <g key={i} transform={`translate(${x},${430 - (i % 2) * 12})`}>
          <polygon points="0,60 14,0 28,60" fill="#111A34" />
          <polygon points="3,45 14,10 25,45" fill="#0C1428" />
        </g>
      ))}
      <g transform="translate(255,410)">
        <polygon points="0,45 40,45 40,15 20,0 0,15" fill="#1B2545" />
        <polygon points="-4,15 20,-6 44,15 38,15 20,0 2,15" fill="#0F1730" />
        <rect x="8" y="24" width="9" height="9" fill="#F3C86B" />
        <rect x="23" y="24" width="9" height="9" fill="#F3C86B" />
        <rect x="16" y="34" width="8" height="11" fill="#0F1730" />
      </g>
      <rect x="0" y="460" width="375" height="160" fill="url(#lake)" />
      <g opacity="0.35" transform="translate(0,460) scale(1,-1)">
        <polygon points="0,-40 90,-130 170,-60 250,-140 375,-70 375,0 0,0" fill="#1E2C50" />
      </g>
      <rect x="8" y="425" width="55" height="55" fill="#F3C86B" opacity="0.12" />
    </svg>
  );
}

function PillButton({ children, onClick, bg, color, style }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: "100%",
        padding: "17px 0",
        borderRadius: 999,
        border: "none",
        background: bg,
        color,
        fontFamily: "Georgia, 'Times New Roman', serif",
        fontSize: 18,
        fontWeight: 700,
        cursor: "pointer",
        transition: "transform 0.12s ease, opacity 0.12s ease",
        ...style,
      }}
      onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.97)")}
      onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      {children}
    </button>
  );
}

function OpenAppScreen({ goNext }) {
  return (
    <div
      style={{
        height: "100%",
        background: COLORS.openBg,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <StatusBar light />
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 32px",
          textAlign: "center",
          gap: 18,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <MoonIcon size={34} />
          <span
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontWeight: 800,
              fontSize: 40,
              color: COLORS.cream,
              letterSpacing: 0.5,
            }}
          >
            Bedtime
          </span>
        </div>
      </div>
      <div
        style={{
          padding: "0 40px 44px",
          textAlign: "center",
          color: COLORS.cream,
          fontFamily: "system-ui, sans-serif",
          fontSize: 19,
          lineHeight: 1.4,
        }}
      >
        &ldquo;Because why the hell am I watching someone get hit by a bus a
        like 2 AM?&rdquo;
      </div>
      <div style={{ padding: "0 28px 40px" }}>
        <PillButton bg={COLORS.cream} color={COLORS.navy} onClick={goNext}>
          Next
        </PillButton>
      </div>
    </div>
  );
}

function OnboardingScreen({ goNext, goBack }) {
  return (
    <div style={{ height: "100%", position: "relative", overflow: "hidden" }}>
      <NightScene />
      <div
        style={{
          position: "relative",
          zIndex: 1,
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <StatusBar light />
        </div>
        <button
          onClick={goBack}
          aria-label="Back"
          style={{
            background: "none",
            border: "none",
            color: COLORS.cream,
            fontSize: 22,
            width: 40,
            textAlign: "left",
            padding: "8px 20px",
            cursor: "pointer",
          }}
        >
          ‹
        </button>
        <div style={{ padding: "18px 28px 0" }}>
          <h1
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: 34,
              fontWeight: 700,
              color: COLORS.cream,
              lineHeight: 1.15,
              margin: 0,
            }}
          >
            Social media doesn&rsquo;t have to be so loud.
          </h1>
          <p
            style={{
              marginTop: 18,
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: 16,
              color: "#D9DCEE",
              lineHeight: 1.5,
              maxWidth: 260,
            }}
          >
            Bedtime filters your feeds so you can relax, focus, or
            reset-anytime.
          </p>
        </div>
        <div style={{ flex: 1 }} />
        <div style={{ padding: "0 28px 18px" }}>
          <PillButton bg={COLORS.openBg} color={COLORS.cream} onClick={goNext}>
            Get Started
          </PillButton>
        </div>
        <div
          style={{
            textAlign: "center",
            paddingBottom: 40,
            fontFamily: "Georgia, 'Times New Roman', serif",
            color: COLORS.cream,
            fontSize: 16,
          }}
        >
          Sign in
        </div>
      </div>
    </div>
  );
}

function ModeCard({ icon, title, subtitle, bg, textColor, subColor, onClick, selected }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        gap: 14,
        padding: "16px 20px",
        borderRadius: 20,
        border: selected ? `2px solid ${COLORS.navy}` : "2px solid transparent",
        background: bg,
        cursor: "pointer",
        textAlign: "left",
        marginBottom: 14,
      }}
    >
      <span
        style={{
          width: 34,
          height: 34,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.22)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        {icon}
      </span>
      <span>
        <div
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: 19,
            fontWeight: 700,
            color: textColor,
          }}
        >
          {title}
        </div>
        <div style={{ fontSize: 12.5, color: subColor, marginTop: 2 }}>
          {subtitle}
        </div>
      </span>
    </button>
  );
}

function ChooseModeScreen({ goBack, onSelectMode, selectedMode }) {
  const modes = [
    {
      id: "bedtime",
      title: "Bedtime",
      subtitle: "Wind down for a better night's sleep",
      bg: COLORS.bedtimeCard,
      icon: <MoonIcon size={18} color="#fff" />,
    },
    {
      id: "focus",
      title: "Focus",
      subtitle: "Stay concentrated, avoid distractions",
      bg: COLORS.focusCard,
      icon: <EyeIcon size={18} />,
    },
    {
      id: "mood",
      title: "Good Mood",
      subtitle: "Uplifting content, less negative",
      bg: COLORS.moodCard,
      icon: <SmileIcon size={18} />,
    },
    {
      id: "reset",
      title: "Reset",
      subtitle: "Relax, breathe, and recharge",
      bg: COLORS.resetCard,
      icon: <BedIcon size={18} />,
    },
  ];

  return (
    <div style={{ height: "100%", background: COLORS.modeBg, display: "flex", flexDirection: "column" }}>
      <StatusBar />
      <button
        onClick={goBack}
        aria-label="Back"
        style={{
          background: "none",
          border: "none",
          color: COLORS.navy,
          fontSize: 22,
          width: 40,
          textAlign: "left",
          padding: "8px 20px",
          cursor: "pointer",
        }}
      >
        ‹
      </button>
      <div style={{ padding: "8px 28px 0", textAlign: "center" }}>
        <h1
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: 28,
            color: COLORS.navy,
            margin: 0,
            lineHeight: 1.2,
          }}
        >
          What mode are you in?
        </h1>
        <p
          style={{
            marginTop: 10,
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: 14,
            color: COLORS.navyMid,
            lineHeight: 1.4,
          }}
        >
          We&rsquo;ll customize your feed for how you want to feel.
        </p>
      </div>
      <div style={{ padding: "26px 24px 0" }}>
        {modes.map((m) => (
          <ModeCard
            key={m.id}
            icon={m.icon}
            title={m.title}
            subtitle={m.subtitle}
            bg={m.bg}
            textColor="#fff"
            subColor="rgba(255,255,255,0.85)"
            selected={selectedMode === m.id}
            onClick={() => onSelectMode(m.id)}
          />
        ))}
      </div>
      <div
        style={{
          textAlign: "center",
          marginTop: 6,
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontSize: 15,
          color: COLORS.navy,
          textDecoration: "underline",
          cursor: "pointer",
        }}
      >
        See all modes
      </div>
      <div style={{ flex: 1 }} />
      {selectedMode && (
        <div style={{ padding: "0 28px 40px" }}>
          <PillButton bg={COLORS.navy} color={COLORS.cream} onClick={() => {}}>
            Continue
          </PillButton>
        </div>
      )}
    </div>
  );
}

export default function BedtimeApp() {
  const [screenIndex, setScreenIndex] = useState(0);
  const [selectedMode, setSelectedMode] = useState(null);

  const screens = ["open", "onboarding", "mode"];

  const goNext = () => setScreenIndex((i) => Math.min(i + 1, screens.length - 1));
  const goBack = () => setScreenIndex((i) => Math.max(i - 1, 0));
  const goTo = (i) => setScreenIndex(i);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 20,
        padding: "24px 12px",
        background: "#EDEBE4",
        minHeight: "100vh",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div
        style={{
          width: 375,
          height: 812,
          borderRadius: 44,
          overflow: "hidden",
          background: "#000",
          border: "10px solid #111",
          boxShadow: "0 20px 50px rgba(0,0,0,0.35)",
          position: "relative",
        }}
      >
        {screens[screenIndex] === "open" && <OpenAppScreen goNext={goNext} />}
        {screens[screenIndex] === "onboarding" && (
          <OnboardingScreen goNext={goNext} goBack={goBack} />
        )}
        {screens[screenIndex] === "mode" && (
          <ChooseModeScreen
            goBack={goBack}
            selectedMode={selectedMode}
            onSelectMode={(id) =>
              setSelectedMode((cur) => (cur === id ? null : id))
            }
          />
        )}
        <div
          style={{
            position: "absolute",
            bottom: 8,
            left: "50%",
            transform: "translateX(-50%)",
            width: 130,
            height: 5,
            borderRadius: 3,
            background: screenIndex === 0 ? "rgba(244,239,227,0.6)" : "rgba(0,0,0,0.25)",
          }}
        />
      </div>

      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
        {screens.map((s, i) => (
          <button
            key={s}
            onClick={() => goTo(i)}
            style={{
              width: 9,
              height: 9,
              borderRadius: "50%",
              border: "none",
              cursor: "pointer",
              background: i === screenIndex ? "#3B4A75" : "#C9C4B6",
            }}
            aria-label={`Go to ${s} screen`}
          />
        ))}
      </div>
      <div style={{ fontSize: 13, color: "#7A7566" }}>
        Screen {screenIndex + 1} of {screens.length} &middot; more coming soon
      </div>
    </div>
  );
}