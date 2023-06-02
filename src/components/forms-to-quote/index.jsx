export default function FormsToQuote() {
  return (
    <div className="p-10 bg-gray-200 flex justify-center">
      <div className="bg-white px-10 py-10 rounded-3xl border-2 border-gray-100">
        <div className="mt-8">
          <div>
            <label className="text-lg font-medium">Name</label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              placeholder="Name"
            />
          </div>
          <div>
            <label className="text-lg font-medium">Phone Number</label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              placeholder="5514152487"
            />
          </div>
          <div>
            <label className="text-lg font-medium">E-mail</label>
            <input
              type="text"
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              placeholder=" example@hotmail.com"
            />
          </div>
          <div>
            <label className="text-lg font-medium">Message</label>
            <input
              type="text"
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              placeholder="Message..."
            />
          </div>
          <div className="mt-8 flex flex-col gap-y-4">
            <button className=" active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 bg-sky-500 text-white text-lg font-bold rounded-xl ">
              SEND
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
