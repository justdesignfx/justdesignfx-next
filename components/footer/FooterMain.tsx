import { FormEvent, useRef, useState } from "react"

import s from "assets/scss/FooterMain.module.scss"

import { Link } from "@/components/utility/link"

const FooterMain = () => {
  // const windowSize = useWindowSize()
  // const sContext = React.useContext(SmoothContext)
  const subscribeFormRef = useRef<HTMLFormElement>(null)

  const [email, setEmail] = useState<string | null>(null)
  const [radioChecked, setRadioChecked] = useState(false)
  const [errMessage, setErrMessage] = useState<string | null>(null)

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

  // const subscribe = async () => {
  //   if (!email) {
  //     console.log(`Required input email!`)
  //     return
  //   }

  //   try {
  //     // 👇️ const data: CreateUserResponse
  //     const { data } = await api.post<any>(
  //       "/home/subscribe.php",
  //       { email },
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //           Accept: "application/json",
  //         },
  //       }
  //     )

  //     return data
  //   } catch (error) {
  //     if (axios.isAxiosError(error)) {
  //       console.log("error message: ", error.message)
  //       // 👇️ error: AxiosError<any, any>
  //       return error.message
  //     } else {
  //       console.log("unexpected error: ", error)
  //       return "An unexpected error occurred"
  //     }
  //   }
  // }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    if (!email) {
      return
    }

    // subscribe().then((res: { message: string; success: boolean }) => {
    //   if (res.success) {
    //     // modalStore.setContent(subscribeSuccessModalContent)
    //     // modalStore.toggle()
    //     resetForm()
    //   } else {
    //     setErrMessage(res.message)
    //     console.log("A server side error occured!")
    //   }
    // })
  }

  const resetForm = () => {
    if (subscribeFormRef.current) subscribeFormRef.current.reset()
    setEmail(null)
    setRadioChecked(false)
    setErrMessage(null)
  }

  return (
    <div className={s.revealWrapper} data-reveal>
      <div className={s.overlay} data-overlay></div>
      <footer className={s.footerMain}>
        <div className={s.subscribe}>
          <form className={s.formWrapper} ref={subscribeFormRef} onSubmit={(e) => handleSubmit(e)}>
            <div className={s.inputGroup}>
              <h6 className={s.inputLabel}>
                SUBSCRIBE TO
                <br /> OUR EMAIL
              </h6>
              <input
                className={s.input}
                name="email"
                type="email"
                placeholder="YOUR EMAIL ADDRESS"
                required
                onChange={(e) => {
                  setEmail(e.currentTarget.value)
                }}
              />
              {errMessage && (
                <div className={s.subscribeError}>
                  <p className={s.errText}>{errMessage}</p>
                </div>
              )}
            </div>
            <div className={s.privacyCheck}>
              <>
                <div
                  className={s.radioWrapper}
                  onClick={() => {
                    setRadioChecked((prev) => !prev)
                  }}
                >
                  <div className={s.customRadio}>
                    <div
                      className={s.inner}
                      style={{
                        transition: "0.2s opacity ease",
                        opacity: radioChecked ? "1" : "0",
                      }}
                    ></div>
                  </div>
                  <p className={s.radioText}>
                    Join our design community to be a part of the future…! <br /> By subscribing, you consent to receive
                    emails from us.
                  </p>
                </div>
                <button
                  className={s.sendBtn}
                  type="submit"
                  style={{
                    transition: "0.2s opacity ease",
                    opacity: radioChecked ? "1" : "0.2",
                    pointerEvents: radioChecked ? "auto" : "none",
                  }}
                >
                  SEND
                </button>
              </>
            </div>
          </form>
          {/* <ScrollToTop onClick={sContext.scrollToTop} className={s.scrollToTop} /> */}
        </div>

        <div className={s.contact}>
          <div className={s.col}>
            <h5 className={s.sayHi}>SAY HI ! 👋</h5>
            <p className={s.text}>
              Start a conversation about new business opportunities,
              <br /> media inquiries or learn about our career options.
            </p>
            <div className={s.buttons}>
              <Link className={s.btn} to="/contact" state={{ contactReason: "NEW_PROJECT" }}>
                <p className={s.btnText}>NEW PROJECT</p>
              </Link>
              <Link className={s.btn} to="/contact" state={{ contactReason: "MEDIA_INQUIRY" }}>
                <p className={s.btnText}>MEDIA INQUIRY</p>
              </Link>
              <a className={s.btn} href="mailto:career@justdesignfx.com">
                <p className={s.btnText}>CAREER</p>
              </a>
            </div>
          </div>

          <div className={s.col}>
            <h5 className={s.addressTitle}>ISTANBUL HQ</h5>
            <p className={s.textSm}>
              JUSTWork Office Campus Balkan Cad. <br />
              No:62, 34770, ISTANBUL / TURKEY
            </p>
            <div className={s.buttons}>
              <a
                className={s.btnGetDirection}
                target="_blank"
                rel="noreferrer"
                href="https://www.google.com/maps/place/JUSTWork/@41.0234497,29.1265974,15z/data=!4m5!3m4!1s0x0:0x5af99b7e2004cb13!8m2!3d41.0234497!4d29.1265974"
              >
                <p className={s.btnText}>GET DIRECTION</p>
                <div className={s.arrowW}>{/* <IconArrowSquare></IconArrowSquare> */}</div>
              </a>
            </div>
          </div>

          <div className={s.col}>
            <h5 className={s.addressTitle}>NEW YORK HQ</h5>
            <p className={s.textSm}>
              44 W 47th St #22, New York, <br />
              NY 10036 USA
            </p>
            <div className={s.buttons}>
              <a
                className={s.btnGetDirection}
                target="_blank"
                rel="noreferrer"
                href="https://www.google.com/maps/place/44+W+47th+St+%2322,+New+York,+NY+10036,+USA/@40.757209,-73.9807804,17z/data=!3m1!4b1!4m5!3m4!1s0x89c258ffa808b8d3:0x4aa58f11c530b90a!8m2!3d40.757209!4d-73.9807804"
              >
                <p className={s.btnText}>GET DIRECTION</p>
                <div className={s.arrowW}>{/* <IconArrowSquare></IconArrowSquare> */}</div>
              </a>
            </div>
          </div>
        </div>

        {/* <Copyright /> */}
      </footer>
    </div>
  )
}

export default FooterMain
