import React from 'react';

import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';

import { CategoriesList, InfoContainer, Cover, AuthorsList } from './BookDetails.styles';
import { BookDetailsProps } from './BookDetails.types';

export function BookDetails(props: BookDetailsProps) {
  const { volumeInfo } = props;
  return (
    <>
      <Cover style={{ backgroundImage: `url('${volumeInfo.imageLinks.thumbnail}')` }} />
      <InfoContainer>
        <Typography gutterBottom variant="h2" color="primary">
          {volumeInfo.title}
        </Typography>
        <AuthorsList>
          <Typography gutterBottom>Authors</Typography>
          {volumeInfo.authors?.map(author => (
            <Chip
              label={author}
              color="secondary"
              key={author}
              style={{ marginRight: 16, marginBottom: 16 }}
            />
          ))}
        </AuthorsList>
        <CategoriesList>
          <Typography gutterBottom>Categories</Typography>
          {volumeInfo.categories?.map(category => (
            <Chip
              color="primary"
              label={category}
              key={category}
              style={{ marginRight: 16, marginBottom: 16 }}
            />
          ))}
        </CategoriesList>
        <Typography
          component="p"
          variant="h5"
          dangerouslySetInnerHTML={{
            __html: volumeInfo.description ?? '',
          }}
        />
      </InfoContainer>
    </>
  );
}
