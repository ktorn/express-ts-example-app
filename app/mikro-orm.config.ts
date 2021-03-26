import { Options } from '@mikro-orm/core';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { SqlHighlighter } from '@mikro-orm/sql-highlighter'
import { Author, Book, BookTag, Publisher, BaseEntity } from './entities';

const options: Options = {
  metadataProvider: TsMorphMetadataProvider,
  type: 'postgresql',
  clientUrl: 'postgres://postgres:postgres@localhost:5432/mikro-orm-express-ts',
  entities: [Author, Book, BookTag, Publisher, BaseEntity],
  highlighter: new SqlHighlighter(),
  debug: true,
};

export default options;
