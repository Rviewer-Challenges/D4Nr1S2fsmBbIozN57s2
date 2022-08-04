import { IMessage } from "@interfaces/message.interface";

const pathRelative: string = '/assets/svg';

export const messages: IMessage[] = [
  {
    message: 'You want to see content here, you have to follow at least one website',
    imagePath: `${pathRelative}/follow.svg`,
  },
  {
   message: 'Here you can find your news saved',
   imagePath: `${pathRelative}/saved.svg`,
  },
  {
    message: 'Sorry, we could not find any results',
    imagePath: `${pathRelative}/no-data.svg`
  }
];
