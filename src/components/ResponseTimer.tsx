import { useCurrentFrame, interpolate } from "remotion";

interface ResponseTimerProps {
  startFrame: number;
  durationInFrames: number;
  targetMs?: number;
}

export const ResponseTimer: React.FC<ResponseTimerProps> = ({
  startFrame,
  durationInFrames,
  targetMs = 5000,
}) => {
  const frame = useCurrentFrame();
  const relativeFrame = frame - startFrame;

  if (relativeFrame < 0 || relativeFrame >= durationInFrames) return null;

  const opacity = interpolate(
    relativeFrame,
    [0, 8, durationInFrames - 8, durationInFrames],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  const progress = interpolate(
    relativeFrame,
    [0, durationInFrames * 0.7],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  const currentMs = Math.floor(progress * targetMs);
  const isCritical = currentMs > targetMs * 0.8;

  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        opacity,
        width: "80%",
        maxWidth: "500px",
        textAlign: "center",
        zIndex: 50,
      }}
    >
      <div
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "72px",
          fontWeight: 700,
          color: isCritical ? "#ef4444" : "#fbbf24",
          textShadow: "0 0 40px rgba(239,68,68,0.3)",
          letterSpacing: "-0.02em",
        }}
      >
        {currentMs.toString().padStart(4, "0")}ms
      </div>
      <div
        style={{
          marginTop: "16px",
          height: "4px",
          background: "rgba(255,255,255,0.1)",
          borderRadius: "2px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${progress * 100}%`,
            height: "100%",
            background: isCritical
              ? "linear-gradient(90deg, #fbbf24, #ef4444)"
              : "#fbbf24",
            transition: "width 0.1s linear",
          }}
        />
      </div>
      <div
        style={{
          marginTop: "12px",
          fontFamily: "Inter, system-ui, sans-serif",
          fontSize: "14px",
          color: "#888",
          textTransform: "uppercase",
          letterSpacing: "0.15em",
        }}
      >
        Response Time
      </div>
    </div>
  );
};
