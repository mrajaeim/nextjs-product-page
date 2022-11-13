import create from "zustand";

const useColorPicker = create<{ color: string, changeColor: (color: string) => void, colors: string[], prevColor: string }>((set) => ({
    prevColor: "rgba(88,232,199, 1)",
    color: "rgba(88,232,199, 1)",
    colors: ["rgb(88,232,199, 1)", "rgb(255,238,114, 1)", "rgb(102,85,175, 1)", "rgb(222,222,222, 1)"],
    changeColor: (color: string) => set((state: any) => ({...state, color: color, prevColor: state.color})),
}))

export default useColorPicker;