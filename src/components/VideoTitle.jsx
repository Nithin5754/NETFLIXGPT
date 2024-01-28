


const VideoTitle = ({original_title,overview,id}) => {

  return (
    <div className="pt-28 pl-12">
      <h1 className="text-6xl font-bold mb-4">{original_title}</h1>
      <p>{overview}</p>

    </div>
  )
}
export default VideoTitle