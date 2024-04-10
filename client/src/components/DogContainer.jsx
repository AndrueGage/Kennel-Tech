import { Link } from "react-router-dom"


export default function DogContainer({ dogData }) {
  
  return (
    <>
      <div className="flex sm:flex-row flex-col gap-5 justify-start flex-wrap items-center ">
        <div className="flex flex-col gap-10">
          <h2 className="text-3xl font-bold">My Dogs</h2>
          <div className="flex flex-col gap-5 justify-between items-center md:w-[600px]">
            
              {dogData && dogData.map((dog) => (
                <Link to={`/dogInfo/${dog._id}`} key={dog._id + dog.name} className="rounded-xl p-3 pr-5 bg-[#C1D7AE] flex justify-start gap-7 items-center w-full">
                  <img alt="dog" src={dog.image} className="md:max-w-[233px] max-w-[150px] aspect-video object-cover rounded-lg" />
                  <span className="md:text-4xl text-lg font-bold text-black">{dog.name}</span>
                </Link>
              ))}
              <Link to='/dogInfo' className="rounded-xl p-3 pr-5 bg-[#C1D7AE] flex justify-start gap-7 items-center w-full">
                  <span className="text-4xl font-bold text-black">Add a new dog</span>
              </Link>
          </div>
        </div>
      </div>
    </>
  )
}