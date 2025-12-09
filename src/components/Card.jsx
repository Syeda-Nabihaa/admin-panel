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
