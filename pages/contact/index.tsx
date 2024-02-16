import s from "./contact.module.scss"

import cx from "clsx"
import { useFormik } from "formik"
import { useEffect, useRef, useState } from "react"
import * as yup from "yup"

import { IconArrow } from "@/components/icons/icon-arrow"
import { Img } from "@/components/utility/img"
import { Link } from "@/components/utility/link"
import { DefaultLayout } from "@/layouts/default"

import { useContact } from "@/api/mutations/contact"
import { useLenisStore } from "@/lib/store/lenis"
import { ContactReason } from "@/types"

import blob from "@/public/img/contact-blob.png"
import smile from "@/public/img/contact-smile.png"
import dropALine from "@/public/img/drop-a-line.svg"
import accept from "@/public/img/privacy-accept.svg"
import { useRouter } from "next/router"

const Contact = () => {
  const router = useRouter()
  const { lenis } = useLenisStore()
  const contactFormRef = useRef(null)
  const [privacyAccepted, setPrivacyAccepted] = useState(false)
  const togglePrivacy = () => setPrivacyAccepted((prev) => !prev)
  const mutation = useContact()

  const formik = useFormik({
    initialValues: {
      name: "",
      contactReason: router.query.contactReason as ContactReason,
      email: "",
      message: "",
    },
    validationSchema: yup.object().shape({
      name: yup.string().required("This field is required."),
      contactReason: yup.string().required("This field is required."),
      email: yup.string().email("It must be a valid email.").required("This field is required."),
      message: yup.string().required("This field is required."),
    }),
    onSubmit: (values) => {
      console.log(values)
      mutation.mutate(values)
    },
  })

  useEffect(() => {
    if (!router.query.contactReason) return

    const timeout = setTimeout(() => {
      lenis?.scrollTo(contactFormRef.current, {
        duration: 1,
        lock: true,
      })
    }, 1)

    return () => clearTimeout(timeout)
  }, [router.query.contactReason, lenis])

  return (
    <DefaultLayout
      seo={{
        title: "JUST DESIGN FX",
        description: "Learn about our design services, team members, clients and awards.",
      }}
    >
      <section className={cx(s.intro, "flex flex-col items-center")}>
        <h1>
          <span>WE WOULD</span>
          <span>
            <span className={s.love}>
              LOVE <span className={s.black}>LOVE</span>
              <span className={s.green}>LOVE</span>
            </span>
            <br />
            TO HEAR
          </span>
          <span className={s.italic}>from you.</span>
        </h1>

        <div className={cx(s.imgC, s.blob)}>
          <Img src={blob} className={s.contactBlob} alt="Water Blob" />
        </div>

        <div className={cx(s.imgC, s.smile)}>
          <Img src={smile} className={s.contactSmile} alt="Smiley" />
        </div>
      </section>

      <section className={s.contactForm} ref={contactFormRef}>
        <div className={s.imgC}>
          <Img src={dropALine} className={s.dropALine} alt="Drop A Line" />
        </div>

        <form className="flex flex-col w-full h-full" onSubmit={formik.handleSubmit}>
          <div className={s.rowX}>
            <p className={s.text}>
              HELLO,
              <br /> MY NAME IS
            </p>
            <div className={s.inputC}>
              <input
                id="name"
                name="name"
                onChange={formik?.handleChange}
                placeholder="NAME/COMPANY"
                type="text"
                value={formik?.values.name}
              />
            </div>
          </div>

          <div className={cx(s.rowY, "flex flex-col")}>
            <p className={s.text}>
              I&apos;M EXCITED TO <br /> CONTACT YOUR <br /> STUDIO ABOUT A
            </p>
            <div className={cx(s.buttons, "flex flex-col tablet:flex-row items-center gap-5")}>
              <div
                onClick={() => formik.setFieldValue("contactReason", ContactReason.newProject)}
                className={cx(s.btn, "flex items-center justify-center cursor-pointer", {
                  [s.active]: formik.values.contactReason === ContactReason.newProject,
                })}
              >
                <span>NEW PROJECT</span>
              </div>
              <div
                onClick={() => formik.setFieldValue("contactReason", ContactReason.mediaInquiry)}
                className={cx(s.btn, "flex items-center justify-center cursor-pointer", {
                  [s.active]: formik.values.contactReason === ContactReason.mediaInquiry,
                })}
              >
                <span>MEDIA INQUIRY</span>
              </div>
            </div>
          </div>

          <div className={s.rowX}>
            <p className={s.text}>
              PLEASE <br /> REACH ME AT
            </p>
            <div className={s.inputC}>
              <input
                id="email"
                name="email"
                onChange={formik?.handleChange}
                placeholder="YOUR EMAIL ADDRESS"
                type="email"
                value={formik?.values.email}
              />
            </div>
          </div>

          <div className={s.rowX}>
            <p className={s.text}>
              I&apos;M
              <br /> REACHING OUT
              <br /> ABOUT ...
            </p>
          </div>

          <div className={s.rowX}>
            <div className={cx(s.inputC, s.textarea)}>
              <textarea
                id="message"
                name="message"
                onChange={formik?.handleChange}
                placeholder="YOUR MESSAGE"
                value={formik?.values.message}
              />
            </div>
          </div>

          <div
            className={cx(s.submitC, "flex flex-col tablet:flex-row items-center gap-5", {
              [s.checked]: privacyAccepted,
            })}
          >
            <div className={cx(s.acceptC, "cursor-pointer")} onClick={togglePrivacy}>
              <div className={s.imgC}>
                <Img className={s.accept} src={accept} alt="Accept Sticker" />
              </div>
            </div>

            <p className={cx(s.privacyText, "cursor-pointer")}>
              <span onClick={togglePrivacy}> I&apos;ve read and accepted the </span>
              <br />
              <Link className={s.link} external="true" href="/privacy-policy">
                Privacy Policy
              </Link>
              <span onClick={togglePrivacy}> standards of this website.</span>
            </p>

            <button
              className={cx(s.submitBtn, "hidden tablet:flex items-center justify-center ml-auto cursor-pointer")}
              disabled={!privacyAccepted}
              type="submit"
            >
              <span>SEND</span>
            </button>

            <button
              className={cx(s.submitBtnMobile, "flex tablet:hidden items-center gap-7")}
              disabled={!privacyAccepted}
              type="submit"
            >
              <span>SEND</span>
              <div className={s.iconC}>
                <IconArrow fill="var(--black)" rotate={45} />
              </div>
            </button>
          </div>
        </form>
      </section>
    </DefaultLayout>
  )
}

export default Contact
