import { UserEffects } from "./app.effects";
import { AlbumEffects } from "./album.effects";
import { PostEffects } from './post.effects';

export const effects: any[] = [UserEffects,AlbumEffects,PostEffects];
export * from './app.effects';
export * from './album.effects';
export * from './post.effects';
