import s from "./contact.module.scss"

import cx from "clsx"
import * as yup from "yup"
import { useFormik } from "formik"
import { useState } from "react"

import { IconArrow } from "@/components/icons/icon-arrow"
import { Img } from "@/components/utility/img"
import { Link } from "@/components/utility/link"
import { DefaultLayout } from "@/layouts/default"

import blob from "@/public/img/contact-blob.png"
import smile from "@/public/img/contact-smile.png"
import dropALine from "@/public/img/drop-a-line.svg"
import accept from "@/public/img/privacy-accept.svg"

const Contact = () => {
  const [privacyAccepted, setPrivacyAccepted] = useState(false)
  const togglePrivacy = () => setPrivacyAccepted((prev) => !prev)

  const formik = useFormik({
    initialValues: { name: "", contactReason: "", email: "", message: "" },
    validationSchema: yup.object().shape({
      name: yup.string().required("This field is required."),
      contactReason: yup.string().required("This field is required."),
      email: yup.string().email("It must be a valid email.").required("This field is required."),
      message: yup.string().required("This field is required."),
    }),
    onSubmit: (values) => {
      console.log(values)
      // mutation.mutate(values)
    },
  })

  return (
    <DefaultLayout
      seo={{
        title: "JUST DESIGN FX",
        description:
          "We design iconic brands with future impact. JUST DESIGN FX is a future-focused brand and digital design agency with offices located in Istanbul and New York.",
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

      <section className={s.contactForm}>
        <div className={s.imgC}>
          <Img src={dropALine} className={s.dropALine} alt="Drop A Line" />
        </div>

        <form className={s.form} onSubmit={formik.handleSubmit}>
          <div className={s.rowX}>
            <h2 className={s.formText}>
              HELLO,
              <br /> MY NAME IS
            </h2>
            <div className={s.inputWrapper}>
              <label htmlFor="name" className={cx(s.label, s.companyLabel)}>
                YOUR NAME / COMPANY
              </label>
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

          <div className={s.rowY}>
            <h2 className={s.formText}>
              I&apos;M EXCITED TO <br /> CONTACT YOUR <br /> STUDIO ABOUT A
            </h2>
            <div className={cx(s.buttons, "flex items-center gap-5")}>
              <div
                onClick={() => formik.setFieldValue("contactReason", "NEW_PROJECT")}
                className={cx(s.reasonBtn, "cursor-pointer", {
                  [s.active]: formik.values.contactReason === "NEW_PROJECT",
                })}
              >
                <p className={s.btnText}>NEW PROJECT</p>
              </div>
              <div
                onClick={() => formik.setFieldValue("contactReason", "MEDIA_INQUIRY")}
                className={cx(s.reasonBtn, "cursor-pointer", {
                  [s.active]: formik.values.contactReason === "MEDIA_INQUIRY",
                })}
              >
                <p className={s.btnText}>MEDIA INQUIRY</p>
              </div>
            </div>
          </div>

          <div className={s.rowX}>
            <h2 className={s.formText}>
              PLEASE <br /> REACH ME AT
            </h2>
            <div className={s.inputWrapper}>
              <label htmlFor="email" className={cx(s.label, s.emailLabel)}>
                YOUR EMAIL ADDRESS
              </label>
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
            <h2 className={s.formText}>
              I&apos;M
              <br /> REACHING OUT
              <br /> ABOUT ...
            </h2>
          </div>

          <div className={s.rowX}>
            <div className={cx(s.inputWrapper, s.textarea)}>
              {/* {!message && (
                <label
                  style={{
                    textAlign: window.innerWidth > breakpoints.mobile ? "left" : "center",
                  }}
                  className={cx(s.label, s.messageLabel)}
                >
                  YOUR MESSAGE
                </label>
              )} */}
              <textarea
                id="message"
                name="message"
                onChange={formik?.handleChange}
                placeholder="MESSAGE"
                value={formik?.values.message}
              />
            </div>
          </div>

          <div className={cx(s.actions, "flex items-center gap-5", { [s.checked]: privacyAccepted })}>
            <div className={cx(s.btnC, "cursor-pointer")} onClick={togglePrivacy}>
              <div className={s.imgC}>
                <Img className={s.accept} src={accept} alt="Accept Visual" />
              </div>
            </div>

            <p className={cx(s.privacyText, "cursor-pointer")}>
              <span onClick={togglePrivacy}> I&apos;ve read and accepted the </span>
              <br />
              <Link className={s.link} external to="/privacy-policy">
                Privacy Policy
              </Link>
              <span onClick={togglePrivacy}> standards of this website.</span>
            </p>

            <button className={cx(s.submitBtn, "cursor-pointer")} type="submit">
              <span>SEND</span>
            </button>

            <button className={s.submitBtnMobile} type="submit">
              <p className={s.btnText}>SEND</p>
              <div className={s.iconRightArrow}>
                <IconArrow rotate={-45} fill="var(--white)" />
              </div>
            </button>
          </div>
        </form>
      </section>
    </DefaultLayout>
  )
}

export default Contact
