import { AbsoluteFill, Audio, staticFile } from "remotion";
import { VideoBackground } from "../components/VideoBackground";
import { TextOverlay } from "../components/TextOverlay";
import { ScreenMockup } from "../components/ScreenMockup";
import { TerminalMockup } from "../components/TerminalMockup";
import { ResponseTimer } from "../components/ResponseTimer";
import { SystemNotification } from "../components/SystemNotification";
import { PipelineFlow } from "../components/PipelineFlow";
import { ProgressBar } from "../components/ProgressBar";

// Duration: 49s = 1491 frames at 30fps
export const TOFReel = () => {
  // Segment timings (in frames)
  const segments = {
    hook: { start: 0, duration: 171 },
    problem: { start: 171, duration: 246 },
    consequence: { start: 417, duration: 168 },
    observation: { start: 585, duration: 233 },
    tension: { start: 818, duration: 375 },
    bridge: { start: 1193, duration: 203 },
    close: { start: 1396, duration: 95 },
  };

  return (
    <AbsoluteFill style={{ background: "#0a0a0a" }}>
      {/* Background Videos */}
      <VideoBackground
        src="tof_hook_bg.mp4"
        startFrame={segments.hook.start}
        durationInFrames={segments.hook.duration}
        blur={2}
        darken={0.7}
      />
      <VideoBackground
        src="tof_problem_bg1.mp4"
        startFrame={segments.problem.start}
        durationInFrames={segments.problem.duration}
        blur={2}
        darken={0.7}
      />
      <VideoBackground
        src="tof_problem_bg2.mp4"
        startFrame={segments.consequence.start}
        durationInFrames={segments.consequence.duration}
        blur={2}
        darken={0.7}
      />
      <VideoBackground
        src="tof_observation_bg.mp4"
        startFrame={segments.observation.start}
        durationInFrames={segments.observation.duration}
        blur={2}
        darken={0.7}
      />
      <VideoBackground
        src="tof_tension_bg.mp4"
        startFrame={segments.tension.start}
        durationInFrames={segments.tension.duration}
        blur={2}
        darken={0.7}
      />
      <VideoBackground
        src="tof_close_bg.mp4"
        startFrame={segments.bridge.start}
        durationInFrames={segments.bridge.duration + segments.close.duration}
        blur={2}
        darken={0.7}
      />

      {/* Audio */}
      <Audio src={staticFile("tof_hook.mp3")} startFrom={0} endAt={segments.hook.duration} />
      <Audio src={staticFile("tof_problem.mp3")} startFrom={0} endAt={segments.problem.duration} />
      <Audio src={staticFile("tof_consequence.mp3")} startFrom={0} endAt={segments.consequence.duration} />
      <Audio src={staticFile("tof_observation.mp3")} startFrom={0} endAt={segments.observation.duration} />
      <Audio src={staticFile("tof_tension.mp3")} startFrom={0} endAt={segments.tension.duration} />
      <Audio src={staticFile("tof_bridge.mp3")} startFrom={0} endAt={segments.bridge.duration} />
      <Audio src={staticFile("tof_close.mp3")} startFrom={0} endAt={segments.close.duration} />

      {/* Text Overlays */}
      <TextOverlay
        text="Most businesses don't have a lead problem."
        startFrame={segments.hook.start}
        durationInFrames={85}
        style={{ top: "30%" }}
        animation="fade"
      />
      <TextOverlay
        text="They have a response-time problem."
        startFrame={segments.hook.start + 85}
        durationInFrames={86}
        style={{ top: "30%" }}
        animation="fade"
      />

      <TextOverlay
        text="Someone finds your business."
        startFrame={segments.problem.start}
        durationInFrames={60}
        style={{ top: "25%" }}
        animation="fade"
      />
      <TextOverlay
        text="They're interested."
        startFrame={segments.problem.start + 60}
        durationInFrames={60}
        style={{ top: "25%" }}
        animation="fade"
      />
      <TextOverlay
        text="They call."
        startFrame={segments.problem.start + 120}
        durationInFrames={60}
        style={{ top: "25%" }}
        animation="fade"
      />
      <TextOverlay
        text="And nobody answers."
        startFrame={segments.problem.start + 180}
        durationInFrames={66}
        style={{ top: "25%" }}
        animation="fade"
      />

      {/* Response Timer during problem */}
      <ResponseTimer
        startFrame={segments.problem.start + 100}
        durationInFrames={140}
        targetMs={5000}
      />

      {/* Missed call notification */}
      <SystemNotification
        title="MISSED CALL"
        message="Lead #8X-2914 — Direct Call — $3,200 value"
        type="error"
        startFrame={segments.problem.start + 180}
        durationInFrames={100}
      />

      <TextOverlay
        text="So they call the next company."
        startFrame={segments.consequence.start}
        durationInFrames={84}
        style={{ top: "25%" }}
        animation="fade"
      />
      <TextOverlay
        text="The second company usually gets paid."
        startFrame={segments.consequence.start + 84}
        durationInFrames={84}
        style={{ top: "25%" }}
        animation="fade"
      />

      {/* Pipeline showing competitor wins */}
      <PipelineFlow
        startFrame={segments.consequence.start + 40}
        durationInFrames={120}
        showCompetitor={true}
      />

      <TextOverlay
        text="The best business doesn't always win."
        startFrame={segments.observation.start}
        durationInFrames={77}
        style={{ top: "25%" }}
        animation="fade"
      />
      <TextOverlay
        text="The fastest one usually does."
        startFrame={segments.observation.start + 77}
        durationInFrames={78}
        style={{ top: "25%" }}
        animation="fade"
      />
      <TextOverlay
        text="Speed compounds."
        startFrame={segments.observation.start + 155}
        durationInFrames={78}
        style={{ top: "25%", fontSize: "56px" }}
        animation="slideUp"
      />

      <TextOverlay
        text="Those missed calls?"
        startFrame={segments.tension.start}
        durationInFrames={75}
        style={{ top: "20%" }}
        animation="fade"
      />
      <TextOverlay
        text="They're not random traffic."
        startFrame={segments.tension.start + 75}
        durationInFrames={75}
        style={{ top: "20%" }}
        animation="fade"
      />
      <TextOverlay
        text="They already decided to contact you."
        startFrame={segments.tension.start + 150}
        durationInFrames={75}
        style={{ top: "20%" }}
        animation="fade"
      />
      <TextOverlay
        text="That's the expensive part."
        startFrame={segments.tension.start + 225}
        durationInFrames={75}
        style={{ top: "20%" }}
        animation="fade"
      />
      <TextOverlay
        text="And most businesses still lose them."
        startFrame={segments.tension.start + 300}
        durationInFrames={75}
        style={{ top: "20%" }}
        animation="fade"
      />

      {/* Call log mockup during tension */}
      <ScreenMockup
        type="callLog"
        startFrame={segments.tension.start + 80}
        durationInFrames={250}
      />

      <TextOverlay
        text="This is why businesses are replacing manual follow-up."
        startFrame={segments.bridge.start}
        durationInFrames={101}
        style={{ top: "25%" }}
        animation="fade"
      />
      <TextOverlay
        text="Slow response times leak revenue."
        startFrame={segments.bridge.start + 101}
        durationInFrames={102}
        style={{ top: "25%" }}
        animation="fade"
      />

      {/* Terminal showing system status */}
      <TerminalMockup
        lines={[
          "$ axovion status",
          "// Checking response infrastructure...",
          "✓ AI voice agent: ONLINE",
          "✓ Response time: 1.2s avg",
          "✓ Lead capture: 99.7%",
          "✓ Pipeline automation: ACTIVE",
          "",
          "$ axovion deploy --production",
          "// Deploying revenue infrastructure...",
          "✓ Deployment complete",
          "✓ Response time is now infrastructure",
        ]}
        startFrame={segments.bridge.start + 60}
        durationInFrames={200}
        typingSpeed={3}
      />

      <TextOverlay
        text="Response time is now infrastructure."
        startFrame={segments.close.start}
        durationInFrames={segments.close.duration}
        style={{ top: "40%", fontSize: "48px" }}
        animation="slideUp"
      />

      {/* Progress Bar */}
      <ProgressBar totalFrames={1491} color="#3b82f6" />

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
