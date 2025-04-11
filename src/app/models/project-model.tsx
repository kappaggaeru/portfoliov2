
export interface Project {
    title: string;
    skills: string [];
    year: string;
    images: Image [];
    paragraphs: string [];
    website?: string;
}

export interface Image {
    src: string;
    alt: string;
}