const Audio = ({ src, className }) => {

  return (
    <div>
      <audio className={className}>
        <source src={src} />
      </audio>
    </div>
  );
};

export default Audio;