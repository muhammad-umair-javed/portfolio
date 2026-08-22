export interface EngineeringLogCard {
  id: string;
  title: string;
  challenge: string;
  approach: string;
  result?: string;
  tags: string[];
}

export const flagshipMeta = {
  title: "Vision-guided motion planning and control for a 6-DOF collaborative manipulator",
  lab: "Human-Centered Robotics Lab (HCRL), UET Lahore",
  role: "Research Intern & Final Year Project",
  period: "2025 — present",
  robot: "Dexterous 6 Pro (custom-built 6-DOF arm)",
  distinction:
    "This isn't a demo run on a pre-integrated platform. Dexterous 6 Pro is a custom-built arm with no existing ROS 2 support — every layer below, from the EtherCAT drive interface up to the perception pipeline, had to be implemented, broken, and debugged from scratch.",
  problem:
    "Collaborative manipulators need a control stack that is simultaneously safe — real-time, free of race conditions — accurate, with solvable and collision-free IK across the workspace, and increasingly autonomous, able to perceive and grasp objects without hand-specified waypoints. On a custom-built 6-DOF arm, none of that infrastructure exists off the shelf; it has to be built and debugged from the drive layer up.",
  system:
    "Dexterous 6 Pro is a custom-built 6-DOF collaborative arm. Work on it spans the full stack — from the EtherCAT hardware interface through ros2_control, inverse kinematics, trajectory execution, and finally vision-guided task planning — rather than any single layer in isolation.",
  currentDirection:
    "This is active, ongoing final-year project work. Current efforts continue refining solver robustness across the workspace, trajectory execution reliability under the Pilz pipeline, and extending the vision-guided pick-and-place system built on MoveIt Task Constructor.",
};

export const atAGlanceFacts = [
  { label: "Hardware interface", detail: "EtherCAT shared-memory interface built from scratch, not a driver import" },
  { label: "IK", detail: "3 solvers evaluated (KDL, pick_ik, IKFast); branch-jumping fault diagnosed" },
  { label: "Trajectory execution", detail: "Two-layer fault traced from timestamp errors to encoder-count conversion" },
  { label: "Perception", detail: "YOLO detection wired into MoveIt Task Constructor for closed-loop grasping" },
];

export const engineeringLog: EngineeringLogCard[] = [
  {
    id: "real-time-control",
    title: "Real-time control interface",
    challenge:
      "Coupling ros2_control to the motor drives over EtherCAT while preventing race conditions between control loops.",
    approach:
      "Co-developed a custom EtherCAT shared-memory hardware interface and a bridging relay node with sequence- and staleness-watchdogs to gate real-time command flow.",
    result: "Stale or out-of-order commands are structurally prevented from reaching the drives.",
    tags: ["EtherCAT", "ros2_control", "Real-time systems"],
  },
  {
    id: "ik-investigation",
    title: "Inverse kinematics: comparison and diagnosis",
    challenge: "Resolving solvability and self-collision issues across the full 6-DOF workspace.",
    approach:
      "Investigated and progressively integrated three IK solvers — KDL, pick_ik, and an analytically generated IKFast plugin — comparing solvability and collision behavior.",
    result:
      "Reached roughly 94% IK success with the IKFast plugin; later diagnosed IK branch-jumping in the numerical pick_ik configuration as the cause of large joint-velocity spikes during Cartesian interpolation.",
    tags: ["KDL", "pick_ik", "IKFast", "MoveIt 2"],
  },
  {
    id: "trajectory-debugging",
    title: "Trajectory teaching and execution debugging",
    challenge:
      "A Pilz Industrial Motion Planner pipeline — hand-guided waypoint capture, a ROS 2 action server, PTP/LIN sequencing — exhibiting trajectory-blending timestamp errors and joint-acceleration-limit violations.",
    approach:
      "Traced the errors to the trajectory adapter chain and IK configuration; then traced a further, deeper fault to the ROS 2 hardware plugin's radians-to-encoder-counts conversion.",
    result: "Resolved by implementing an S-curve profile to limit the step size forwarded to the motor drives.",
    tags: ["Pilz Industrial Motion Planner", "Trajectory execution", "Fault diagnosis"],
  },
  {
    id: "vision-guided-pick-place",
    title: "Vision-guided pick-and-place",
    challenge: "Connecting perception to task-level manipulation in a single closed loop.",
    approach:
      "Built a scene builder, task orchestrator, and ROS 2 action server integrating YOLO-based detection with MoveIt Task Constructor; calibrated a camera-to-base_link transform in the URDF; empirically derived the grasp-frame transform via TF introspection.",
    result: "A working pipeline from object detection through to grasp execution.",
    tags: ["YOLO", "MoveIt Task Constructor", "TF / URDF"],
  },
];
