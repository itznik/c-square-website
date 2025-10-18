type ServiceBlockProps = {
  title: string;
  description: string;
};

export default function ServiceBlock({ title, description }: ServiceBlockProps) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <h3 className="text-2xl font-bold text-brand-green mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
