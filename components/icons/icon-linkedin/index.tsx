interface Props {
  fill: string
  rotate?: number
}
const IconLinkedin = (props: Props) => {
  return (
    <div style={{ transform: `rotate(${props.rotate}deg)` }}>
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 35.572 34">
        <path
          id="_367593_linkedin_business_network_social_icon"
          data-name="367593_linkedin_business_network_social_icon"
          d="M46.451,66.337h7.623V89.278H46.451Zm3.863-11.059a3.974,3.974,0,1,0-.1,7.926h.049a3.976,3.976,0,1,0,.051-7.926ZM72.792,65.8a7.569,7.569,0,0,0-6.871,3.787V66.337H58.3c.1,2.152,0,22.941,0,22.941h7.626V76.466a5.25,5.25,0,0,1,.251-1.861,4.175,4.175,0,0,1,3.911-2.788c2.761,0,3.864,2.1,3.864,5.187V89.278h7.625V76.123C81.572,69.076,77.811,65.8,72.792,65.8Z"
          transform="translate(-46 -55.278)"
          fill={props.fill}
        />
      </svg>
    </div>
  )
}

export { IconLinkedin }
