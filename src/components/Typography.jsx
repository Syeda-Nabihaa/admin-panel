export function Heading({ title }) {
  return (
    <div>
      <p className="text-2xl font-bold  text-white">{title}</p>
    </div>
  );
}

export function SubText({ text }) {
  return <p className="text-sm text-gray-300 mt-1">{text}</p>;
}

export function IconText({ text, icon }) {
  return (
    <div className="flex items-center gap-2 text-white">
      {icon}

      {text}
    </div>
  );
}

export function IconHeading({ text, icon }) {
  return (
    <div className="flex items-center gap-2 text-white text-xl font-bold mb-2">
      {icon}

      {text}
    </div>
  );
}
