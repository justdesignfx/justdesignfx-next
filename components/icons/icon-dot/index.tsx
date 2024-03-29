interface Props {
  fill: string
  rotate?: number
}
const IconDot = (props: Props) => {
  return (
    <div className="inherit-dims" style={{ transform: `rotate(${props.rotate ?? 0}deg)` }}>
      <svg width="100%" height="100%" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z"
          fill={props.fill}
        ></path>
      </svg>
    </div>
  )
}

export { IconDot }
