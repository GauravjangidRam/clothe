import { useState } from 'react';
import Product from './Product';
import { productcard } from '../data/productdata';

function SearchableVideoList( Product ) {
  const [searchText, setSearchText] = useState('');
  const foundVideos = filterVideos(Product, searchText);
  return (
    <>
      <SearchInput
        value={searchText}
        onChange={newText => setSearchText(newText)} />
      <VideoList
        videos={foundVideos}
        emptyHeading={`No matches for “${searchText}”`} />
    </>
  );
}