---
title: Robot-to-human object handover
one_liner: The Dexter 6 Pro picks up a box and hands it to a person, using a depth camera to find the box and the hand. Built and tested in simulation and on the real arm.
status: ongoing
period: September 2026 to Present
areas: [manipulation, perception]
contexts: [fyp]
featured: true
order: 1
period: July 2026 to present
platform: Dexter 6 Pro with an Intel RealSense D435i depth camera
tools: [ROS 2 Humble, Gazebo Fortress, MoveIt 2, MoveIt Task Constructor, ros2_control, AprilTag, MediaPipe, C++, Python]
role: Team lead of the final year project. I implemented the handover pipeline in simulation and on the arm.
hero: handover/handover_hardware.png
hero_alt: Dexter 6 Pro handing a box to a person
hero_caption: The Dexter 6 Pro handing a box over on the real arm.
video: handover/handover_demo.mp4
video_caption: The handover in simulation and on the real arm.
pipeline:
  - RealSense D435i camera
  - AprilTag finds the box and MediaPipe finds the hand, depth gives both positions
  - A registry keeps the latest detections in the robot frame
  - A manager node chooses the box and the handover target
  - MoveIt Task Constructor plans the pick and the handover
  - Dexter 6 Pro
pipeline_note: Simplified view of the data and command flow.
---

## What it does

The arm hands a box to a person. The D435i camera finds the box by the AprilTag on it, and MediaPipe detects the person's hand. The depth image gives the position of both. The arm picks up the box and brings it to the hand, with the motion planned by MoveIt Task Constructor (MTC).

## What I built

- A Gazebo simulation of the setup, where the simulated camera publishes the same topics as the real RealSense. This let me develop the whole pipeline in simulation first and then run it on the arm.
- The camera-to-robot calibration, so detections are expressed in the robot's frame.
- The perception nodes for the box and the hand, with positions taken from the depth image. Both publish in one common detection format, and a registry node keeps the latest detections.
- A manager node that chooses which box and which handover target to use, and refreshes the planning scene before each pick.
- The pick and the handover as one MTC task.
- A workaround for the gripper in simulation: Gazebo Fortress did not support its mimic joints, so the coupled joints are commanded directly.

![The handover setup in Gazebo](media/handover/gazebo_world.png)

## Result

The pipeline runs end to end in simulation and on the real arm. The video above shows both.

## Limits

The handover only works when the hand is inside the arm's reach. If the hand is too far away, the arm runs into a singularity. Holding the gripper pointing down during the handover also reduces the usable workspace.
