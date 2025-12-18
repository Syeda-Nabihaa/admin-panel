export function BadgeCard({ img, name, date, onClick }) {
    return (

  <div className="bg-white  rounded-xl shadow-md p-4  hover:shadow-lg transition">
    <img src={img} alt="badge" className="w-20 h-20 object-contain mx-auto" />

    <div className="flex-1 text-center">
      <p className="font-semibold text-gray-800 text-lg">{name}</p>
      <div className="flex justify-between">
        <p className="text-gray-500 text-sm ">{date}</p>
        <button className="text-blue-500 hover:underline" onClick={onClick}>
          Edit
        </button>
      </div>
    </div>
  </div>
    )
}

export function InfoCard({label , title , icon}){
  return (

  
   <div className="group p-4 bg-linear-to-r from-dark to-indigo rounded-lg  hover:border-blue-200 transition-all duration-200 hover:shadow-sm">
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-blue-50 rounded-lg">
            {icon}
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-1 flex items-center gap-1">
             {label}
            </p>
            <p className="font-medium text-white">
             {title}
            </p>
          </div>
        </div>
       
      </div>
    </div>
    )
}