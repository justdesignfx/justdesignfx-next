import s from "./scroll-to-top.module.scss"

import { useLenisStore } from "@/lib/store/lenis"
import cx from "clsx"

const ScrollToTop = () => {
  const { lenis } = useLenisStore()

  function scrollToTop() {
    lenis?.scrollTo(0)
  }

  return (
    <div className={cx(s.scrollToTopC, "cursor-pointer")} onClick={scrollToTop}>
      <svg
        id="Group_1833"
        data-name="Group 1833"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 195.598 195.598"
      >
        <g id="Group_1828" data-name="Group 1828">
          <path
            id="Path_5396"
            data-name="Path 5396"
            d="M80.789,1.508A97.782,97.782,0,1,1,1.507,114.81,97.783,97.783,0,0,1,80.789,1.508"
            fill="#fff"
          />
          <rect id="Rectangle_2310" data-name="Rectangle 2310" width="195.598" height="195.598" fill="none" />
        </g>
        <g id="Group_1830" data-name="Group 1830">
          <path
            id="Path_5397"
            data-name="Path 5397"
            d="M49.038,105.673A47.388,47.388,0,1,0,83.419,48.144a47.388,47.388,0,0,0-34.381,57.529v0"
            fill="#d9ff50"
          />
          <path
            className={s.mouth}
            id="Path_5398"
            data-name="Path 5398"
            d="M63.573,112.569c2.162,5.562,6.317,12.256,13.007,11.106,5.309-.693,9-4.386,13.157-7.617,8.54-6.695,17.309-1.155,25.622,2.077,4.847,1.847,9.465-2.077,11.046-6.479"
            fill="none"
            stroke="#231f20"
            strokeMiterlimit="10.005"
            strokeWidth="1.378"
          />
          <path
            className={s.mouth}
            id="Path_5399"
            data-name="Path 5399"
            d="M60.266,111.39a3.06,3.06,0,0,0,3.191,1.256A3.122,3.122,0,0,0,65.81,110.1"
            fill="none"
            stroke="#231f20"
            strokeMiterlimit="10.005"
            strokeWidth="1.378"
          />
          <path
            className={s.mouth}
            id="Path_5400"
            data-name="Path 5400"
            d="M130.017,111.227a2.482,2.482,0,0,1-3.181.588,4.382,4.382,0,0,1-2.339-3.065"
            fill="none"
            stroke="#231f20"
            strokeMiterlimit="10.005"
            strokeWidth="1.378"
          />
          <path
            className={s.eye}
            id="Path_5401"
            data-name="Path 5401"
            d="M82.038,97.606a9.739,9.739,0,0,1,.086,1.592c2.538-.461,6.232-.924,6.694-2.308,2.077-6.925.693-14.774.693-22.16-8.772.231-7.849,11.305-7.613,17.508.067,1.758.135,3.543.141,5.365"
            fill="#231f20"
          />
          <path
            className={s.eye}
            id="Path_5402"
            data-name="Path 5402"
            d="M98.926,94.605c.05,2.75,5.128,1.366,7.436,2.058,0-7.387,2.538-17.082-1.386-20.544-4.616-3.924-6.694,8.31-6.2,14.151.068,1.449.14,2.89.149,4.334"
            fill="#231f20"
          />
          <path
            id="Path_5403"
            data-name="Path 5403"
            d="M54.211,75.362a47.4,47.4,0,1,1,17.06,64.826A47.4,47.4,0,0,1,54.211,75.362Z"
            fill="none"
            stroke="#000"
            strokeMiterlimit="10.008"
            strokeWidth="1.251"
          />
          <rect
            id="Rectangle_2311"
            data-name="Rectangle 2311"
            width="95.724"
            height="100.427"
            transform="translate(47.279 46.703)"
            fill="none"
          />
        </g>
        <g className={s.text} id="Group_1832" data-name="Group 1832">
          <path
            id="Path_5404"
            data-name="Path 5404"
            d="M31.608,46.807l-1.535,2.141L44.626,59.391,42.684,62.1,28.129,51.653,26.6,53.792l-2.267-1.627,5.011-6.984Z"
            fill="#171717"
          />
          <path
            id="Path_5405"
            data-name="Path 5405"
            d="M47.361,50.321l-2.09,2.205,2.562,2.958-2.2,2.318L32.126,41.955l3.979-4.2,16.559,12.63L50.45,52.723Zm-2.194-1.708L36.4,41.793l-.233.245,7.277,8.387Z"
            fill="#171717"
          />
          <path
            id="Path_5406"
            data-name="Path 5406"
            d="M51.183,40.153l1.162,3.293,3.442,4.561-2.621,1.978L40.7,33.469l2.619-1.978L48.9,38.886l.126-.094-3.323-9.1,2.623-1.978L51.848,37l9.109,7.1L58.445,46Z"
            fill="#171717"
          />
          <path
            id="Path_5407"
            data-name="Path 5407"
            d="M55.836,26.572l2.98,5.4,2.717-1.5,1.327,2.4-2.718,1.5,3,5.434,2.776-1.533,1.349,2.443L61.6,43.846l-10-18.117L57.265,22.6l1.347,2.442Z"
            fill="#171717"
          />
          <path
            id="Path_5408"
            data-name="Path 5408"
            d="M65.336,18.81l4.89-1.4L76.36,32.627l.216-.062L73.732,16.408l4.89-1.4,5.7,19.907-2.942.842-4.464-15.6-.261.074,2.777,16.083-3.5,1L69.771,22.2l-.259.074,4.465,15.6-2.944.842Z"
            fill="#171717"
          />
          <path
            id="Path_5409"
            data-name="Path 5409"
            d="M86.67,16.89l.65,6.132,3.088-.329.29,2.73-3.088.328.656,6.176,3.156-.335.294,2.776-6.445.682L83.086,14.464l6.444-.683.3,2.774Z"
            fill="#171717"
          />
          <path
            id="Path_5410"
            data-name="Path 5410"
            d="M105.325,16.969,102.7,16.78l-1.287,17.858L98.094,34.4,99.38,16.54l-2.625-.189.2-2.782,8.57.617Z"
            fill="#171717"
          />
          <path
            id="Path_5411"
            data-name="Path 5411"
            d="M116.588,20.4l-2.732,12.485c-.674,3.078-2.649,3.682-5.221,3.12-2.55-.559-4.114-1.937-3.44-5.015l2.733-12.485c.673-3.078,2.67-3.677,5.219-3.12,2.572.563,4.115,1.938,3.441,5.015m-4.037-2.289c-.6-.13-1.167.067-1.4,1.123l-2.723,12.441c-.231,1.055.208,1.474.8,1.6.616.135,1.167-.067,1.4-1.122l2.723-12.442c.23-1.055-.185-1.469-.8-1.6"
            fill="#171717"
          />
          <path
            id="Path_5412"
            data-name="Path 5412"
            d="M131.547,24.932l-2.411-1.053-7.164,16.408-3.052-1.333,7.165-16.408-2.411-1.052,1.115-2.556,7.874,3.437Z"
            fill="#171717"
          />
          <path
            id="Path_5413"
            data-name="Path 5413"
            d="M141.152,32.056,134.3,42.84c-1.69,2.658-3.752,2.547-5.972,1.135-2.2-1.4-3.2-3.23-1.508-5.889L133.673,27.3c1.69-2.658,3.77-2.535,5.972-1.135,2.222,1.411,3.2,3.231,1.507,5.888m-3-3.534c-.515-.326-1.119-.338-1.7.573l-6.828,10.746c-.58.911-.313,1.454.2,1.781.532.337,1.119.337,1.7-.575L138.35,30.3c.58-.911.332-1.442-.2-1.78"
            fill="#171717"
          />
          <path
            id="Path_5414"
            data-name="Path 5414"
            d="M150.454,39.867l-5.027,5.883c-1.915,2.24-3.183,2.754-5.542.738l-1.335-1.141-3.01,3.523-2.513-2.148L146.47,30.99l3.849,3.289c2.359,2.015,2.049,3.348.135,5.588m-2.463-2.1c.7-.82.685-1.25-.052-1.879l-.752-.642-6.84,8,.752.644c.736.628,1.163.578,1.865-.242Z"
            fill="#171717"
          />
          <path
            id="Path_5415"
            data-name="Path 5415"
            d="M164.738,140.092l1.248-2.316-15.764-8.495,1.579-2.93,15.764,8.493,1.248-2.317,2.456,1.323-4.075,7.565Z"
            fill="#171717"
          />
          <path
            id="Path_5416"
            data-name="Path 5416"
            d="M148.7,138.6l1.783-2.458-2.925-2.6,1.877-2.585,15.455,13.944-3.4,4.679-18.058-10.356,1.889-2.6Zm2.4,1.406,9.574,5.616.2-.273-8.3-7.364Z"
            fill="#171717"
          />
          <path
            id="Path_5417"
            data-name="Path 5417"
            d="M146.232,149.206l-1.583-3.114-4.01-4.072,2.34-2.3L157.5,154.462l-2.34,2.306-6.5-6.605-.113.111,4.485,8.592-2.341,2.3-4.705-8.753-9.961-5.851,2.242-2.21Z"
            fill="#171717"
          />
          <path
            id="Path_5418"
            data-name="Path 5418"
            d="M143.417,163.278l-3.662-4.962-2.5,1.846-1.631-2.209,2.5-1.846-3.689-5L131.881,153l-1.657-2.245,5.214-3.85,12.3,16.658-5.214,3.85-1.658-2.245Z"
            fill="#171717"
          />
          <path
            id="Path_5419"
            data-name="Path 5419"
            d="M134.98,172.218l-4.666,2.022-8.058-14.286-.2.09,4.919,15.647-4.665,2.022-8.234-18.992,2.807-1.217,6.453,14.884.247-.108L118.736,156.7l3.345-1.449,8.062,14.186.247-.108-6.451-14.883,2.807-1.217Z"
            fill="#171717"
          />
          <path
            id="Path_5420"
            data-name="Path 5420"
            d="M114.091,176.884l-1.441-5.992-3.019.725-.642-2.668,3.019-.726-1.452-6.036-3.084.741-.652-2.712,6.3-1.516,4.84,20.123-6.3,1.515-.651-2.711Z"
            fill="#171717"
          />
          <path
            id="Path_5421"
            data-name="Path 5421"
            d="M95.581,179.244l2.628-.154L97.16,161.209l3.324-.194,1.051,17.88,2.628-.154.163,2.785-8.58.5Z"
            fill="#171717"
          />
          <path
            id="Path_5422"
            data-name="Path 5422"
            d="M83.977,177.316l1.064-12.736c.263-3.138,2.141-4,4.764-3.778,2.6.218,4.333,1.379,4.07,4.517L92.81,178.054c-.262,3.139-2.163,4-4.763,3.778-2.624-.219-4.333-1.379-4.07-4.516m4.3,1.736c.605.051,1.147-.22,1.238-1.3l1.062-12.69c.09-1.077-.4-1.433-1.005-1.484-.628-.052-1.147.22-1.237,1.3l-1.062,12.69c-.091,1.075.377,1.43,1,1.483"
            fill="#171717"
          />
          <path
            id="Path_5423"
            data-name="Path 5423"
            d="M68.559,174.791l2.53.728,4.949-17.21,3.2.919-4.949,17.21,2.53.728-.772,2.681-8.258-2.375Z"
            fill="#171717"
          />
          <path
            id="Path_5424"
            data-name="Path 5424"
            d="M58.231,169.1l5.251-11.654c1.294-2.873,3.352-3.056,5.753-1.974,2.38,1.072,3.625,2.744,2.331,5.617l-5.251,11.653c-1.294,2.872-3.372,3.047-5.752,1.974-2.4-1.081-3.625-2.744-2.332-5.616m3.479,3.072c.554.25,1.155.176,1.6-.81l5.233-11.612c.443-.984.1-1.484-.452-1.734-.575-.259-1.156-.175-1.6.809l-5.233,11.613c-.442.985-.12,1.475.454,1.734"
            fill="#171717"
          />
          <path
            id="Path_5425"
            data-name="Path 5425"
            d="M47.859,162.421l4.223-6.487c1.606-2.471,2.8-3.144,5.4-1.451l1.47.957,2.529-3.885,2.773,1.805L52.962,170.709l-4.242-2.762c-2.6-1.694-2.469-3.056-.861-5.526m2.716,1.767c-.589.9-.517,1.329.295,1.857l.83.539,5.743-8.824-.83-.541c-.81-.527-1.227-.423-1.815.483Z"
            fill="#171717"
          />
          <rect id="Rectangle_2312" data-name="Rectangle 2312" width="195.598" height="195.598" fill="none" />
        </g>
      </svg>
    </div>
  )
}

export default ScrollToTop
