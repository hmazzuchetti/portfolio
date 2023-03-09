export class ProfessionalExperience{
    constructor (
        public company: string,
        public position: string,
        public startDate: string,
        public endDate: string,
        public description: string,
        public technologies: string[],
        public aftermath?: string,
        public id?: number
    ) {

    }
}