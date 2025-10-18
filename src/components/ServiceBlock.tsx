// Define the types for the component's props
type ServiceBlockProps = {
  title: string;
  description: string;
};

export default function ServiceBlock({ title, description }: ServiceBlockProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
      <h3 className="text-2xl font-semibold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600">
        {description}
      </p>
    </div>
  );
}
