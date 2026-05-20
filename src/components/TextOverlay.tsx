import { useCurrentFrame, interpolate } from "remotion";

interface TextOverlayProps {
  text: string;
  startFrame: number;
  durationInFrames: number;
  style?: React.CSSProperties;
  animation?: "fade" | "slideUp" | "typewriter";
  delay?: number;
}

export const TextOverlay: React.FC<TextOverlayProps> = ({
  text,
  startFrame,
  durationInFrames,
  style = {},
  animation = "fade",
  delay = 0,
}) => {
  const frame = useCurrentFrame();
  const relativeFrame = frame - startFrame - delay;

  if (relativeFrame < 0 || relativeFrame >= durationInFrames) return null;

  let opacity = 1;
  let transform = "translateY(0)";

  if (animation === "fade") {
    opacity = interpolate(
      relativeFrame,
      [0, 8, durationInFrames - 8, durationInFrames],
      [0, 1, 1, 0],
      { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
    );
  } else if (animation === "slideUp") {
    opacity = interpolate(
      relativeFrame,
      [0, 10, durationInFrames - 10, durationInFrames],
      [0, 1, 1, 0],
      { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
    );
    const y = interpolate(
      relativeFrame,
      [0, 10],
      [30, 0],
      { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
    );
    transform = `translateY(${y}px)`;
  }

  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        padding: "0 40px",
        textAlign: "center",
        opacity,
        transform,
        ...style,
      }}
    >
      <p
        style={{
          fontFamily: "Inter, system-ui, sans-serif",
          fontWeight: 700,
          fontSize: "52px",
          lineHeight: 1.3,
          color: "#ffffff",
          textShadow: "0 2px 20px rgba(0,0,0,0.8)",
          margin: 0,
          letterSpacing: "-0.02em",
        }}
      >
        {text}
      </p>
    </div>
  );
};
