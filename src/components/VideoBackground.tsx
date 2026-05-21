import { Video, staticFile, useCurrentFrame, interpolate, Easing } from "remotion";

interface VideoBackgroundProps {
  src: string;
  startFrame: number;
  durationInFrames: number;
  style?: React.CSSProperties;
  blur?: number;
  darken?: number;
}

export const VideoBackground: React.FC<VideoBackgroundProps> = ({
  src,
  startFrame,
  durationInFrames,
  style = {},
  blur = 0,
  darken = 0.7,
}) => {
  const frame = useCurrentFrame();
  const relativeFrame = frame - startFrame;

  // Only render if within this segment's timeframe
  if (relativeFrame < -15 || relativeFrame >= durationInFrames + 15) return null;

  const opacity = interpolate(
    relativeFrame,
    [-5, 0, durationInFrames, durationInFrames + 5],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  const scale = interpolate(
    relativeFrame,
    [-5, 0, durationInFrames, durationInFrames + 5],
    [1.05, 1, 1, 1.05],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) }
  );

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        opacity,
        ...style,
      }}
    >
      <Video
        src={staticFile(src)}
        startFrom={0}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: `blur(${blur}px) brightness(${1 - darken})`,
          transform: `scale(${scale})`,
        }}
      />
    </div>
  );
};
