export default function Card() {
    return (
        <div className="border rounded-xl w-full max-w-[480px] p-3 bg-[#d9d9d9]">
            <p className="text-xl font-bold text-black">Services Price Guide</p>
            <hr className="bg-neutral-500 h-1 w-full rounded-xl" />
            <div className="pt-5 flex flex-col justify-between gap-20">
                <p className="border rounded-lg px-3 py-5 text-white bg-[#9e9e9e] font-bold text-xl">Boarding: $50 Per Night</p>
                <p className="border rounded-lg px-3 py-5 text-white bg-[#9e9e9e] font-bold text-xl">Daycare: $35 Full Day</p>
                <p className="border rounded-lg px-3 py-5 text-white bg-[#9e9e9e] font-bold text-xl">Training: $125 Per Session</p>
            </div>
        </div>
    )
}
