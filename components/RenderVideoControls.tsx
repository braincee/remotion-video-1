'use client'

import { Spacing } from './Spacing'
import { MyColorPicker } from './MyColorPicker'
import { DropDown } from './DropDown'

const textarea: React.CSSProperties = {
  resize: 'none',
  lineHeight: 1.7,
  display: 'block',
  width: '100%',
  borderRadius: 'var(--geist-border-radius)',
  backgroundColor: 'var(--background)',
  padding: 'var(--geist-half-pad)',
  color: 'var(--foreground)',
  fontSize: 14,
}

export const RenderVideoControls: React.FC<{
  texts: string[]
  color: string
  setTexts: React.Dispatch<React.SetStateAction<string[]>>
  setColor: React.Dispatch<React.SetStateAction<string>>
}> = ({ texts, setTexts, color, setColor }) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    textIndex: number
  ) => {
    setTexts((prevTexts: string[]) => {
      const newTexts = prevTexts.map((text: string, index) => {
        if (index === textIndex) {
          return e.target.value
        }
        return text
      })
      return newTexts
    })
  }

  const controls: React.CSSProperties = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  }

  return (
    <div style={controls}>
      <DropDown text='Text'>
        {texts?.map((text, index) => (
          <div key={index}>
            <input
              style={textarea}
              value={text}
              onChange={(e) => handleChange(e, index)}
            />
            <Spacing></Spacing>
            <Spacing></Spacing>
          </div>
        ))}
      </DropDown>
      <DropDown text='Color'>
        <MyColorPicker
          initialColor='#fff'
          description='Text Color'
          setMyColor={setColor}
        />
      </DropDown>
    </div>
  )
}
