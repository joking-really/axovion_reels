import { Composition } from "remotion";
import { TOFReel } from "./compositions/TOFReel";
import { MOFReel } from "./compositions/MOFReel";
import { BOFReel } from "./compositions/BOFReel";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="TOFReel"
        component={TOFReel}
        durationInFrames={1511}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="MOFReel"
        component={MOFReel}
        durationInFrames={1110}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="BOFReel"
        component={BOFReel}
        durationInFrames={1892}
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};