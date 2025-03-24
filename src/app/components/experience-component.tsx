import { Experience } from "../models/experience-model";
import ExperienceCardComponent from "./cards/experience-card-component";

const experienceStarling: Experience = {
    company: 'Starling Bank',
    subtitle: 'Award winning digital bank',
    time: '2023 — Present',
    responsabilities: [
        'As a member of the Frontend Foundations team working on the Online Bank, I develop customer-facing features and integrate the design system to ensure a seamless and accessible user experience.',
        'Starling Bank is an award-winning, digital challenger bank disrupting the financial services industry with its transparent and customer-focused approach to banking.'
    ],
    position: 'Software Engineer',
    location: 'London, United Kingdom',
    industry: 'Banking',
    website: 'www.starlingbank.com'
}

const experienceCrowhaus: Experience = {
    company: 'Crowdhäus',
    subtitle: 'Property discovery application',
    time: '2021 — 2022',
    responsabilities: [
        'I have worked on and helped design key application features, including authentication, in-app messaging, property details, and a supporting web application.',
        'Crowdhaus was a property discovery application with 25,000+ downloads and 400+ five-star reviews, which allowed users across the United Kingdom to discover homes to buy and rent.'
    ],
    position: 'Software Engineer',
    location: 'London, United Kingdom',
    industry: 'Real State',
}

export default function ExperienceComponent() {
    return (
        <section id="experience" className="experience-container content-container">
            <h3>EXPERIENCE</h3>
            <hr className="mar-bot-3" />
            <div className="experience-cards-container">
                <ExperienceCardComponent experience={experienceStarling} />
                <ExperienceCardComponent experience={experienceCrowhaus} />
            </div>
        </section>
    );
}