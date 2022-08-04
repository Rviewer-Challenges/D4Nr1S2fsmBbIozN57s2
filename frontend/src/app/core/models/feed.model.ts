import { Website } from "./website.model";

export class Feed {
  constructor(
    public _id: string,
    public writer: string,
    public title: string,
    public pubDate: Date,
    public content: string,
    public link: string,
    public image: string,
    public website: Website,
    public inUser?: boolean,
  ) {};
};
