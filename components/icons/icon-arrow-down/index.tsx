interface Props {
  fill: string
  rotate?: number
}
const IconArrowDown = (props: Props) => {
  return (
    <div style={{ transform: `rotate(${props.rotate}deg)` }}>
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 31.208 57.205">
        <g id="Layer_2" data-name="Layer 2" transform="translate(38.662 -0.81) rotate(90)">
          <path
            id="Path_85"
            data-name="Path 85"
            d="M41.045,9.283a1.955,1.955,0,0,0,0,2.776l8.993,8.993H4.015a1.955,1.955,0,0,0,0,3.91H50L41.045,33.9A1.949,1.949,0,0,0,43.8,36.654L56.236,24.22a1.72,1.72,0,0,0,0-2.483L43.821,9.283a1.955,1.955,0,0,0-2.776,0Z"
            fill={props.fill}
            stroke="#000"
            strokeWidth="2.5"
          />
        </g>
      </svg>
    </div>
  )
}

export { IconArrowDown }
