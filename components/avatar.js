export default function Avatar({ name, src, size=12, margin=4}) {
  return (
    <div className="flex flex-col items-center">
      <img src={src} className={`w-${size} h-${size} md:h-${size * 2} md:w-${size*2} rounded-full mr-${margin} bg-cover`} alt={name} style={{backgroundPosition: `center center`}} />
      <div className="text-xl font-bold">{name}</div>
    </div>
  )
}
