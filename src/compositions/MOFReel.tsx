import { AbsoluteFill, Audio, staticFile } from "remotion";
import { VideoBackground } from "../components/VideoBackground";
import { TextOverlay } from "../components/TextOverlay";
import { ScreenMockup } from "../components/ScreenMockup";
import { ProgressBar } from "../components/ProgressBar";

// Duration: 37s = 1110 frames at 30fps
export const MOFReel = () => {
  const totalFrames = 1110;

  // Segment timings (in frames)
  const segments = {
    hook: { start: 0, duration: 161 },
    fail1: { start: 161, duration: 259 },
    fail2: { start: 420, duration: 270 },
    fail3: { start: 690, duration: 225 },
    close: { start: 915, duration: 195 },
  };

  return (
    <AbsoluteFill style={{ background: "#0a0a0a" }}>
      {/* Background Videos */}
      <VideoBackground
        src="mof_hook_bg.mp4"
        startFrame={segments.hook.start}
        durationInFrames={segments.hook.duration}
        blur={2}
        darken={0.6}
      />
      <VideoBackground
        src="mof_fail1_bg.mp4"
        startFrame={segments.fail1.start}
        durationInFrames={segments.fail1.duration}
        blur={2}
        darken={0.6}
      />
      <VideoBackground
        src="mof_fail2_bg.mp4"
        startFrame={segments.fail2.start}
        durationInFrames={segments.fail2.duration}
        blur={2}
        darken={0.6}
      />
      <VideoBackground
        src="mof_fail3_bg.mp4"
        startFrame={segments.fail3.start}
        durationInFrames={segments.fail3.duration}
        blur={2}
        darken={0.6}
      />
      <VideoBackground
        src="mof_close_bg.mp4"
        startFrame={segments.close.start}
        durationInFrames={segments.close.duration}
        blur={2}
        darken={0.6}
      />

      {/* Audio */}
      <Audio src={staticFile("mof_hook.mp3")} startFrom={0} endAt={segments.hook.duration} />
      <Audio src={staticFile("mof_fail1.mp3")} startFrom={0} endAt={segments.fail1.duration} />
      <Audio src={staticFile("mof_fail2.mp3")} startFrom={0} endAt={segments.fail2.duration} />
      <Audio src={staticFile("mof_fail3.mp3")} startFrom={0} endAt={segments.fail3.duration} />
      <Audio src={staticFile("mof_close.mp3")} startFrom={0} endAt={segments.close.duration} />

      {/* Text Overlays */}
      <TextOverlay
        text="I spent 3 weeks tuning an AI voice agent. Here's what broke."
        startFrame={segments.hook.start}
        durationInFrames={segments.hook.duration}
        style={{ top: "35%" }}
        animation="slideUp"
      />

      <TextOverlay
        text="First problem?"
        startFrame={segments.fail1.start}
        durationInFrames={80}
        style={{ top: "20%" }}
        animation="fade"
      />
      <TextOverlay
        text="It interrupted callers."
        startFrame={segments.fail1.start + 80}
        durationInFrames={80}
        style={{ top: "20%" }}
        animation="fade"
      />
      <TextOverlay
        text="Sounded efficient. Actually sounded rude."
        startFrame={segments.fail1.start + 160}
        durationInFrames={99}
        style={{ top: "20%" }}
        animation="fade"
      />

      {/* Code Editor Mockup during fail1 */}
      <ScreenMockup
        type="codeEditor"
        startFrame={segments.fail1.start + 60}
        durationInFrames={180}
      />

      <TextOverlay
        text="Second problem?"
        startFrame={segments.fail2.start}
        durationInFrames={80}
        style={{ top: "20%" }}
        animation="fade"
      />
      <TextOverlay
        text="It failed with local accents."
        startFrame={segments.fail2.start + 80}
        durationInFrames={80}
        style={{ top: "20%" }}
        animation="fade"
      />
      <TextOverlay
        text="Testing looked perfect. Real calls were brutal."
        startFrame={segments.fail2.start + 160}
        durationInFrames={110}
        style={{ top: "20%" }}
        animation="fade"
      />

      <TextOverlay
        text="Third problem?"
        startFrame={segments.fail3.start}
        durationInFrames={80}
        style={{ top: "20%" }}
        animation="fade"
      />
      <TextOverlay
        text="It answered price objections wrong."
        startFrame={segments.fail3.start + 80}
        durationInFrames={80}
        style={{ top: "20%" }}
        animation="fade"
      />
      <TextOverlay
        text="That mistake alone can kill deals."
        startFrame={segments.fail3.start + 160}
        durationInFrames={65}
        style={{ top: "20%" }}
        animation="fade"
      />

      {/* Error Log Mockup during fail3 */}
      <ScreenMockup
        type="errorLog"
        startFrame={segments.fail3.start + 40}
        durationInFrames={160}
      />

      <TextOverlay
        text="Most demos break in real environments."
        startFrame={segments.close.start}
        durationInFrames={100}
        style={{ top: "25%" }}
        animation="slideUp"
      />
      <TextOverlay
        text="This is the part most agencies never show."
        startFrame={segments.close.start + 100}
        durationInFrames={95}
        style={{ top: "25%" }}
        animation="slideUp"
      />

      {/* Progress Bar */}
      <ProgressBar totalFrames={totalFrames} color="#f59e0b" />

      {/* Brand Watermark */}
      <div
        style={{
          position: "absolute",
          bottom: "24px",
          right: "24px",
          color: "rgba(255,255,255,0.4)",
          fontSize: "14px",
          fontFamily: "Inter, system-ui, sans-serif",
          fontWeight: 600,
          letterSpacing: "0.1em",
          zIndex: 100,
        }}
      >
        AXOVION
      </div>
    </AbsoluteFill>
  );
};
