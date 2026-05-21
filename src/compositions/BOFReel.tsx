import { AbsoluteFill } from "remotion";
import { VideoBackground } from "../components/VideoBackground";
import { TextOverlay } from "../components/TextOverlay";
import { ScreenMockup } from "../components/ScreenMockup";
import { TerminalMockup } from "../components/TerminalMockup";
import { SystemNotification } from "../components/SystemNotification";
import { ProgressBar } from "../components/ProgressBar";
import { AudioSegment } from "../components/AudioSegment";

// Duration: 61s = 1831 frames at 30fps
export const BOFReel = () => {
  const totalFrames = 1831;

  // Segment timings (in frames)
  const segments = {
    hook: { start: 0, duration: 97 },
    filter: { start: 97, duration: 472 },
    roi: { start: 569, duration: 524 },
    positioning: { start: 1093, duration: 545 },
    close: { start: 1638, duration: 193 },
  };

  return (
    <AbsoluteFill style={{ background: "#0a0a0a" }}>
      {/* Background Videos */}
      <VideoBackground
        src="bof_hook_bg.mp4"
        startFrame={segments.hook.start}
        durationInFrames={segments.hook.duration}
        blur={2}
        darken={0.7}
      />
      <VideoBackground
        src="bof_filter_bg.mp4"
        startFrame={segments.filter.start}
        durationInFrames={segments.filter.duration}
        blur={2}
        darken={0.7}
      />
      <VideoBackground
        src="bof_roi_bg.mp4"
        startFrame={segments.roi.start}
        durationInFrames={segments.roi.duration}
        blur={2}
        darken={0.7}
      />
      <VideoBackground
        src="bof_positioning_bg.mp4"
        startFrame={segments.positioning.start}
        durationInFrames={segments.positioning.duration}
        blur={2}
        darken={0.7}
      />
      <VideoBackground
        src="bof_close_bg.mp4"
        startFrame={segments.close.start}
        durationInFrames={segments.close.duration}
        blur={2}
        darken={0.7}
      />

      {/* Audio — properly sequenced to prevent overlap */}
      <AudioSegment src="bof_hook.mp3" startFrame={segments.hook.start} durationInFrames={segments.hook.duration} />
      <AudioSegment src="bof_filter.mp3" startFrame={segments.filter.start} durationInFrames={segments.filter.duration} />
      <AudioSegment src="bof_roi.mp3" startFrame={segments.roi.start} durationInFrames={segments.roi.duration} />
      <AudioSegment src="bof_positioning.mp3" startFrame={segments.positioning.start} durationInFrames={segments.positioning.duration} />
      <AudioSegment src="bof_close.mp3" startFrame={segments.close.start} durationInFrames={segments.close.duration} />

      {/* Text Overlays */}
      <TextOverlay
        text="Most businesses are too early for this."
        startFrame={segments.hook.start}
        durationInFrames={segments.hook.duration}
        style={{ top: "35%" }}
        animation="slideUp"
      />

      <TextOverlay
        text="This only works if you have consistent inbound demand."
        startFrame={segments.filter.start}
        durationInFrames={118}
        style={{ top: "20%" }}
        animation="fade"
      />
      <TextOverlay
        text="20+ calls per day."
        startFrame={segments.filter.start + 118}
        durationInFrames={118}
        style={{ top: "20%" }}
        animation="fade"
      />
      <TextOverlay
        text="A real sales process."
        startFrame={segments.filter.start + 236}
        durationInFrames={118}
        style={{ top: "20%" }}
        animation="fade"
      />
      <TextOverlay
        text="Something to actually automate."
        startFrame={segments.filter.start + 354}
        durationInFrames={118}
        style={{ top: "20%" }}
        animation="fade"
      />

      {/* CRM Pipeline Mockup during filter */}
      <ScreenMockup
        type="crmPipeline"
        startFrame={segments.filter.start + 80}
        durationInFrames={350}
      />

      {/* System notification — qualification filter */}
      <SystemNotification
        title="QUALIFICATION CHECK"
        message="Inbound calls: 23/day ✓ | Sales process: ACTIVE ✓ | Automatable: YES ✓"
        type="info"
        startFrame={segments.filter.start + 200}
        durationInFrames={200}
      />

      <TextOverlay
        text="If you're getting 20+ calls and missing even 4 of them, do the math."
        startFrame={segments.roi.start}
        durationInFrames={131}
        style={{ top: "18%" }}
        animation="fade"
      />
      <TextOverlay
        text="What's your average deal worth?"
        startFrame={segments.roi.start + 131}
        durationInFrames={131}
        style={{ top: "18%" }}
        animation="fade"
      />
      <TextOverlay
        text="Multiply by 4."
        startFrame={segments.roi.start + 262}
        durationInFrames={131}
        style={{ top: "18%" }}
        animation="fade"
      />
      <TextOverlay
        text="Multiply by 22 working days."
        startFrame={segments.roi.start + 393}
        durationInFrames={131}
        style={{ top: "18%" }}
        animation="fade"
      />

      {/* Calculator Mockup during ROI */}
      <ScreenMockup
        type="calculator"
        startFrame={segments.roi.start + 100}
        durationInFrames={350}
      />

      {/* System notification — leak calculation */}
      <SystemNotification
        title="REVENUE LEAK DETECTED"
        message="Monthly leak: $264,000 | Annual projection: $3,168,000"
        type="warning"
        startFrame={segments.roi.start + 300}
        durationInFrames={180}
      />

      <TextOverlay
        text="This replaces response bottlenecks."
        startFrame={segments.positioning.start}
        durationInFrames={109}
        style={{ top: "20%" }}
        animation="fade"
      />
      <TextOverlay
        text="Not marketing."
        startFrame={segments.positioning.start + 109}
        durationInFrames={109}
        style={{ top: "20%" }}
        animation="fade"
      />
      <TextOverlay
        text="Not sales skills."
        startFrame={segments.positioning.start + 218}
        durationInFrames={109}
        style={{ top: "20%" }}
        animation="fade"
      />
      <TextOverlay
        text="Just the gap between 'someone wants to talk' and 'someone actually talks to them.'"
        startFrame={segments.positioning.start + 327}
        durationInFrames={109}
        style={{ top: "20%", fontSize: "40px" }}
        animation="fade"
      />
      <TextOverlay
        text="That's it. That's all it does."
        startFrame={segments.positioning.start + 436}
        durationInFrames={109}
        style={{ top: "20%", fontSize: "40px" }}
        animation="fade"
      />

      {/* Terminal showing system capabilities */}
      <TerminalMockup
        lines={[
          "$ axovion status --capabilities",
          "// Response Infrastructure",
          "✓ Inbound call capture",
          "✓ AI voice response",
          "✓ Lead qualification",
          "✓ Appointment booking",
          "✓ CRM sync",
          "✓ Analytics pipeline",
          "",
          "// What it does NOT do:",
          "✗ Generate leads",
          "✗ Close deals",
          "✗ Replace your team",
          "",
          "$ axovion deploy",
          "// Gap closed.",
        ]}
        startFrame={segments.positioning.start + 80}
        durationInFrames={400}
        typingSpeed={3}
      />

      <TextOverlay
        text="But for the right business, that's everything."
        startFrame={segments.close.start}
        durationInFrames={96}
        style={{ top: "30%" }}
        animation="slideUp"
      />
      <TextOverlay
        text="If that gap is costing you money, DM me."
        startFrame={segments.close.start + 96}
        durationInFrames={97}
        style={{ top: "30%" }}
        animation="slideUp"
      />

      {/* Progress Bar */}
      <ProgressBar totalFrames={totalFrames} color="#10b981" />

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
