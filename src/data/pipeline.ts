export interface PipelineStage {
  id: string;
  label: string;
  technology: string;
  detail: string;
  relatedProjectId: string;
}

export const pipelineStages: PipelineStage[] = [
  {
    id: "perception",
    label: "Perception",
    technology: "YOLO-based object detection",
    detail: "Object detection feeding scene state into the manipulation pipeline.",
    relatedProjectId: "dexterous-6-pro",
  },
  {
    id: "scene-understanding",
    label: "Scene understanding",
    technology: "MTC scene builder",
    detail:
      "Scene builder plus a calibrated camera-to-base_link transform in the URDF.",
    relatedProjectId: "dexterous-6-pro",
  },
  {
    id: "task-planning",
    label: "Task planning",
    technology: "MoveIt Task Constructor",
    detail: "Task orchestrator and ROS 2 action server sequencing pick-and-place.",
    relatedProjectId: "dexterous-6-pro",
  },
  {
    id: "ik",
    label: "IK / motion planning",
    technology: "KDL · pick_ik · IKFast",
    detail:
      "Three solvers evaluated across the workspace; ~94% IK success with an analytically generated IKFast plugin.",
    relatedProjectId: "dexterous-6-pro",
  },
  {
    id: "trajectory",
    label: "Trajectory generation",
    technology: "Pilz PTP / LIN",
    detail:
      "Hand-guided waypoint teaching, PTP/LIN sequencing, and an S-curve profile to bound step size to the drives.",
    relatedProjectId: "dexterous-6-pro",
  },
  {
    id: "ros2-control",
    label: "ros2_control",
    technology: "Custom hardware interface",
    detail: "Couples ros2_control to the motor drives via a shared-memory interface.",
    relatedProjectId: "dexterous-6-pro",
  },
  {
    id: "hardware-interface",
    label: "Hardware interface",
    technology: "Bridging relay node",
    detail:
      "Sequence- and staleness-watchdogs gate real-time command flow between control loops.",
    relatedProjectId: "dexterous-6-pro",
  },
  {
    id: "ethercat",
    label: "EtherCAT / drives",
    technology: "Motor drive coupling",
    detail: "Radians-to-encoder-counts conversion at the drive boundary.",
    relatedProjectId: "dexterous-6-pro",
  },
];
