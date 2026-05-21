import { useCurrentFrame, interpolate, Easing } from "remotion";

interface TextOverlayProps {
  text: string;
  startFrame: number;
  durationInFrames: number;
  style?: React.CSSProperties;
  animation?: "fade" | "slideUp" | "typewriter" | "scaleIn";
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

  if (relativeFrame < -10 || relativeFrame >= durationInFrames + 10) return null;

  let opacity = 1;
  let transform = "translateY(0)";
  let scale = 1;

  const fadeInDuration = 10;
  const fadeOutDuration = 10;

  if (animation === "fade") {
    opacity = interpolate(
      relativeFrame,
      [0, fadeInDuration, durationInFrames - fadeOutDuration, durationInFrames],
      [0, 1, 1, 0],
      { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) }
    );
  } else if (animation === "slideUp") {
    opacity = interpolate(
      relativeFrame,
      [0, fadeInDuration, durationInFrames - fadeOutDuration, durationInFrames],
      [0, 1, 1, 0],
      { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) }
    );
    const y = interpolate(
      relativeFrame,
      [0, fadeInDuration],
      [40, 0],
      { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) }
    );
    transform = `translateY(${y}px)`;
  } else if (animation === "scaleIn") {
    opacity = interpolate(
      relativeFrame,
      [0, fadeInDuration, durationInFrames - fadeOutDuration, durationInFrames],
      [0, 1, 1, 0],
      { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) }
    );
    scale = interpolate(
      relativeFrame,
      [0, fadeInDuration],
      [0.9, 1],
      { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.back(1.5)) }
    );
  }

  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        padding: "0 48px",
        textAlign: "center",
        opacity,
        transform: `${transform} scale(${scale})`,
        ...style,
      }}
    >
      <p
        style={{
          fontFamily: "Inter, system-ui, sans-serif",
          fontWeight: 700,
          fontSize: style.fontSize || "52px",
          lineHeight: 1.3,
          color: "#ffffff",
          textShadow: "0 2px 30px rgba(0,0,0,0.9), 0 0 60px rgba(0,0,0,0.5)",
          margin: 0,
          letterSpacing: "-0.02em",
        }}
      >
        {text}
      </p>
    </div>
  );
};
