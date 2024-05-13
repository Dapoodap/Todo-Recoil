import { atom } from "recoil";

export const todoState = atom({
  key: "todoState",
  default: [
    {
      task: "Make Kanban Web",
      date: "12th Jun",
      desc: "Description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, minima?",
      link1: "https://recoiljs.org/docs/introduction/getting-started",
      link2:
        "https://us06web.zoom.us/j/83684441813?pwd=Mg0CRubByb0HwZFo50IaZkE4jSeRt4.1",
      status: "todo",
    },
  ],
});
