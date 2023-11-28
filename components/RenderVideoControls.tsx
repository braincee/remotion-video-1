'use client'
import { z } from 'zod'
import { videoCompSchema } from '../types/constants'

import { Input } from './Input'
import { Spacing } from './Spacing'
import { useEffect, useState } from 'react'
import { MyColorPicker } from './MyColorPicker'

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
  const [singleText, setSingleText] = useState('')

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
      {texts?.map((text, index) => (
        <div key={index}>
          {/* <Input setText={setTexts} text={text}></Input> */}
          <input
            style={textarea}
            value={text}
            onChange={(e) => handleChange(e, index)}
          />
          <Spacing></Spacing>
          <Spacing></Spacing>
        </div>
      ))}
      <MyColorPicker
        initialColor='#fff'
        description='Text Color'
        setMyColor={setColor}
      />
    </div>
  )
}
