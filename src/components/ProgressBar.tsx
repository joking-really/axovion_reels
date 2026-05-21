import { useCurrentFrame, interpolate, Easing } from "remotion";

interface ProgressBarProps {
  totalFrames: number;
  color?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  totalFrames,
  color = "#3b82f6",
}) => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [0, totalFrames], [0, 100], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  });

  // Glow pulse at the leading edge
  const glowOpacity = interpolate(
    frame % 30,
    [0, 15, 30],
    [0.6, 1, 0.6],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "3px",
        background: "rgba(255,255,255,0.05)",
        zIndex: 100,
      }}
    >
      <div
        style={{
          width: `${progress}%`,
          height: "100%",
          background: color,
          boxShadow: `0 0 6px ${color}${Math.floor(glowOpacity * 255).toString(16).padStart(2, "0")}`,
        }}
      />
    </div>
  );
};
