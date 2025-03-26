import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const teamMembers = [
  {
    name: "Krrish Raj",
    role: "Frontend Lead",
    image: "/krrish.jpg",
    socials: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    name: "Krishna Purwar",
    role: "Dev Lead",
    image: "/krishna.jpg",
    socials: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    name: "Sangyan Dayal",
    role: "Prompt Master",
    image: "/sangyan.jpg",
    socials: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    name: "Ansh Phutela",
    role: "Technical Lead",
    image: "/ansh.jpg",
    socials: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
];

export default function OurTeam() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">OUR PERFECT TEAM</h1>
      <div className="grid grid-cols-2 gap-8 md:gap-12">
        {teamMembers.map((member) => (
          <div
            key={member.name}
            className="flex flex-col items-center text-center relative group "
          >
            <div className="w-48 h-48 rounded-full overflow-hidden mb-4 relative">
              <Image
                src={member.image}
                alt={member.name}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <h2 className="text-xl font-semibold">{member.name}</h2>
            <p className="text-gray-600 mb-4">{member.role}</p>
            <div className="flex space-x-4">
              <a
                href={member.socials.facebook}
                className="text-gray-700 hover:text-blue-600"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href={member.socials.twitter}
                className="text-gray-700 hover:text-blue-400"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href={member.socials.instagram}
                className="text-gray-700 hover:text-pink-600"
              >
                <FaInstagram size={24} />
              </a>
            </div>
            <div className="absolute inset-0 bg-slate-500 opacity-0 group-hover:opacity-15 transition-opacity duration-300 -z-10"></div>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <button
          className="px-8 py-3 rounded-lg
 bg-black text-white font-semibold hover:bg-gray-800 transition-colors"
        >
          LEARN MORE
        </button>
      </div>
    </div>
  );
}