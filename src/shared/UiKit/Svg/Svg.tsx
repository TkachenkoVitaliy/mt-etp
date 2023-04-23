type SvgProps = {
  fill: string
  stroke?: string
  width: string
  height: string
  iconSource: string
  iconId: string
}

export function Svg({
  fill,
  stroke = fill,
  width,
  height,
  iconSource,
  iconId,
}: SvgProps) {
  return (
    <svg
      fill={fill}
      stroke={stroke}
      width={width}
      height={height}
    >
      <use href={`${iconSource}#${iconId}`} />
    </svg>
  )
}
