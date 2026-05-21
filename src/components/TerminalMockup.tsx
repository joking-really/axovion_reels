import { useCurrentFrame, interpolate, Easing } from "remotion";

interface TerminalMockupProps {
  lines: string[];
  startFrame: number;
  durationInFrames: number;
  typingSpeed?: number;
}

export const TerminalMockup: React.FC<TerminalMockupProps> = ({
  lines,
  startFrame,
  durationInFrames,
  typingSpeed = 3,
}) => {
  const frame = useCurrentFrame();
  const relativeFrame = frame - startFrame;

  if (relativeFrame < -10 || relativeFrame >= durationInFrames + 10) return null;

  const opacity = interpolate(
    relativeFrame,
    [0, 10, durationInFrames - 10, durationInFrames],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) }
  );

  const visibleLines = Math.floor(relativeFrame / typingSpeed);
  
  // Cursor blink - slower, more natural (every 20 frames ~ 0.66s at 30fps)
  const showCursor = relativeFrame % 20 < 10;

  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        opacity,
        width: "85%",
        maxWidth: "700px",
        background: "#0c0c0c",
        borderRadius: "8px",
        border: "1px solid #222",
        boxShadow: "0 20px 60px rgba(0,0,0,0.9)",
        fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
        fontSize: "14px",
        lineHeight: 1.6,
        overflow: "hidden",
        zIndex: 50,
      }}
    >
      {/* Terminal header */}
      <div
        style={{
          background: "#1a1a1a",
          padding: "8px 12px",
          display: "flex",
          alignItems: "center",
          gap: "6px",
          borderBottom: "1px solid #222",
        }}
      >
        <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ff5f56" }} />
        <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ffbd2e" }} />
        <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#27c93f" }} />
        <span style={{ marginLeft: "8px", color: "#666", fontSize: "12px" }}>axovion — zsh</span>
      </div>

      {/* Terminal content */}
      <div style={{ padding: "16px" }}>
        {lines.slice(0, visibleLines).map((line, i) => (
          <div
            key={i}
            style={{
              color: line.startsWith("$") ? "#4ade80" : line.startsWith("//") ? "#666" : "#e5e5e5",
              opacity: i === visibleLines - 1 ? 1 : 0.85,
            }}
          >
            {line}
            {i === visibleLines - 1 && showCursor && (
              <span style={{ color: "#4ade80" }}>▊</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
