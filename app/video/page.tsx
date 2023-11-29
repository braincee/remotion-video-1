'use client'

import { Player } from '@remotion/player'
import type { NextPage } from 'next'
import React, { useMemo, useState } from 'react'
import {
  defaultVideoCompProps,
  NEW_VIDEO_DURATION_IN_FRAMES,
  NEW_VIDEO_HEIGHT,
  NEW_VIDEO_WIDTH,
  VIDEO_FPS,
  videoCompSchema,
} from '../../types/constants'
import { z } from 'zod'
import { VideoComp } from '../../remotion/NewComp/Video/VideoComp'
import { RenderVideoControls } from '../../components/RenderVideoControls'

const container: React.CSSProperties = {
  margin: 'auto',
  marginBottom: 20,
  width: '100%',
  display: 'flex',
  padding: 10,
  marginTop: 60,
}

const outer: React.CSSProperties = {
  overflow: 'hidden',
  maxHeight: '80vh',
  width: '65%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}

const player: React.CSSProperties = {
  width: '100%',
}

const control: React.CSSProperties = {
  width: '35%',
  padding: '10px',
}

const Video: NextPage = () => {
  const [texts, setTexts] = useState(defaultVideoCompProps.titleTexts)
  const [color, setColor] = useState(defaultVideoCompProps.titleColor)
  const [pageHeading, setPageHeading] = useState(
    defaultVideoCompProps.pageHeading
  )

  const inputProps: z.infer<typeof videoCompSchema> = useMemo(() => {
    return {
      titleTexts: texts,
      titleColor: color,
      pageHeading: pageHeading,
    }
  }, [texts, color, pageHeading])

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{pageHeading}</h1>
      <div style={container}>
        <div style={outer}>
          <Player
            component={VideoComp}
            inputProps={inputProps}
            durationInFrames={NEW_VIDEO_DURATION_IN_FRAMES}
            fps={VIDEO_FPS}
            compositionHeight={NEW_VIDEO_HEIGHT}
            compositionWidth={NEW_VIDEO_WIDTH}
            style={player}
            controls
            autoPlay
            loop
          />
        </div>
        <div style={control}>
          <RenderVideoControls
            texts={texts}
            setTexts={setTexts}
            inputProps={inputProps}
            color={color}
            setColor={setColor}
            pageHeading={pageHeading}
            setPageHeading={setPageHeading}
          />
        </div>
      </div>
    </div>
  )
}

export default Video
