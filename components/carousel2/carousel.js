import Slide from "./slide";
import {useState, useEffect} from 'react';

const shapeData = [
  {
    "width": 105
  },
  {
    "width": 115
  },
  {
    "width": 100
  },
  {
    "width": 101
  },
  {
    "width": 123
  },
  {
    "width": 58
  },
  {
    "width": 49
  },
  {
    "width": 41
  },
  {
    "width": 83
  },
  {
    "width": 50
  },
  {
    "width": 83
  },
  {
    "width": 102
  },
  {
    "width": 84
  },
  {
    "width": 106
  },
  {
    "width": 29
  },
  {
    "width": 95
  },
  {
    "width": 64
  },
  {
    "width": 117
  },
  {
    "width": 36
  },
  {
    "width": 88
  },
  {
    "width": 24
  },
  {
    "width": 58
  },
  {
    "width": 89
  },
  {
    "width": 55
  },
  {
    "width": 46
  },
  {
    "width": 68
  },
  {
    "width": 90
  },
  {
    "width": 42
  },
  {
    "width": 39
  },
  {
    "width": 49
  },
  {
    "width": 120
  },
  {
    "width": 30
  },
  {
    "width": 24
  },
  {
    "width": 44
  },
  {
    "width": 70
  },
  {
    "width": 52
  },
  {
    "width": 47
  },
  {
    "width": 81
  },
  {
    "width": 58
  },
  {
    "width": 101
  },
  {
    "width": 29
  },
  {
    "width": 116
  },
  {
    "width": 27
  },
  {
    "width": 80
  },
  {
    "width": 75
  },
  {
    "width": 105
  },
  {
    "width": 84
  },
  {
    "width": 79
  },
  {
    "width": 114
  },
  {
    "width": 75
  },
  {
    "width": 75
  },
  {
    "width": 95
  },
  {
    "width": 73
  },
  {
    "width": 34
  },
  {
    "width": 71
  },
  {
    "width": 40
  },
  {
    "width": 35
  },
  {
    "width": 87
  },
  {
    "width": 49
  },
  {
    "width": 46
  },
  {
    "width": 51
  },
  {
    "width": 56
  },
  {
    "width": 121
  },
  {
    "width": 104
  },
  {
    "width": 62
  },
  {
    "width": 35
  },
  {
    "width": 78
  },
  {
    "width": 38
  },
  {
    "width": 110
  },
  {
    "width": 74
  },
  {
    "width": 59
  },
  {
    "width": 68
  },
  {
    "width": 48
  },
  {
    "width": 92
  },
  {
    "width": 27
  },
  {
    "width": 90
  },
  {
    "width": 102
  },
  {
    "width": 93
  },
  {
    "width": 50
  },
  {
    "width": 109
  },
  {
    "width": 120
  },
  {
    "width": 95
  },
  {
    "width": 83
  },
  {
    "width": 31
  },
  {
    "width": 109
  },
  {
    "width": 55
  },
  {
    "width": 31
  },
  {
    "width": 44
  },
  {
    "width": 60
  },
  {
    "width": 69
  },
  {
    "width": 87
  },
  {
    "width": 29
  },
  {
    "width": 59
  },
  {
    "width": 76
  },
  {
    "width": 98
  },
  {
    "width": 24
  },
  {
    "width": 109
  },
  {
    "width": 47
  },
  {
    "width": 44
  },
  {
    "width": 74
  }
]

export default function Carousel(){
  const [selected, setSelected] = useState(0);
  const [left, setLeft] = useState(0);

  function controlSelected(){
    setSelected(selected < shapeData.length - 1 ? selected++ : 0)
  }
  useEffect(_ => {
    setLeft((shapeData[selected - 1]?.width || 0) + left)
  }, [selected])

  // useEffect(_ => {
  //   controlSelected()
  // }, [selected])

  return <div
    className="relative w-full h-80"
  >
    {/* image frame */}
    <div 
      className="absolute flex flex-row w-max h-full left-0 top-0"
      onClick={controlSelected}
      style={{
        left: `-${left}px`,
      }}
    >
      {shapeData.map((obj, index) => {
        return <div key={index} className="bg-blue-600 h-full" style={{
          width: `${obj.width}px`,
          opacity: 1/(Math.abs(index-selected)+1) //fade away
        }}>
        </div>
      })}
    </div>
  </div>
}