import create from "zustand";

const usePageCarousel = create<{ xRatio: number, getVariants: any, page: number, next: () => void, prev: () => void, setPage: (page: number) => void }>((set, get) => ({
    page: 1,
    xRatio: -1,
    next: () => set((state: any) => ({...state, page: state.page + 1, xRatio: -1})),
    prev: () => set((state: any) => ({...state, page: state.page - 1, xRatio: 1})),
    setPage: (page: number) => set((state: any) => ({...state, page: page})),
    getVariants: () => (
        {
            hidden: {opacity: 0, x: get().xRatio * 200, y: 0},
            enter: {opacity: 1, x: 0, y: 0},
            exit: {opacity: 0, x: (get().xRatio * -1) * 300, y: 0},
        }
    ),
}))

export default usePageCarousel;