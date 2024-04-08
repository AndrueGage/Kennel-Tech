// loops and renders dogs
export default function DogContainer({ dogData }) {
  return (
    <>
      <div className="flex sm:flex-row flex-col gap-5 justify-start flex-wrap items-center">
        <div className="flex flex-col gap-10">
          <h2 className="text-3xl font-bold">My Dogs</h2>
          <div className="flex flex-col gap-5 justify-between items-center w-[600px]">
            
              {dogData && dogData.map((dog) => (
                <button key={dog.id + dog.name} className="rounded-xl p-3 pr-5 bg-neutral-200 flex justify-start gap-7 items-center w-full">
                  <img alt="dog" src={dog.image} className="max-w-[233px] aspect-video object-cover rounded-lg" />
                  <span className="text-4xl font-bold text-black">{dog.name}</span>
                </button>
              ))}
              <button className="rounded-xl p-3 pr-5 bg-neutral-200 flex justify-start gap-7 items-center w-full">
                  <span className="text-4xl font-bold text-black">Add a new dog</span>
                </button>
          </div>
        </div>
      </div>
    </>
  )
}