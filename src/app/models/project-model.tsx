import { ListChild } from "./responsability-model";

export interface Project {
    title: string;
    skills: ListChild [];
    year: string;
    images: ListChild [];
    paragraphs: ListChild [];
    website: string;
}