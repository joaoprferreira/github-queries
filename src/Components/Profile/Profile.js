import "./ProfileStyles.scss";

export function Profile({ data, className = "profile-component" }) {
  const { name, avatar_url, company } = data;

  const placehoder = (event) => {
    event.target.src =
      "https://pbs.twimg.com/profile_images/1414990564408262661/r6YemvF9_400x400.jpg";
  };

  return (
    <div className={className}>
      <img
        className="imagem-card"
        src={avatar_url}
        alt="Foto de perfil do usuário"
        onError={placehoder}
      />
      <h3 className="name-card">{name}</h3>
      <p className="company-container">{company}</p>
    </div>
  );
}
