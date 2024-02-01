


const VideoTitle = ({original_title,overview,id}) => {

  return (
    <div className="px-32 py-64 w-full aspect-video absolute text-white bg-gradient-to-r from-black flex flex-col  p-16  ">
    <div>
    <h1 className="text-6xl font-bold mb-4">{original_title}</h1>
      <p>{overview.substring(0, 90)}</p>
    </div>
    <div className="flex gap-4">
       <button className="bg-gray-100 p-2 text-black rounded-md hover:bg-gray-500 hover:text-white border-0">Play</button>
       <button className="bg-gray-100 p-2 text-black rounded-md  hover:bg-gray-500 hover:text-white border-0">More Info</button>
    </div>


    </div>
  )
}
export default VideoTitle