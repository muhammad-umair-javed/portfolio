---
title: Beam balancing with two BLDC motors
one_liner: A center-pivoted beam held level by two BLDC motors, with a PID controller running bare metal on a TM4C123GH6PM.
status: complete
areas: [control, embedded]
contexts: [coursework]
featured: false
order: 12
platform: Center-pivoted beam with two BLDC motors, TM4C123GH6PM microcontroller and MPU6050 IMU
tools: [C, TM4C123GH6PM, MPU6050, PID control]
role: Group lead for a semester project. I integrated the sensor code into the control program, implemented the controller, tuned it and balanced the beam. The beam hardware and the I2C sensor code came from teammates.
hero: beam-balancing/beam_balance.png
hero_alt: The beam balancing setup
hero_caption: The beam balancing setup.
pipeline:
  - MPU6050 IMU measures the beam angle
  - PID controller on the TM4C123GH6PM compares it with level
  - Speed commands go to the two BLDC motors
  - The motors push the beam back toward level
---

## What it does

A beam pivots at its center and is driven by two BLDC motors. An IMU measures the beam's angle, and a PID controller sets the speed of the motors to bring the beam level and keep it there.

## What I built

- The firmware on the TM4C123GH6PM, written bare metal. It brings the sensor code, the PID control and the data transfer together in one real-time program.
- The tuning. I tuned the gains by hand, starting with P and then adding D and I. Higher P gave overshoot and oscillation.

## Result

The beam balances, with a position error of less than 5 degrees.
