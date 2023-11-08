

export const MovieImage = ({imageUrl,imageSize}) => {
    const url = `https://image.tmdb.org/t/p/${imageSize}${imageUrl}`;

  return (
    <>
    <img src={url}></img>
    </>
  )
}
