import s from "./card-member.module.scss"

import React from "react"
import cx from "clsx"

import { Img } from "@/components/utility/img"
import { Link } from "@/components/utility/link"
import { IconLinkedin } from "@/components/icons/icon-linkedin"

import { TeamMemberProps } from "@/types"

const CardMember = (props: TeamMemberProps) => {
  const { id, name, surname, role, profileImage, iconImage, linkedin } = props

  return (
    <div className={cx(s.cardMember, "flex items-center gap-7")}>
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
          <Img src={profileImage} alt="Team Member" height={500} width={500} />
        </div>
      </div>

      <div className={cx(s.info, "flex flex-col items-start")}>
        <h6 className={s.credentials}>
          {name}
          <br /> {surname}
        </h6>

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
