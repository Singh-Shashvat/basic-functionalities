interface IDoctorCard {
    profileurl : string,
    name : string,
    speciality : string,
    description : string
}

interface props {
    doctor:IDoctorCard,
    
}



const DoctorsCard = ({doctor} : props) => {
    const {profileurl , description,name,speciality} =  doctor
  return (
    <>
        <div className="border-amber-950  flex flex-col h-200 w-50 overflow-hidden m-3">
            <div className="h-50 w-full relative flex ">
                <img src={profileurl} alt={`doctor ${name} `} className="w-full h-full object-cover rounded-2xl absolute" />
                <div className="absolute right-0 top-2 px-1 py-2">* 4.5</div>
            </div>
            <div className="p-3 w-full">
                <h3 className="text-xs">{speciality}</h3>
                <h1>{name}</h1>
                <p className="text-xs">{description}</p>
            </div>
        </div>
    </>
  )
}

export default DoctorsCard