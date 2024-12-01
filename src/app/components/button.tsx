import Link from "next/link";

export default function Button(props: any) {
  return (
    <Link href={props.url}>
      <div className="mt-5 w-full h-[68px] rounded-full bg-gradient-vertical p-[2px]">
        <div className="flex items-center justify-center h-full w-full lg:text-2xl bg-primary-600 rounded-full">
          {props.children}
        </div>
      </div>
    </Link>
  );
}
