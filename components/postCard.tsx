type PostCardProps = {
  title: string;
  time: string;
  imgUrl: string;
};

const PostCard = ({ title, time, imgUrl }: PostCardProps) => {
  return (
    <div className="flex flex-col w-full rounded-2xl shadow-md overflow-hidden">
      <div className=" aspect-video overflow-hidden flex justify-center items-center">
        <img src={imgUrl} />
      </div>

      <div className="p-4 h-22">
        <p className="text-2xl truncate">{title}</p>
        <p className="text-sm text-gray-500 mt-1">{time}</p>
      </div>
    </div>
  );
};

export default PostCard;
