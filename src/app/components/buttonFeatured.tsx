import Link from "next/link";
export default function ButtonFeatured(props: any) {
  return (
    <Link href={props.url}>
      <div className="bg-white mt-5 text-black lg:text-2xl drop-shadow-pink w-full rounded-full h-[68px] flex items-center justify-center animate-pulse-fast">
        {props.children}
      </div>
    </Link>
  );
}
