import Image from 'next/image';

export default function IconPuppeteer() {
  return (
    <div className="flex rounded" style={{ background: `white` }}>
      <Image
        className=""
        src="/assets/imgs/puppeteer-icon.png"
        height={26}
        width={26}
      />
    </div>
  );
}
