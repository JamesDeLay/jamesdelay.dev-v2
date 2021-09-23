import Image from 'next/image';

export default function IconGolang() {
  return (
    <div className="flex rounded" style={{ background: `#01AFDD` }}>
      <Image
        className=""
        src="/assets/imgs/golang.png"
        height={26.5}
        width={26}
        // layout="fill"
        // objectFit="contain"
      />
    </div>
  );
}
