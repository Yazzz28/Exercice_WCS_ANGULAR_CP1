import { Comment } from './comment.model';

export type Video = {
    id: number;
    title: string;
    url: string;
    imgSrc: string;
    channelName: string;
    likes: number;
    comments: Comment[];
    nbViews: string;
    uploadDate: string;
    categories: string[];
};
