import s from "./card-work.module.scss"

import { CustomEase, gsap } from "@/lib/gsap"
import { useGSAP } from "@gsap/react"
import cx from "clsx"
import { useRef } from "react"

import { IconDot } from "@/components/icons/icon-dot"
import { Img } from "@/components/utility/img"
import { Link } from "@/components/utility/link"
import { Video } from "@/components/utility/video/"

import { WorkCardProps } from "@/types"

import { isEven } from "@/lib/utils"

const CardWork = (props: WorkCardProps) => {
  const { awardImage, mediaSrcDesktop, mediaSrcMobile, mediaType, services, title, url, index, ...other } = props
  const ref = useRef(null)

  useGSAP(
    () => {
      const ease = CustomEase.create("easeName", ".25,0,0,1")

      gsap.to([".media-c", ".transform"], {
        duration: 1.5,
        scale: 1,
        ease,
        scrollTrigger: {
          markers: false,
          trigger: ref.current,
          toggleActions: "play reset play reset ",
        },
      })
    },
    {
      scope: ref,
    }
  )

  return (
    <Link
      className={cx(s.cardWork, "card-work", {
        [s.v2]: !services,
        [s.left]: index !== undefined ? isEven(index) : null,
        [s.right]: index !== undefined ? !isEven(index ?? 0) : null,
      })}
      href={`/works/${url}`}
      ref={ref}
    >
      <div className={cx(s.transform, "transform will-change-transform")}>
        <div className={cx(s.overflowC, "overflow-hidden")}>
          <div className={cx(s.mediaC, "media-c will-change-transform")}>
            {mediaType === "video" && <Video src={mediaSrcDesktop} autoPlay playsInline loop muted></Video>}

            {mediaType === "image" && (
              <>
                <Img
                  className="object-cover"
                  src={mediaSrcDesktop}
                  alt="Project Visual"
                  height={500}
                  width={500}
                  loading="lazy"
                />
                {awardImage && <Img className={s.award} src={awardImage} alt="Award Visual" height={200} width={300} />}
              </>
            )}
          </div>
        </div>

        <h3 className={cx(s.cardTitle)}>{title}</h3>

        {services && (
          <div className={cx("flex flex-wrap gap-2 items-center w-11/12")}>
            {services?.map((category, i) => {
              return (
                <>
                  <small key={i} className={s.cardTag}>
                    {category}
                  </small>
                  {i !== services.length - 1 && (
                    <span className={cx(s.iconC, "flex items-center justify-center")}>
                      <IconDot fill="var(--black)" />
                    </span>
                  )}
                </>
              )
            })}
          </div>
        )}
      </div>
    </Link>
  )
}

CardWork.displayName = "CardWork"

export default CardWork
