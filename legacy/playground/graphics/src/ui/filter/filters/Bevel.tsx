export const Bevel = () => {
  return (
    <filter id="Bevel" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feGaussianBlur in="SourceAlpha" stdDeviation="2" result="BLUR"></feGaussianBlur>
      <feSpecularLighting in="BLUR" surfaceScale="1" specularExponent="100" result="SPECULAR" lightingColor="#white">
        <fePointLight x="0" y="0" z="1000" result="b0587a61-1944-40fe-8f50-69db05e49632"></fePointLight>
      </feSpecularLighting>
      <feComposite in="SPECULAR" in2="SourceAlpha" operator="in" result="COMPOSITE"></feComposite>
      <feMerge result="d2ae7fb0-7484-4d0d-902b-b5b27aff306e">
        <feMergeNode in="SourceGraphic"></feMergeNode>
        <feMergeNode in="COMPOSITE"></feMergeNode>
      </feMerge>
    </filter>
  );
};
