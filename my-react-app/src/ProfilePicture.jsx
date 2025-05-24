

function ProfilePicture() {
  const imageUrl = './src/assets/profile.jpg';

  //const handleClick = () => console.log("OUCH");

  const handleClick = (e) => e.target.style.display = "none";

  return (<img className="card-image" src={imageUrl} onClick={ (e) => handleClick(e)}></img>);
}

export default ProfilePicture