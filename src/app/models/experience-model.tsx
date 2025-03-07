import { Responsability } from "./responsability-model";

export class Experience {
    company: string;
    subtitle: string;
    time: string;
    responsabilities: Responsability [];
    position: string;
    location: string;
    industry: string;
    website?: string;

    constructor(
        company: string,
        subtitle: string,
        time: string,
        responsabilities: Responsability [],
        position: string,
        location: string,
        industry: string,
        website: string,

    ) {
        this.company = company;
        this.subtitle = subtitle;
        this.time = time;
        this.responsabilities = responsabilities,
        this.position = position,
        this.location = location,
        this.industry = industry,
        this.website = website
    }
}