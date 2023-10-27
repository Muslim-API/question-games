
const WaterfallEffect = () => {
  // You can define the content for each item here, or you can pass it as props.
  const items = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
    // Add more items as needed
  ];

  return (
    <div className="waterfall-container">
      {items.map((item, index) => (
        <div key={index} className="waterfall-item">
          {item}
        </div>
      ))}
    </div>
  );
}

export default WaterfallEffect;
