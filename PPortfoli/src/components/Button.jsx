const Button = ({label, iconUrl,  backgroundColor, borderColor, textColor, link}) => {
  return (
    <div className="my-3">
        <a href={link} className="">
        <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montsterrat text-lg leading-none rounded-full
        ${
            backgroundColor? `${backgroundColor} ${textColor} ${borderColor} hover:bg-dark-yellow hover:text-black` : "bg-dark-yellow border-[#fdb82c] text-black hover:text-[#fdb82c] hover:bg-[#2d2d2d]"
        }`}>
        <span className="text-xl">{label}</span> {iconUrl && <img src={iconUrl}/>}
    </button>
    </a> 
    </div>
   
  )
}

export default Button