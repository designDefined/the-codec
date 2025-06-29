export const Grayscale = () => {
  return (
    <filter
      id="Grayscale"
      x="10%"
      y="0%"
      // width="140%"
      // height="140%"
      filterUnits="objectBoundingBox"
      primitiveUnits="userSpaceOnUse"
    >
      <feColorMatrix type="saturate" values="0" in="SourceGraphic" result="colormatrix" />
    </filter>
  );
};
