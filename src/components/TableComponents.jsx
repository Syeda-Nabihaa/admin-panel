import React from "react";

export function Th({ text }) {
  return (
    
    <th className="px-8 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
      {" "}
      {text}
    </th>
  );
}
export function Td({ text }) {
  return (
    <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{text}</td>
  );
}

export function Tr({ children, id }) {
  return (
    <tr
      key={id}
      className="hover:bg-linear-to-r hover:from-gray-900/50 hover:to-transparent transition-all duration-200 group"
    >
      {children}
    </tr>
  );
}
