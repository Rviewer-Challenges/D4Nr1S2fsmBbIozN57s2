import { User } from "@models/user.model";
import { Website } from "@models/website.model";
import { Feed } from "../models/feed.model";

export interface IResponseFeed {
  ok: boolean;
  feeds: Feed[];
  feed: Feed;
  msg?: string;
};

export interface IResponseWebsite {
  ok: boolean,
  websites: Website[];
}

export interface IResponseLogin {
  ok: boolean,
  token: string,
  user: User,
};

export interface IResponseUser {
  ok: boolean,
  msg: string;
}
