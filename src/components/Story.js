import "./style.css";

const Story = ({ id, name, content, image, created }) => {
  return (
    <div>
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <h4>content:</h4>
      <p>{content}</p>
      <p>created at: {created}</p>
    </div>
  );
};

export default Story;
