export class Project {
    constructor(
        public title: string,
        public date: string,
        public description: string,
        public aspectsList: string[],
        public bannerImg: string,
        public liveVersionLink: string
    ) { }
}