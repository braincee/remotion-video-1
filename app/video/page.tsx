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
import { Input, Box } from '@mui/joy'
import { VideoComp } from '../../remotion/NewComp/Video/VideoComp'

const container: React.CSSProperties = {
  margin: 'auto',
  marginBottom: 20,
  width: '100%',
  display: 'flex',
}

const outer: React.CSSProperties = {
  overflow: 'hidden',
  marginBottom: 40,
  marginTop: 60,
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

const Home: NextPage = () => {
  const [texts, setTexts] = useState(defaultVideoCompProps.titleTexts)
  const [color, setColor] = useState(defaultVideoCompProps.titleColor)

  const inputProps: z.infer<typeof videoCompSchema> = useMemo(() => {
    return {
      titleTexts: texts,
      titleColor: color,
    }
  }, [texts])

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Remotion Video</h1>
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
        <Box sx={{ p: 2 }}>
          <Input placeholder='add text' />
          <Input placeholder='add text' />
          <Input placeholder='add text' />
        </Box>
        h
      </div>
    </div>
  )
}

export default Home
