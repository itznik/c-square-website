import Image from 'next/image';
import Link from 'next/link';

// Define the types for the component's props for better code quality
type TeamMemberCardProps = {
  imageUrl: string;
  name: string;
  role: string;
  linkedinUrl: string;
};

export default function TeamMemberCard({ imageUrl, name, role, linkedinUrl }: TeamMemberCardProps) {
  return (
    <div className="text-center bg-gray-50 p-6 rounded-lg shadow-md transition-transform transform hover:-translate-y-2">
      <Image
        src={imageUrl}
        alt={`Photo of ${name}`}
        width={128}
        height={128}
        className="rounded-full mx-auto mb-4 border-4 border-white shadow-lg"
      />
      <h3 className="text-xl font-bold text-gray-900">{name}</h3>
      <p className="text-gray-500 mb-4">{role}</p>
      <Link href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
        View LinkedIn
      </Link>
    </div>
  );
}
