import Image from 'next/image';

export default function IconNext() {
  return (
    <div className="flex rounded" style={{ background: `white` }}>
      <Image
        className=""
        src="/assets/imgs/next.png"
        height={26.5}
        width={26}
      />
    </div>
  );
}
