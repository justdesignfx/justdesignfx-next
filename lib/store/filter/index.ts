import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"

interface State {
  service: string
  clientType: string
  setService: (val: string) => void
  setClientType: (val: string) => void
  clearFilters: () => void
}

const useStore = create<State>()(
  persist(
    (set) => ({
      service: "",
      clientType: "",
      setService: (val) => set({ service: val }),
      setClientType: (val) => set({ clientType: val }),
      clearFilters: () => set({ clientType: "", service: "" }),
    }),
    {
      name: "filters",
      storage: createJSONStorage(() => localStorage),
    }
  )
)

export const useFilterStore = useStore
