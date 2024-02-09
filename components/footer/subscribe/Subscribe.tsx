import s from "./subscribe.module.scss"

import cx from "clsx"
import { useFormik } from "formik"
import { useState } from "react"
import * as yup from "yup"
import { ScrollToTop } from "../scroll-to-top"
import { useSubscribe } from "@/api/mutations/subscribe"

const Subscribe = () => {
  const [radioChecked, setRadioChecked] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const mutation = useSubscribe()

  const formik = useFormik({
    initialValues: { email: "" },
    validationSchema: yup.object().shape({
      email: yup.string().email("It must be a valid email.").required("This field is required."),
    }),
    onSubmit: (values) => {
      console.log(values)
      mutation.mutate(values)
    },
  })

  const toggleCheckbox = () => setRadioChecked((prev) => !prev)

  //   const resetForm = () => {
  //     if (subscribeFormRef.current) subscribeFormRef.current.reset()
  //     setEmail(null)
  //     setRadioChecked(false)
  //     setErrorMessage(null)
  //   }

  // const modalStore = useModalStore()

  // const subscribeSuccessModalContent = (
  //   <div className={s.subscribeSuccess}>
  //     <img className={s.welcomeAboard} src={subscribeGif} alt="Hand With Mail" />
  //     <h5 className={s.title}>Welcome aboard!</h5>
  //     <p className={s.text}>We'll keep in touch with news from the future...</p>
  //     <button className={s.doneButton} type="button" onClick={() => modalStore.toggle()}>
  //       DONE
  //     </button>
  //   </div>
  // )

  return (
    <div className={cx(s.subscribe, "flex items-center justify-between")}>
      <form className="flex flex-col items-start" onSubmit={formik.handleSubmit}>
        <div className={cx(s.field, "flex flex-col items-start justify-start")}>
          <label htmlFor="email">
            SUBSCRIBE TO
            <br /> OUR EMAIL
          </label>
          <input
            id="email"
            name="email"
            onChange={formik?.handleChange}
            placeholder="YOUR EMAIL ADDRESS"
            type="email"
            value={formik?.values.email}
          />
          {errorMessage && (
            <div className={s.errorMessage}>
              <small>{errorMessage}</small>
            </div>
          )}
        </div>
        <div className={cx(s.privacyCheck, "flex flex-col items-start justify-start cursor-pointer")}>
          <div className={cx(s.checkboxC, "flex items-start justify-start gap-4")} onClick={toggleCheckbox}>
            <div className={s.checkbox}>
              <div className={cx(s.inner, { [s.checked]: radioChecked })}></div>
            </div>
            <p className={s.radioText}>
              Join our design community to be a part of the future…! <br /> By subscribing, you consent to receive
              emails from us.
            </p>
          </div>
        </div>
        <button className={s.submitBtn} disabled={!radioChecked} type="submit">
          SEND
        </button>
      </form>

      <ScrollToTop />
    </div>
  )
}

export default Subscribe
