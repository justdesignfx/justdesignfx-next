import s from "./card-member.module.scss"

import React from "react"
import cx from "clsx"

import { Img } from "@/components/utility/img"
import { Link } from "@/components/utility/link"
import { IconLinkedin } from "@/components/icons/icon-linkedin"

import { TeamMemberProps } from "@/types"

const CardMember = (props: TeamMemberProps) => {
  const { name, surname, role, profileImage, iconImage, linkedin } = props

  return (
    <div className={cx(s.cardMember, "flex flex-col tablet:flex-row items-center justify-center gap-5 tablet:gap-7")}>
      <div className={cx(s.imgC, "flex-shrink-0")}>
        <div className={s.emojiC}>
          <Img
            src={iconImage}
            className={cx(s.emoji, "object-contain")}
            alt="Team Member Icon"
            height={100}
            width={100}
          />
        </div>
        <div className={s.memberPic}>
          <Img className="object-cover" src={profileImage} alt="Team Member" height={500} width={500} />
        </div>
      </div>

      <div className={cx(s.info, "flex flex-col items-center tablet:items-start")}>
        <p>
          {name} <br className={cx("hidden tablet:block")} /> {surname}
        </p>

        {role.split("<br>").map((par: string, i: number) => {
          return (
            <small className={s.role} key={i}>
              {par}
            </small>
          )
        })}

        {linkedin && (
          <Link className={cx(s.iconC, "cursor-pointer")} href={linkedin} external>
            <IconLinkedin fill="var(--white)" />
          </Link>
        )}
      </div>
    </div>
  )
}

export default CardMember
