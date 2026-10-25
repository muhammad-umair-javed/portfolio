---
title: Waypoint teaching and straight-line motion
one_liner: Record waypoints by hand-guiding the arm, then replay them as straight-line motions through MoveIt.
status: complete
areas: [manipulation, control]
contexts: [hcrl]
featured: true
order: 2
period: 2026
platform: Dexter 6 Pro, a collaborative arm developed at HCRL
tools: [ROS 2 Humble, MoveIt 2, Pilz Industrial Motion Planner, IKFast, KDL, pick_ik, C++, Python]
role: Built the ROS 2 pipeline, from waypoint recording to execution.
experience_note: Built the ROS 2 waypoint execution pipeline and compared IK solvers for it.
pipeline:
  - Hand-guiding, or a pose saved from MoveIt
  - Waypoint list from the teaching GUI
  - Waypoint executor (ROS 2 action)
  - Pilz linear planner with an IK solver
  - Dexter 6 Pro
pipeline_note: Simplified view. The executor does not depend on where the waypoints came from.
---

## What it does

Waypoints are recorded by hand-guiding the arm, or by moving it to a pose in MoveIt and saving that pose. A teaching GUI reads the live pose and sends the saved list to an executor, which plans straight-line motion between the waypoints.

## How the planning changed

I started with OMPL Cartesian path interpolation, but consecutive waypoints sometimes caused sudden joint jumps. I think they came from configurations near singularities. I moved to the Pilz industrial motion planner, which gives strict straight-line motion and lets each waypoint have its own velocity scaling. Pilz rejects a path outright if any part of it hits a singularity, so the IK solver became the limiting factor.

## IK solver comparison

I tried three solvers on this arm. KDL failed often and pick_ik improved little. IKFast solved more poses than either, so I generated an IKFast plugin for the arm's planning group. This was an informal comparison on the poses I tried, not a benchmark.
