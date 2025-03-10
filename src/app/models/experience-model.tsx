import { ListChild } from "./responsability-model";

export interface Experience {
    company: string;
    subtitle: string;
    time: string;
    responsabilities: ListChild [];
    position: string;
    location: string;
    industry: string;
    website?: string;
}