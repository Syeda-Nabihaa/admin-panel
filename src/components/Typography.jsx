export function Heading({title}){
 return (
    <div>
        <p className="text-2xl font-bold ">{title}</p>
    </div>
 )
}

export function SubText ({text}){
    return (
         <p className="text-sm text-gray-600 mt-1">
         {text}
        </p>
    )
}