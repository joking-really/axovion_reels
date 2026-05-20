import { Video, staticFile, useCurrentFrame } from "remotion";
import { interpolate } from "remotion";

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
  darken = 0.5,
}) => {
  const frame = useCurrentFrame();
  const relativeFrame = frame - startFrame;
  
  const opacity = interpolate(
    relativeFrame,
    [0, 10, durationInFrames - 10, durationInFrames],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
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
        }}
      />
    </div>
  );
};
