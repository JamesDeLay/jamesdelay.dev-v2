import Image from 'next/image';

export default function IconTailwind() {
  return (
    <div className="flex rounded" style={{ background: `white` }}>
      <Image
        className=""
        src="/assets/imgs/tailwind.svg"
        height={26.5}
        width={26}
      />
    </div>
  );
}
