import create from "zustand";

const useColorPicker = create<{ color: string, changeColor: (color: string) => void, colors: string[], prevColor: string }>((set) => ({
    prevColor: "rgba(88,232,199, 1)",
    color: "rgba(88,232,199, 1)",
    colors: ["rgba(88,232,199, 1)", "rgba(255,238,114, 1)", "rgba(102,85,175, 1)", "rgba(222,222,222, 1)"],
    changeColor: (color: string) => set((state: any) => ({...state, color: color, prevColor: state.color})),
}))

export default useColorPicker;