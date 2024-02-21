import s from "./modal.module.scss"

import cx from "clsx"
import { useRef, useState } from "react"
import { useGSAP } from "@gsap/react"
import { gsap } from "@/lib/gsap"

import { IconClose } from "@/components/icons/icon-close"
import { useLenisStore } from "@/lib/store/lenis"
import { useModalStore } from "@/lib/store/modal"
import { stopPropagation } from "@/lib/utils"

const Modal = () => {
  const { isOpen, content, closeModal } = useModalStore()
  const [isOpenUi, setIsOpenUi] = useState(false)
  const lenis = useLenisStore()
  const ref = useRef(null)

  useGSAP(
    () => {
      if (isOpen) {
        lenis.setIsStopped(true)
        setIsOpenUi(true)
        gsap.to(ref.current, {
          opacity: 1,
        })
      } else {
        gsap.to(ref.current, {
          opacity: 0,
          onComplete: () => {
            lenis.setIsStopped(false)
            setIsOpenUi(false)
          },
        })
      }
    },
    {
      dependencies: [isOpen],
    }
  )

  return (
    <>
      {isOpenUi && (
        <div className={cx(s.modal, "flex items-center justify-center")} onClick={closeModal} ref={ref}>
          <div className={cx(s.iconClose, "cursor-pointer")} onClick={closeModal}>
            <IconClose fill="var(--white)" />
          </div>
          <div className={cx("flex")} onClick={stopPropagation}>
            {content}
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
