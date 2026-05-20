import { AbsoluteFill, Audio, staticFile } from "remotion";
import { VideoBackground } from "../components/VideoBackground";
import { TextOverlay } from "../components/TextOverlay";
import { ScreenMockup } from "../components/ScreenMockup";
import { TerminalMockup } from "../components/TerminalMockup";
import { SystemNotification } from "../components/SystemNotification";
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
        darken={0.7}
      />
      <VideoBackground
        src="mof_fail1_bg.mp4"
        startFrame={segments.fail1.start}
        durationInFrames={segments.fail1.duration}
        blur={2}
        darken={0.7}
      />
      <VideoBackground
        src="mof_fail2_bg.mp4"
        startFrame={segments.fail2.start}
        durationInFrames={segments.fail2.duration}
        blur={2}
        darken={0.7}
      />
      <VideoBackground
        src="mof_fail3_bg.mp4"
        startFrame={segments.fail3.start}
        durationInFrames={segments.fail3.duration}
        blur={2}
        darken={0.7}
      />
      <VideoBackground
        src="mof_close_bg.mp4"
        startFrame={segments.close.start}
        durationInFrames={segments.close.duration}
        blur={2}
        darken={0.7}
      />

      {/* Audio */}
      <Audio src={staticFile("mof_hook.mp3")} startFrom={0} endAt={segments.hook.duration} />
      <Audio src={staticFile("mof_fail1.mp3")} startFrom={0} endAt={segments.fail1.duration} />
      <Audio src={staticFile("mof_fail2.mp3")} startFrom={0} endAt={segments.fail2.duration} />
      <Audio src={staticFile("mof_fail3.mp3")} startFrom={0} endAt={segments.fail3.duration} />
      <Audio src={staticFile("mof_close.mp3")} startFrom={0} endAt={segments.close.duration} />

      {/* Text Overlays */}
      <TextOverlay
        text="I spent 3 weeks tuning an AI voice agent."
        startFrame={segments.hook.start}
        durationInFrames={80}
        style={{ top: "30%" }}
        animation="fade"
      />
      <TextOverlay
        text="Here's what broke."
        startFrame={segments.hook.start + 80}
        durationInFrames={81}
        style={{ top: "30%" }}
        animation="fade"
      />

      {/* Terminal showing build start */}
      <TerminalMockup
        lines={[
          "$ axovion build --voice-agent",
          "// Compiling voice module...",
          "✓ Base model loaded",
          "⚠ Warning: interrupt threshold aggressive",
          "// Running test suite...",
          "",
          "$ axovion test --interrupt",
          "✗ FAIL: Interrupt test",
          "✗ FAIL: Accent recognition",
          "✗ FAIL: Price objection",
          "",
          "$ axovion debug --verbose",
        ]}
        startFrame={segments.hook.start + 40}
        durationInFrames={120}
        typingSpeed={3}
      />

      <TextOverlay
        text="First problem?"
        startFrame={segments.fail1.start}
        durationInFrames={60}
        style={{ top: "20%" }}
        animation="fade"
      />
      <TextOverlay
        text="It interrupted callers."
        startFrame={segments.fail1.start + 60}
        durationInFrames={60}
        style={{ top: "20%" }}
        animation="fade"
      />
      <TextOverlay
        text="Sounded efficient."
        startFrame={segments.fail1.start + 120}
        durationInFrames={60}
        style={{ top: "20%" }}
        animation="fade"
      />
      <TextOverlay
        text="Actually sounded rude."
        startFrame={segments.fail1.start + 180}
        durationInFrames={79}
        style={{ top: "20%" }}
        animation="fade"
      />

      {/* Error notification for interrupt */}
      <SystemNotification
        title="BUILD FAILED"
        message="Interrupt threshold too aggressive. Callers report 'rude' behavior."
        type="error"
        startFrame={segments.fail1.start + 120}
        durationInFrames={100}
      />

      {/* Code editor mockup showing fix */}
      <ScreenMockup
        type="codeEditor"
        startFrame={segments.fail1.start + 80}
        durationInFrames={170}
      />

      <TextOverlay
        text="Second problem?"
        startFrame={segments.fail2.start}
        durationInFrames={60}
        style={{ top: "20%" }}
        animation="fade"
      />
      <TextOverlay
        text="It failed with local accents."
        startFrame={segments.fail2.start + 60}
        durationInFrames={60}
        style={{ top: "20%" }}
        animation="fade"
      />
      <TextOverlay
        text="Testing looked perfect."
        startFrame={segments.fail2.start + 120}
        durationInFrames={60}
        style={{ top: "20%" }}
        animation="fade"
      />
      <TextOverlay
        text="Real calls were brutal."
        startFrame={segments.fail2.start + 180}
        durationInFrames={90}
        style={{ top: "20%" }}
        animation="fade"
      />

      {/* Error notification for accent */}
      <SystemNotification
        title="ACCENT FAILURE"
        message="Recognition rate: 34% on Pakistani accents. Dataset bias detected."
        type="warning"
        startFrame={segments.fail2.start + 140}
        durationInFrames={100}
      />

      <TextOverlay
        text="Third problem?"
        startFrame={segments.fail3.start}
        durationInFrames={60}
        style={{ top: "20%" }}
        animation="fade"
      />
      <TextOverlay
        text="It answered price objections wrong."
        startFrame={segments.fail3.start + 60}
        durationInFrames={60}
        style={{ top: "20%" }}
        animation="fade"
      />
      <TextOverlay
        text="That mistake alone can kill deals."
        startFrame={segments.fail3.start + 120}
        durationInFrames={105}
        style={{ top: "20%" }}
        animation="fade"
      />

      {/* Error log mockup during fail3 */}
      <ScreenMockup
        type="errorLog"
        startFrame={segments.fail3.start + 60}
        durationInFrames={160}
      />

      {/* Error notification for price */}
      <SystemNotification
        title="DEAL KILLER"
        message="Price objection handled incorrectly. Lost $3,200 opportunity."
        type="error"
        startFrame={segments.fail3.start + 100}
        durationInFrames={100}
      />

      <TextOverlay
        text="Most demos break in real environments."
        startFrame={segments.close.start}
        durationInFrames={97}
        style={{ top: "25%" }}
        animation="fade"
      />
      <TextOverlay
        text="This is the part most agencies never show."
        startFrame={segments.close.start + 97}
        durationInFrames={98}
        style={{ top: "25%" }}
        animation="fade"
      />

      {/* Terminal showing deployment reality */}
      <TerminalMockup
        lines={[
          "$ axovion deploy --production",
          "// Deploying to production...",
          "✗ Build failed: 3 critical errors",
          "",
          "$ axovion fix --all",
          "// Applying patches...",
          "✓ Interrupt threshold: 0.3 → 0.7",
          "✓ Accent model: en-US → multi-region",
          "✓ Price logic: added negotiation context",
          "",
          "$ axovion deploy --production",
          "✓ Deployment successful",
          "✓ Real environment: STABLE",
        ]}
        startFrame={segments.close.start + 40}
        durationInFrames={150}
        typingSpeed={3}
      />

      {/* Progress Bar */}
      <ProgressBar totalFrames={totalFrames} color="#f59e0b" />

      {/* Subtle corner branding */}
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          right: "20px",
          color: "rgba(255,255,255,0.25)",
          fontSize: "11px",
          fontFamily: "'JetBrains Mono', monospace",
          fontWeight: 500,
          letterSpacing: "0.15em",
          zIndex: 100,
        }}
      >
        AXOVION // SYSTEMS
      </div>
    </AbsoluteFill>
  );
};
