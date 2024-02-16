import s from "./home/home.module.scss"

import cx from "clsx"

import { Parallax } from "@/components/animations/parallax"
import { ScrollSkew } from "@/components/animations/scroll-skew"
import { CardWork } from "@/components/card-work"
import { Img } from "@/components/utility/img"
import { Link } from "@/components/utility/link"
import { Video } from "@/components/utility/video"
import { DefaultLayout } from "@/layouts/default"

import { all } from "@/api/queries/latest-works"
import { WorkCardProps } from "@/types"

import homeBlob from "@/public/img/home-blob.png"
import jdSmile from "@/public/img/jd-smile-looking-up.png"
import seeAllArrow from "@/public/img/see-all-arrow.svg"

type Props = {
  works: WorkCardProps[]
}

export default function Home({ works }: Props) {
  return (
    <DefaultLayout
      seo={{
        title: "JUST DESIGN FX",
        description:
          "We design iconic brands with future impact. JUST DESIGN FX is a future-focused brand and digital design agency with offices located in Istanbul and New York.",
      }}
    >
      <section className={cx(s.hero, "grid  grid-cols-2 p-lg")}>
        <div className={cx(s.text)}>
          <h1 className="flex flex-col">
            <span className={cx(s.lookAhead, "mr-auto")}>LOOK AHEAD</span>
            <span className={cx(s.theFuture)}>
              THE <i className={cx(s.italic, "inline-block")}>future</i>
              <br />
            </span>
            <span className={cx(s.hasArrived)}>HAS ARRIVED.</span>
            <span className={cx(s.agency, "ml-auto mr-xl")}>AWARDED BRANDING & WEB DESIGN AGENCY.</span>
          </h1>
        </div>

        <div className={cx(s.videoC, "mx-auto")}>
          <Video src="https://player.vimeo.com/progressive_redirect/playback/735759197/rendition/1080p/file.mp4?loc=external&signature=e30cfa5b1167a21b92162ecb0fb71a006e86aa05246f9052bad228a6baebbff3" />
        </div>

        <div className={s.waterBlob}>
          <Parallax speedY={-1}>
            <div>
              <Img src={homeBlob} alt="Blob" />
            </div>
          </Parallax>
        </div>
      </section>

      <section className={cx(s.works, "py-sm")}>
        <ScrollSkew>
          <h1 className={s.marqueeContent}>
            <div className={s.marqueeInner}>
              <span className={s.rightMargin}>LATEST</span>
              <span className={s.rightMargin}>
                W<span className={s.inlineO}>O</span>RKS.
              </span>
            </div>
          </h1>
        </ScrollSkew>

        <div className={cx(s.items, "grid grid-cols-2 p-md gap-y-xl gap-x-md")}>
          {works.map((item, i) => {
            return (
              <div className={cx(s.card, "cursor-pointer w-full h-full")} key={item.id}>
                <CardWork {...item} index={i} />
              </div>
            )
          })}
        </div>

        <div className={cx(s.takeALook, "mx-auto my-xl")}>
          <h3>
            <span className={s.firstLine}>
              TAKE
              <span className={s.inlineALook}>
                <span className={s.inlineA}>a</span>l<span className={s.inlineOo}>oo</span>k
              </span>
              AT
            </span>
            <span className={s.secondLine}>
              WHAT WE&apos;VE D<span className={s.inlineO}>O</span>NE
            </span>
            <span className={s.thirdLine}>SO FAR...</span>
          </h3>
        </div>

        <div className={s.jdSmileyContainer}>
          <Link className={s.seeAllWorkBtnC} href="/works">
            <button className={s.seeAllWorkBtn}>
              <p className={s.btnText}>SEE ALL WORK</p>
            </button>
            <div className={s.bg}></div>
          </Link>
          <div className={s.arrowContainer}>
            <Img className={s.arrow} src={seeAllArrow} alt="Arrow" />
          </div>
          <Parallax speedY={-1}>
            <div className={s.smileyContainer}>
              <Img className={s.jdSmiley} src={jdSmile} alt="Smiley" />
            </div>
          </Parallax>
        </div>
      </section>
    </DefaultLayout>
  )
}

export async function getStaticProps() {
  const works = await all()

  return { props: { works } }
}
