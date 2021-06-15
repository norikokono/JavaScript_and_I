// https://nabendu82.medium.com/build-a-simple-photoshop-clone-using-react-e3e56ba079e1
// https://github.com/nabendu82/photo-editor-react

import React, { useState } from 'react'
import './PhotoEditor.css'
import Slider from './Slider'
import SidebarItem from './SidebarItem'

const DEFAULT_OPTIONS = [
  {
    name: 'Brightness',
    property: 'brightness',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Contrast',
    property: 'contrast',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Saturation',
    property: 'saturate',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Grayscale',
    property: 'grayscale',
    value: 100,
    range: {
      min: 0,
      max: 100
    },
    unit: '%'
  },
  {
    name: 'Sepia',
    property: 'sepia',
    value: 100,
    range: {
      min: 0,
      max: 100
    },
    unit: '%'
  },
  {
    name: 'Hue Rotate',
    property: 'hue-rotate',
    value: 0,
    range: {
      min: 0,
      max: 360
    },
    unit: 'deg'
  },
  {
    name: 'Blur',
    property: 'blur',
    value: 0,
    range: {
      min: 0,
      max: 20
    },
    unit: 'px'
  }
]

function PhotoEditor() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [options, setOptions] = useState(DEFAULT_OPTIONS)
  const selectedOption = options[selectedIndex]

  function handleSliderChange(e) {
    setOptions(prevOptions => {
      return prevOptions.map((option, index) => {
        if(index !== selectedIndex) return option
        else return {...option, value: e.target.value}
      })
    })
  }

  function getImageStyle() {
    const filters = options.map(option => {
      return `${option.property}(${option.value}${option.unit})`
    })
    return { filter: filters.join(' ')}
  }

  return (
    <div className="photo_editor_container">
      <div className="photo_editor_main-image" style={getImageStyle()} rel="noopener noreferrer nofollow" target="_blank"/>
      <div className="photo_editor_sidebar">
        {options.map((option, index) => {
            return (
              <SidebarItem
                key={index}
                name={option.name}
                active={index === selectedIndex}
                handleClick={() => setSelectedIndex(index)}
              />
            )
          })}
      </div>
      <Slider 
        min={selectedOption.range.min}
        max={selectedOption.range.max}
        value={selectedOption.value}
        handleChange={handleSliderChange}
      />
    </div>
  )
}

export default PhotoEditor;
