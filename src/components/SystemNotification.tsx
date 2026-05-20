import { useCurrentFrame, interpolate } from "remotion";

interface SystemNotificationProps {
  title: string;
  message: string;
  type?: "success" | "error" | "warning" | "info";
  startFrame: number;
  durationInFrames: number;
}

export const SystemNotification: React.FC<SystemNotificationProps> = ({
  title,
  message,
  type = "info",
  startFrame,
  durationInFrames,
}) => {
  const frame = useCurrentFrame();
  const relativeFrame = frame - startFrame;

  if (relativeFrame < 0 || relativeFrame >= durationInFrames) return null;

  const opacity = interpolate(
    relativeFrame,
    [0, 10, durationInFrames - 10, durationInFrames],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  const slideX = interpolate(
    relativeFrame,
    [0, 15],
    [100, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  const colors = {
    success: { bg: "#064e3b", border: "#10b981", icon: "●" },
    error: { bg: "#450a0a", border: "#ef4444", icon: "●" },
    warning: { bg: "#451a03", border: "#f59e0b", icon: "●" },
    info: { bg: "#172554", border: "#3b82f6", icon: "●" },
  };

  const color = colors[type];

  return (
    <div
      style={{
        position: "absolute",
        top: "15%",
        right: "5%",
        transform: `translateX(${slideX}px)`,
        opacity,
        width: "320px",
        background: color.bg,
        borderLeft: `3px solid ${color.border}`,
        borderRadius: "4px",
        padding: "14px 16px",
        fontFamily: "Inter, system-ui, sans-serif",
        zIndex: 60,
        boxShadow: `0 4px 20px ${color.border}20`,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
        <span style={{ color: color.border, fontSize: "10px" }}>{color.icon}</span>
        <span style={{ color: "#e5e5e5", fontSize: "13px", fontWeight: 600 }}>{title}</span>
      </div>
      <div style={{ color: "#a3a3a3", fontSize: "12px", lineHeight: 1.5 }}>{message}</div>
    </div>
  );
};
