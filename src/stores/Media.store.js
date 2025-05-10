import { create } from 'zustand'

const useMediaStore                         = create((set) => ({
  isDesktop                                 : true,
  handleSetDesktop                          : (breakpoint = 767) => set({ isDesktop: window.matchMedia(`(min-width: ${ breakpoint }px)`).matches })
}))

export default useMediaStore