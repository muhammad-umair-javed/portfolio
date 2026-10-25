---
title: Vision-guided pick and place for test tube sorting
one_liner: A ROS 2 pipeline that detects test tubes with a camera and sorts them with a 6-DOF arm, built on MoveIt Task Constructor.
status: ongoing
areas: [manipulation, perception]
contexts: [hcrl, fyp]
featured: true
order: 1
period: July 2026 to present
platform: Dexter 6 Pro, a collaborative arm developed at HCRL
tools: [ROS 2 Humble, MoveIt 2, MoveIt Task Constructor, ros2_control, YOLO, OpenCV, C++, Python]
role: "Built the ROS 2 pipeline around the arm. The YOLO model and the camera calibration matrix came from earlier work in the lab."
experience_note: Built the lab's first ROS 2 pick-and-place pipeline, from the camera driver to arm execution.
hero: pick-and-place/rviz_gazebo_sim_dexter.png
hero_alt: Dexter 6 Pro in Gazebo with the planning scene visualized in RViz
hero_caption: The arm in Gazebo, with the planning scene in RViz.
pipeline:
  - Industrial 2D camera node
  - YOLO detection of test tubes
  - Scene builder, which adds collision objects
  - Orchestrator, which picks the next object
  - Pick-and-place action server (MoveIt Task Constructor)
  - ros2_control interface with a human confirmation gate
  - Dexter 6 Pro
pipeline_note: Simplified view of the data and command flow.
---

## What it does

A camera finds the test tubes, and the arm picks each one and places it at its destination. Detections become collision objects in the MoveIt planning scene, and the motion for each pick and place is planned with MoveIt Task Constructor (MTC).

## What I built

- The ROS 2 workspace around the arm: the MoveIt 2 configuration, and the camera frame in the robot's TF tree using the existing calibration matrix.
- A camera node for the industrial 2D camera (vendor SDK, fixed white balance) and a YOLO detection node. Images are normalized before detection because the lighting at run time differed from the training images.
- A scene builder that turns detections into collision objects, and an orchestrator that chooses the next object and sends it to the pick-and-place action server.
- The action server, which runs an MTC task: grasp pose generation, inverse kinematics, then approach and retreat moves.
- Changes to the ros2_control hardware interface so ROS 2 can read from and command the real arm, with a human confirmation gate on the command path.

## Result

The pipeline runs end to end in simulation. I tested it once on the real arm, and the task worked.

## Limits

Hardware testing has been limited so far, and I have not measured a success rate. The low-level motor control software and its own safety limits belong to the lab. My confirmation gate covers only the ROS 2 command path.
