'use client'

import { Player } from '@remotion/player'
import type { NextPage } from 'next'
import React, { useMemo, useState } from 'react'
import {
  defaultImageCompProps,
  DURATION_IN_FRAMES,
  imageCompSchema,
  NEW_VIDEO_HEIGHT,
  NEW_VIDEO_WIDTH,
  VIDEO_FPS,
} from '../../types/constants'
import { z } from 'zod'
import { ImageComp } from '../../remotion/NewComp/Image/ImageComp'
import { RenderImageControls } from '../../components/RenderImageControls'

const container: React.CSSProperties = {
  margin: 'auto',
  marginBottom: 20,
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

const Image: NextPage = () => {
  const [text, setText] = useState<string>(defaultImageCompProps.titleTexts)
  const [color, setColor] = useState(defaultImageCompProps.titleColor)
  const [pageHeading, setPageHeading] = useState(
    defaultImageCompProps.pageHeading
  )

  const inputProps: z.infer<typeof imageCompSchema> = useMemo(() => {
    return {
      titleTexts: text,
      titleColor: color,
      pageHeading: pageHeading,
    }
  }, [text, color, pageHeading])

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{pageHeading}</h1>
      <div style={container}>
        <div style={outer}>
          <Player
            component={ImageComp}
            inputProps={inputProps}
            durationInFrames={DURATION_IN_FRAMES}
            fps={VIDEO_FPS}
            compositionHeight={NEW_VIDEO_HEIGHT}
            compositionWidth={NEW_VIDEO_WIDTH}
            style={player}
            controls
          />
        </div>
        <div style={control}>
          <RenderImageControls
            text={text}
            setText={setText}
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

export default Image
