import { useVideoConfig } from 'remotion'
import { z } from 'zod'
import { Text } from './Text'
import { NewsUpdateDisplay } from './NewsUpdateDisplay'
import { zColor } from '@remotion/zod-types'
import { LogoSequence } from './LogoSequence'

export const videoCompSchema = z.object({
  titleTexts: z.array(z.string()),
  titleColor: zColor(),
  logoPaths: z.tuple([z.string(), z.string()]),
})

export const VideoComp: React.FC<z.infer<typeof videoCompSchema>> = ({
  titleTexts,
  titleColor,
  logoPaths,
}) => {
  const { width, height } = useVideoConfig()

  return (
    <div
      style={{
        gap: '40px',
        position: 'absolute',
        top: 0,
        left: 0,
        width: width,
        height: height,
        backgroundColor: 'black',
      }}
    >
      <NewsUpdateDisplay />
      <Text titleTexts={titleTexts} titleColor={titleColor} />
      <LogoSequence />
    </div>
  )
}
