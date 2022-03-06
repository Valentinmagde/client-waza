export interface Courses {
    id: number;
    chapterNumber: number,
    chapterTitle: string,
    content: string,
    level: string,
    photo: string,
    relevant: string,
    overview: Overview,
    sommaries: Array<Sommary>,
    slug: string,
    state: string,
    created_at: string,
    updated_at: string
}

interface Overview {
    id: number;
    course_id: number,
    description: string,
    requirement: string,
    toLearn: string,
    created_at: string,
    updated_at: string
}

interface Sommary {
    id: number;
    course_id: number,
    title: string,
    hour: string,
    subtitles: Array<Subtitle>,
    created_at: string,
    updated_at: string
}

interface Subtitle {
    id: number;
    course_id: number,
    title: string,
    hour: string,
    created_at: string,
    updated_at: string
}