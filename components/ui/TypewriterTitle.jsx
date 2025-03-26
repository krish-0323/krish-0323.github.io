"use client";
import React from 'react'
import Typewriter from 'typewriter-effect';

function TypewriterTitle() {
  return (
    <Typewriter
      options={{
        loop: true,
      }}
      onInit={(typewriter) => {
        typewriter
          .typeString("Where AI meets Recruiting")
          .pauseFor(2000)
          .deleteAll()
          .typeString("AI Powered Recruiter")
          .start();
      }}
    />
  )
}

export default TypewriterTitle;
