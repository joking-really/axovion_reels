import { AbsoluteFill, Audio, staticFile } from "remotion";
import { VideoBackground } from "../components/VideoBackground";
import { TextOverlay } from "../components/TextOverlay";
import { ScreenMockup } from "../components/ScreenMockup";
import { ProgressBar } from "../components/ProgressBar";

// Duration: 63s = 1892 frames at 30fps
export const BOFReel = () => {
  const totalFrames = 1892;

  // Segment timings (in frames)
  const segments = {
    hook: { start: 0, duration: 97 },
    filter: { start: 97, duration: 533 },
    roi: { start: 630, duration: 524 },
    positioning: { start: 1154, duration: 545 },
    close: { start: 1699, duration: 193 },
  };

  return (
    <AbsoluteFill style={{ background: "#0a0a0a" }}>
      {/* Background Videos */}
      <VideoBackground
        src="bof_hook_bg.mp4"
        startFrame={segments.hook.start}
        durationInFrames={segments.hook.duration}
        blur={2}
        darken={0.6}
      />
      <VideoBackground
        src="bof_filter_bg.mp4"
        startFrame={segments.filter.start}
        durationInFrames={segments.filter.duration}
        blur={2}
        darken={0.6}
      />
      <VideoBackground
        src="bof_roi_bg.mp4"
        startFrame={segments.roi.start}
        durationInFrames={segments.roi.duration}
        blur={2}
        darken={0.6}
      />
      <VideoBackground
        src="bof_positioning_bg.mp4"
        startFrame={segments.positioning.start}
        durationInFrames={segments.positioning.duration}
        blur={2}
        darken={0.6}
      />
      <VideoBackground
        src="bof_close_bg.mp4"
        startFrame={segments.close.start}
        durationInFrames={segments.close.duration}
        blur={2}
        darken={0.6}
      />

      {/* Audio */}
      <Audio src={staticFile("bof_hook.mp3")} startFrom={0} endAt={segments.hook.duration} />
      <Audio src={staticFile("bof_filter.mp3")} startFrom={0} endAt={segments.filter.duration} />
      <Audio src={staticFile("bof_roi.mp3")} startFrom={0} endAt={segments.roi.duration} />
      <Audio src={staticFile("bof_positioning.mp3")} startFrom={0} endAt={segments.positioning.duration} />
      <Audio src={staticFile("bof_close.mp3")} startFrom={0} endAt={segments.close.duration} />

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
        durationInFrames={160}
        style={{ top: "20%" }}
        animation="fade"
      />
      <TextOverlay
        text="20+ calls per day. A real sales process."
        startFrame={segments.filter.start + 160}
        durationInFrames={160}
        style={{ top: "20%" }}
        animation="fade"
      />
      <TextOverlay
        text="Something to actually automate."
        startFrame={segments.filter.start + 320}
        durationInFrames={100}
        style={{ top: "20%" }}
        animation="fade"
      />
      <TextOverlay
        text="If you're still figuring out where your leads come from, fix that first."
        startFrame={segments.filter.start + 420}
        durationInFrames={113}
        style={{ top: "20%" }}
        animation="fade"
      />

      {/* CRM Pipeline Mockup during filter */}
      <ScreenMockup
        type="crmPipeline"
        startFrame={segments.filter.start + 80}
        durationInFrames={350}
      />

      <TextOverlay
        text="If you're getting 20+ calls and missing even 4 of them, do the math."
        startFrame={segments.roi.start}
        durationInFrames={160}
        style={{ top: "18%" }}
        animation="fade"
      />
      <TextOverlay
        text="What's your average deal worth? Multiply by 4. Multiply by 22 working days."
        startFrame={segments.roi.start + 160}
        durationInFrames={180}
        style={{ top: "18%" }}
        animation="fade"
      />
      <TextOverlay
        text="That's your monthly leak. And that's just the calls you know about."
        startFrame={segments.roi.start + 340}
        durationInFrames={184}
        style={{ top: "18%" }}
        animation="fade"
      />

      {/* Calculator Mockup during ROI */}
      <ScreenMockup
        type="calculator"
        startFrame={segments.roi.start + 100}
        durationInFrames={350}
      />

      <TextOverlay
        text="This replaces response bottlenecks."
        startFrame={segments.positioning.start}
        durationInFrames={140}
        style={{ top: "20%" }}
        animation="fade"
      />
      <TextOverlay
        text="Not marketing. Not sales skills."
        startFrame={segments.positioning.start + 140}
        durationInFrames={140}
        style={{ top: "20%" }}
        animation="fade"
      />
      <TextOverlay
        text="Just the gap between 'someone wants to talk' and 'someone actually talks to them.'"
        startFrame={segments.positioning.start + 280}
        durationInFrames={160}
        style={{ top: "20%", fontSize: "44px" }}
        animation="fade"
      />
      <TextOverlay
        text="That's it. That's all it does. But for the right business, that's everything."
        startFrame={segments.positioning.start + 440}
        durationInFrames={105}
        style={{ top: "20%", fontSize: "44px" }}
        animation="fade"
      />

      <TextOverlay
        text="If that gap is costing you money, DM me."
        startFrame={segments.close.start}
        durationInFrames={100}
        style={{ top: "30%" }}
        animation="slideUp"
      />
      <TextOverlay
        text="I'll calculate the leak for your business."
        startFrame={segments.close.start + 100}
        durationInFrames={93}
        style={{ top: "30%" }}
        animation="slideUp"
      />

      {/* Progress Bar */}
      <ProgressBar totalFrames={totalFrames} color="#10b981" />

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
