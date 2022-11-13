import create from "zustand";

const useColorPicker = create<{ color: string, changeColor: (color: string) => void }>((set) => ({
    color: "#58E8C7",
    changeColor: (color: string) => set((state: any) => ({color: color})),
}))

export default useColorPicker;