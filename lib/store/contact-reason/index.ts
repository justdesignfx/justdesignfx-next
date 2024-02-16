import { ContactReason } from "@/types"
import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"

interface State {
  contactReason: ContactReason | null
  setContactReason: (val: ContactReason) => void
  clear: () => void
}

const useStore = create<State>()(
  persist(
    (set) => ({
      contactReason: null,
      setContactReason: (val) => set({ contactReason: val }),
      clear: () => set({ contactReason: null }),
    }),
    {
      name: "contact-reason",
      storage: createJSONStorage(() => localStorage),
    }
  )
)

export const useContactReasonStore = useStore
