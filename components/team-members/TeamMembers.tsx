import s from "./team-members.module.scss"

import { ScrollTrigger, gsap } from "@/lib/gsap"
import { useGSAP } from "@gsap/react"
import cx from "clsx"
import { memo, useRef } from "react"

import { CardMember } from "@/components/card-member"

import { TeamMemberProps } from "@/types"

interface Props {
  items: TeamMemberProps[]
}

const TeamMembers = (props: Props) => {
  const ref = useRef(null)

  useGSAP(
    () => {
      let maxWidth = 0
      const container = ref.current

      const getMaxWidth = () => {
        maxWidth = 0
        gsap.utils.toArray<HTMLElement>(".item").forEach((section) => {
          maxWidth += section.clientWidth
        })
      }
      getMaxWidth()
      ScrollTrigger.addEventListener("refreshInit", getMaxWidth)

      gsap.to(".item", {
        x: () => `-${maxWidth - window.innerWidth}`,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          end: () => `+=${maxWidth * 2}`,
          onUpdate: (self) => {
            gsap.to(".progress-bar", {
              scaleX: self?.progress ?? 0,
              ease: "none",
            })

            // gsap.to(".keep-scrolling", {
            //   opacity: self.progress === 0 || self.progress === 1 ? 0 : 1,
            //   xPercent: gsap.utils.mapRange(-10000, 10000, -1, 1, Math.abs(self.getVelocity())) * self.direction * -1,
            //   transform: () =>
            //     `skew(${gsap.utils.mapRange(-10000, 10000, -10, 10, Math.abs(self.getVelocity())) * self.direction}deg`,
            // })

            gsap.to(".progress-bar", {
              opacity: self.progress === 0 || self.progress === 1 ? 0 : 1,
            })
          },
          scrub: true,
          pin: true,
        },
      })
    },
    { scope: ref, dependencies: [props.items] }
  )

  return (
    <section className={cx(s.teamMembers, "flex items-center")} ref={ref}>
      {props.items.map((member, i) => {
        return (
          <div
            className={cx(s.item, { [s.last]: i === props.items.length - 1 }, "item", "flex-shrink-0")}
            key={member.id}
          >
            <CardMember {...member} />
          </div>
        )
      })}

      <div className={cx(s.progressBar, "progress-bar")}></div>

      {/* <div className={cx(s.keepScrolling)}>
        <div className={cx(s.transform, "keep-scrolling flex items-center")}>
          <p>KEEP SCROOOOOOOOOOLLING!</p>
          <p>KEEP SCROOOOOOOOOOLLING!</p>
          <p>KEEP SCROOOOOOOOOOLLING!</p>
          <p>KEEP SCROOOOOOOOOOLLING!</p>
          <p>KEEP SCROOOOOOOOOOLLING!</p>
          <p>KEEP SCROOOOOOOOOOLLING!</p>
          <p>KEEP SCROOOOOOOOOOLLING!</p>
          <p>KEEP SCROOOOOOOOOOLLING!</p>
          <p>KEEP SCROOOOOOOOOOLLING!</p>
          <p>KEEP SCROOOOOOOOOOLLING!</p>
          <p>KEEP SCROOOOOOOOOOLLING!</p>
          <p>KEEP SCROOOOOOOOOOLLING!</p>
          <p>KEEP SCROOOOOOOOOOLLING!</p>
          <p>KEEP SCROOOOOOOOOOLLING!</p>
          <p>KEEP SCROOOOOOOOOOLLING!</p>
          <p>KEEP SCROOOOOOOOOOLLING!</p>
        </div>
      </div> */}
    </section>
  )
}

TeamMembers.displayName = "TeamMembers"

export default memo(TeamMembers)
