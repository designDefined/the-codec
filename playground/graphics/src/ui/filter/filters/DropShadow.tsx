export const DropShadow = () => {
  return (
    <filter
      id="DropShadow"
      x="-20%"
      y="-20%"
      width="140%"
      height="200%"
      filterUnits="objectBoundingBox"
      primitiveUnits="userSpaceOnUse"
      colorInterpolationFilters="linearRGB"
    >
      <feOffset dx="5" dy="5" in="SourceAlpha" result="offset" />
      <feGaussianBlur stdDeviation="5 5" in="offset" result="blur" />
      <feFlood floodColor="#172841" floodOpacity="0.7" result="flood" />
      <feComposite in="flood" in2="blur" operator="in" result="composite" />
      <feMerge result="merge">
        <feMergeNode in="composite" result="mergeNode" />
        <feMergeNode in="SourceGraphic" result="mergeNode1" />
      </feMerge>
    </filter>
  );
};
//
