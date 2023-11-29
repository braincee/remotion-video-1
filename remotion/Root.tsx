import { Composition, Still } from 'remotion'
import { Main } from './MyComp/Main'
import {
  COMP_NAME,
  defaultMyCompProps,
  DURATION_IN_FRAMES,
  VIDEO_FPS,
  VIDEO_HEIGHT,
  VIDEO_WIDTH,
  videoCompSchema,
  imageCompSchema,
  defaultImageCompProps,
  defaultVideoCompProps,
} from '../types/constants'
import { NextLogo } from './MyComp/NextLogo'
import { VideoComp } from './NewComp/Video/VideoComp'
import { ImageComp } from './NewComp/Image/ImageComp'

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id={COMP_NAME}
        component={Main}
        durationInFrames={DURATION_IN_FRAMES}
        fps={VIDEO_FPS}
        width={VIDEO_WIDTH}
        height={VIDEO_HEIGHT}
        defaultProps={defaultMyCompProps}
      />
      <Composition
        id='NextLogo'
        component={NextLogo}
        durationInFrames={300}
        fps={30}
        width={140}
        height={140}
        defaultProps={{
          outProgress: 0,
        }}
      />

      <Composition
        id='MyComponent'
        component={VideoComp}
        durationInFrames={810}
        fps={30}
        width={1080}
        height={1920}
        schema={videoCompSchema}
        defaultProps={defaultVideoCompProps}
      />
      {/* <Composition
        id='OnlyImage'
        component={ImageComp}
        durationInFrames={150}
        fps={30}
        width={1080}
        height={1920}
        schema={imageCompSchema}
        defaultProps={defaultImageCompProps}
      /> */}
      <Still
        id='OnlyImage'
        component={ImageComp}
        width={1080}
        height={1920}
        schema={imageCompSchema}
        defaultProps={defaultImageCompProps}
      />
    </>
  )
}
