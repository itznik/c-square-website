import Image from 'next/image';
import Link from 'next/link';

type TeamMemberCardProps = {
  imageUrl: string;
  name: string;
  role: string;
  linkedinUrl: string;
};

export default function TeamMemberCard({ imageUrl, name, role, linkedinUrl }: TeamMemberCardProps) {
  return (
    <div className="text-center bg-white p-6 rounded-lg shadow-md transition-transform transform hover:-translate-y-2 border border-gray-200">
      <Image
        src={imageUrl}
        alt={`Photo of ${name}`}
        width={128}
        height={128}
        className="rounded-full mx-auto mb-4 border-4 border-white shadow-lg"
      />
      <h3 className="text-2xl font-bold text-brand-green">{name}</h3>
      <p className="text-gray-500 mb-4">{role}</p>
      <Link 
        href={linkedinUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="font-semibold text-text-dark hover:text-brand-green transition-colors"
      >
        View Profile &rarr;
      </Link>
    </div>
  );
}
