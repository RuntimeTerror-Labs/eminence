import Image from 'next/image';

const LoadingAnimation = ({ width, height, size }) => {
  return (
    <div
      className={`flex justify-center items-center bg-primary-black ${
        width ? width : 'w-screen'
      } ${height ? height : 'h-screen'}`}
    >
      <Image
        src="/loading.svg"
        alt=""
        width={size ? size : 200}
        height={size ? size : 200}
      />
    </div>
  );
};
export default LoadingAnimation;