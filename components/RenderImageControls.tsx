import { DropDown } from './DropDown'
import { Input } from './Input'
import { MyColorPicker } from './MyColorPicker'
import { Spacing } from './Spacing'

export const RenderImageControls: React.FC<{
  text: string
  color: string
  setText: React.Dispatch<React.SetStateAction<string>>
  setColor: React.Dispatch<React.SetStateAction<string>>
}> = ({ text, setText, color, setColor }) => {
  const controls: React.CSSProperties = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  }

  console.log(color)

  return (
    <div style={controls}>
      <>
      <DropDown text="Text">
        <Input setText={setText} text={text}></Input>
        <Spacing></Spacing>
        <Spacing></Spacing>
      </DropDown>
      </>
      <DropDown text="Color">
        <MyColorPicker
          initialColor='#000'
          description='Text Color'
          setMyColor={setColor}
        />
      </DropDown>
    </div>
  )
}
