export class Tag {
    static readonly Angular : Tag = new Tag("Angular");
    static readonly Python : Tag = new Tag("Python");
    static readonly NodeJS : Tag = new Tag("NodeJS");
    static readonly Java : Tag = new Tag("Java")
    static readonly InProgress : Tag = new Tag("InProgress");
    static readonly Done : Tag = new Tag("Done")
    constructor(private readonly key: string){}
    toString () {
        return this.key;
    }
}