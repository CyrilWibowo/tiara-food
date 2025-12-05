const Banner3D = () => {
  const images = [
    'images/dragon_1.jpg',
    'images/dragon_2.jpg',
    'images/dragon_3.jpg',
    'images/dragon_4.jpg',
    'images/dragon_5.jpg',
    'images/dragon_6.jpg',
    'images/dragon_7.jpg',
    'images/dragon_8.jpg',
    'images/dragon_9.jpg',
    'images/dragon_10.jpg'
  ];

  return (
    <div className="banner">
      <div className="slider" style={{ '--quantity': images.length }}>
        {images.map((img, index) => (
          <div
            key={index}
            className="item"
            style={{ '--position': index + 1 }}
          >
            <img src={img} alt={`Dragon ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner3D;
