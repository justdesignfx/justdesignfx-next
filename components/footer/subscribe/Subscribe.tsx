import s from "./subscribe.module.scss"

import cx from "clsx"
import { useFormik } from "formik"
import * as yup from "yup"

import { ScrollToTop } from "@/components/scroll-to-top"
import { Img } from "@/components/utility/img"

import { useSubscribe } from "@/api/mutations/subscribe"
import { useModalStore } from "@/lib/store/modal"

import subscribeGif from "@/public/img/subscribe.gif"

const initialValues = { email: "", privacyChecked: false }

const validationSchema = yup.object().shape({
  email: yup.string().email("It must be a valid email.").required("This field is required."),
  privacyChecked: yup.boolean(),
})

const Subscribe = () => {
  const { setContent, setIsOpen, closeModal } = useModalStore()
  const { data: result, mutate, reset } = useSubscribe()

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: ({ email }) => {
      mutate(
        { email },
        {
          onSuccess(data) {
            if (!data.success) return

            setContent(
              <div className={cx(s.subscribeSuccess, "flex flex-col items-center")}>
                <div className={s.imgC}>
                  <Img src={subscribeGif} alt="Hand With Mail" />
                </div>
                <p className={s.title}>Welcome aboard!</p>
                <p className={s.text}>We&apos;ll keep in touch with news from the future...</p>
                <button
                  className={cx("flex items-center justify-center cursor-pointer")}
                  onClick={handleClose}
                  type="button"
                >
                  <span>DONE</span>
                </button>
              </div>
            )
            setIsOpen(true)
          },
        }
      )
      console.log({ email })
    },
  })

  function handleClose() {
    closeModal()
    reset()
    formik.resetForm()
  }

  return (
    <div className={cx(s.subscribe, "flex flex-col tablet:flex-row items-center justify-between")}>
      <form className={cx("flex flex-col items-stretch tablet:items-start")} onSubmit={formik.handleSubmit}>
        <div className={cx(s.field, "flex flex-col items-center tablet:items-start justify-start")}>
          <label htmlFor="email">
            SUBSCRIBE TO
            <br className={cx("block tablet:hidden")} /> OUR EMAIL
          </label>
          <input
            id="email"
            name="email"
            onChange={formik?.handleChange}
            placeholder="YOUR EMAIL ADDRESS"
            type="email"
            value={formik?.values.email}
          />
          {!result?.success && (
            <div className={s.errorMessage}>
              <small>{result?.message}</small>
            </div>
          )}
        </div>
        <div className={cx(s.privacyCheck, "flex flex-col items-start justify-start cursor-pointer")}>
          <div
            className={cx(s.checkboxC, "flex items-start justify-start gap-4")}
            onClick={() => formik.setFieldValue("privacyChecked", !formik.values.privacyChecked)}
          >
            <div className={s.checkbox}>
              <div className={cx(s.inner, { [s.checked]: formik.values.privacyChecked })}></div>
            </div>
            <p>
              Join our design community to be a part of the future…! <br className={cx("hidden tablet:block")} /> By
              subscribing, you consent to receive emails from us.
            </p>
          </div>
        </div>
        <button className={s.submitBtn} disabled={!formik.values.privacyChecked} type="submit">
          SEND
        </button>
      </form>

      <ScrollToTop />
    </div>
  )
}

export default Subscribe
