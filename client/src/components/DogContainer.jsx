// loops and renders dogs
export default function DogContainer({ dogData }) {
  return (
    <>
      <div class="flex sm:flex-row flex-col gap-5 justify-start flex-wrap items-center">
        <div className="flex flex-col gap-10">
          <h2 class="text-3xl font-bold">My Dogs</h2>
          <div className="flex flex-col gap-5 justify-between items-center">
            <button class="rounded-xl p-3 bg-neutral-200 flex justify-start gap-10 items-center w-full">
              {dogData.map((dog) => (
                <div key={dog.id} className="custom-card">
                  <img alt="dog" src={dog.image} className="max-w-[180px] w-full max-h-[110px] h-full object-cover rounded-lg" />
                  <span class="text-4xl font-bold text-black">{dog.name}</span>
                </div>
              ))}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

{/* {dogData.map((dog) => (
                 <Card
                 hoverable
                 style={{
                   width: 240
                 }}
                 cover={<img alt="example" style={{ width: 220 }} src={dog.image} />}
               >
                 <Meta  description={dog.name} />
               </Card>
            ))} */}