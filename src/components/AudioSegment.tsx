import { Audio, staticFile } from "remotion";

interface AudioSegmentProps {
  src: string;
  startFrame: number;
  durationInFrames: number;
  fadeInFrames?: number;
  fadeOutFrames?: number;
}

export const AudioSegment: React.FC<AudioSegmentProps> = ({
  src,
  startFrame,
  durationInFrames,
  fadeInFrames = 5,
  fadeOutFrames = 5,
}) => {
  return (
    <Audio
      src={staticFile(src)}
      startFrom={0}
      endAt={durationInFrames}
      volume={(f) => {
        const relativeFrame = f - startFrame;
        if (relativeFrame < 0 || relativeFrame >= durationInFrames) return 0;
        
        const fadeIn = Math.min(relativeFrame / fadeInFrames, 1);
        const fadeOut = Math.min(
          (durationInFrames - relativeFrame) / fadeOutFrames,
          1
        );
        
        return fadeIn * fadeOut;
      }}
    />
  );
};
