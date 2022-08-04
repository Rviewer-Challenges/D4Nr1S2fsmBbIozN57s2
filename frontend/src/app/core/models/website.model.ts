export class Website {
  constructor(
    public name: string,
    public image: string,
    public description: string,
    public link: string,
    public linkFeed: string,
    public _id: string,
    public inUser?: boolean,
  ) {};
};
