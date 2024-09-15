function ProfileCard({ title, handle, image, description }) {
  //    destructuring only take the properties needed and
  // from props object.
  console.log(title, handle);
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={image} alt="pda logo" />
        </figure>
      </div>

      {/* terminal will warn you if you dont include pda logo */}
      <div className="card-content">
        <div className="media-content">
          <p className="title is-4">{title}</p>
          <p className="subtitle is-6">{handle}</p>
           
        </div>
      <div className="content">{description}</div>
      </div>
    </div>
  );
}

export default ProfileCard;
