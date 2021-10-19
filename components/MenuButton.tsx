import React from 'react'

const MenuButton: React.FC = () => {
  return (
    <button className="focus:border-gray-400 hover:border-gray-400 border-gray-600 text-gray-600 inline-flex items-center justify-center p-1 w-14 h-14 border-2 rounded-full focus:outline-none transition">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="6"
          y="9"
          width="20"
          height="2"
          rx="1"
          fill="currentColor"
          transform-origin="0px 0px"
          style={{ transform: 'none', transformOrigin: '0 0' }}
        ></rect>
        <rect
          x="6"
          y="15"
          width="20"
          height="2"
          rx="1"
          fill="currentColor"
          opacity="1"
        ></rect>
        <rect
          x="6"
          y="21"
          width="20"
          height="2"
          rx="1"
          fill="currentColor"
          style={{ transform: 'none', transformOrigin: '0 0' }}
          transform-origin="0px 0px"
        ></rect>
      </svg>
    </button>
  )
}

export default MenuButton
