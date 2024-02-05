import s from "./card-work.module.scss"

import cx from "clsx"

import { Img } from "@/components/utility/img"
import { Link } from "@/components/utility/link"
import { Video } from "@/components/utility/video/"

import { WorkCardProps } from "@/types"

const CardWork = (props: WorkCardProps) => {
  const { awardImage, mediaSrcDesktop, mediaSrcMobile, mediaType, services, title, url } = props

  return (
    <div className={cx(s.cardWork, { [s.v2]: !services })}>
      <Link className={cx(s.mediaC, "mb-5")} href={`/works/${url}`}>
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
      </Link>

      <h3 className={cx(s.cardTitle)}>{title}</h3>

      {services && (
        <div className={cx("flex flex-wrap gap-2")}>
          {services?.map((category, index) => {
            return (
              <small key={index} className={s.cardTag}>
                {category}
              </small>
            )
          })}
        </div>
      )}
    </div>
  )
}

CardWork.displayName = "CardWork"

export default CardWork
