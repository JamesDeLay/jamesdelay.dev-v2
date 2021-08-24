import Image from 'next/image';

export default function IconAnsible() {
  return (
    <div className="flex rounded" style={{ background: `white` }}>
      <Image
        className=""
        src="/assets/imgs/ansible.png"
        height={26.5}
        width={26}
      />
    </div>
  );
}
