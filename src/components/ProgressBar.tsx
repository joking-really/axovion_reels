import { useCurrentFrame, interpolate } from "remotion";

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
  });

  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "4px",
        background: "rgba(255,255,255,0.1)",
        zIndex: 100,
      }}
    >
      <div
        style={{
          width: `${progress}%`,
          height: "100%",
          background: color,
          transition: "width 0.1s linear",
        }}
      />
    </div>
  );
};
