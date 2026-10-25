---
title: Vision-guided pick and place for test tube sorting
one_liner: A ROS 2 pipeline that detects test tubes with a camera and sorts them with a 6-DOF arm, built on MoveIt Task Constructor.
status: complete
areas: [manipulation, perception]
contexts: [hcrl]
featured: true
order: 1
period: July 2026 to September 2026
platform: Dexter 6 Pro, a collaborative arm developed at HCRL
tools: [ROS 2 Humble, MoveIt 2, MoveIt Task Constructor, ros2_control, YOLO, OpenCV, C++, Python]
role: Built the pipeline end to end, from camera integration to arm execution.
experience_note: Built the ROS 2 pick-and-place pipeline, from the camera driver to arm execution.
hero: pick-and-place/dexter_pnp.jpeg
hero_alt: Dexter 6 Pro holding a test tube in its gripper
hero_caption: Dexter 6 Pro holding a test tube during a pick and place run on the real arm.
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

A camera finds the test tubes, and the arm picks each one up and places it at its destination. Detections become collision objects in the MoveIt planning scene, and MoveIt Task Constructor (MTC) plans each pick and place.

## How it works

I set up the ROS 2 and MoveIt 2 workspace for the arm and integrated an industrial 2D camera through its vendor SDK. The camera frame is placed in the robot's TF tree from the calibration matrix, so detections can be mapped into the robot's frame.

A YOLO node detects the test tubes. The lighting at run time differed from the training images, so the images are normalized before detection.

A scene builder turns each detection into a collision object. An orchestrator picks the next tube and sends it to a pick-and-place action server, which runs an MTC task that generates grasp poses, solves inverse kinematics and plans the motion.

For the real arm, I modified the ros2_control hardware interface so ROS 2 can read the arm's state and command it, and added a human confirmation step before commands reach the arm.

## Result

The pipeline runs end to end in simulation and on the real arm.

![The same pipeline in simulation: Gazebo with the planning scene in RViz](media/pick-and-place/rviz_gazebo_sim_dexter.png)

## Limits

I have run it on the real arm once and have not measured a success rate.
