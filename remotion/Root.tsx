import { Composition } from 'remotion'
import { Main } from './MyComp/Main'
import {
  COMP_NAME,
  defaultMyCompProps,
  DURATION_IN_FRAMES,
  VIDEO_FPS,
  VIDEO_HEIGHT,
  VIDEO_WIDTH,
} from '../types/constants'
import { NextLogo } from './MyComp/NextLogo'
import { VideoComp, videoCompSchema } from './NewComp/Video/VideoComp'

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
        defaultProps={{
          titleTexts: [
            'Balancer Exploit Results in $900K stolen from LPs',
            'The Team warned about the bug 5 days prior',
            'Record 1 million ETH burned since the start of this year',
            'Uniswap fees alone made for 50% of the burn',
            'Grayscale wins against the sec in court',
          ],
          titleColor: '#ffff',
          logoPaths: ['google_1.png', 'grayscale_1.png'],
        }}
      />
    </>
  )
}
