import { IBoxMsg } from "./types";

const name = import.meta.env.VITE_BOX_NAME ?? "Aldlss";
const email = import.meta.env.VITE_BOX_EMAIL ?? "ayaldlss@gmail.com";

export const box: IBoxMsg = {
    name,
    email,
};
