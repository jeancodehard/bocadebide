import Link from "next/link";

export default function SocialIcon(props: any) {
  return (
    <div>
      <Link href={props.url}>
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 drop-shadow-pink bg-primary-600 hover:bg-white flex items-center justify-center">
          <svg width="0" height="0">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop
                  offset="0%"
                  style={{ stopColor: "#E40FEB", stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#D4CAD4", stopOpacity: 1 }}
                />
              </linearGradient>
            </defs>
          </svg>
          <props.icon className="text-4xl" style={{ fill: "url(#gradient)" }} />
        </div>
      </Link>
      <p className="text-center mt-2">{props.name}</p>
    </div>
  );
}
