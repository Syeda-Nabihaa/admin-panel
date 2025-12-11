export function Heading({ title }) {
  return (
    <div>
      <p className="text-2xl font-bold ">{title}</p>
    </div>
  );
}

export function SubText({ text }) {
  return <p className="text-sm text-gray-600 mt-1">{text}</p>;
}

export function IconText({ text, icon }) {
  return (
    <div className="flex items-center gap-2 text-gray-900">
      {icon}

      {text}
    </div>
  );
}

export function IconHeading({ text, icon }) {
  return (
    <div className="flex items-center gap-2 text-gray-900 text-xl font-bold mb-2">
      {icon}

      {text}
    </div>
  );
}
