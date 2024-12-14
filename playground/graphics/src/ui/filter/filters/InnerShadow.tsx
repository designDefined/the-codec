export const InnerShadow = () => {
  return (
    <filter
      id="InnerShadow"
      x="-20%"
      y="-20%"
      width="140%"
      height="140%"
      filterUnits="objectBoundingBox"
      primitiveUnits="userSpaceOnUse"
      colorInterpolationFilters="linearRGB"
    >
      <feFlood floodColor="#000000" floodOpacity="1" result="flood" />
      <feComposite in="flood" in2="SourceAlpha" operator="out" result="composite1" />
      <feOffset dx="4" dy="4" in="composite1" result="offset" />
      <feGaussianBlur stdDeviation="4 4" in="offset" edgeMode="none" result="blur" />
      <feComposite in="blur" in2="SourceAlpha" operator="in" result="composite2" />
      <feMerge result="merge">
        <feMergeNode in="SourceGraphic" />
        <feMergeNode in="composite2" />
      </feMerge>
    </filter>
  );
};
