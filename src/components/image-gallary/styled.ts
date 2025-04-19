import styled from "styled-components";

export const ImageGalleryWrapper = styled.div`
  min-width: 100%;
  margin-top: -25px;
  margin-bottom: 100px;

  .image-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);

    grid-gap: 2px;
  }
  .image-container .image {
    position: relative;
    padding-bottom: 100%;
  }
  .image-container .image img {
    height: 100%;
    width: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    left: 0;
    position: absolute;
    top: 0;
  }
`;
