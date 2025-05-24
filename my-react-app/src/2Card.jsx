
import ProfilePic from './assets/profile.jpg'

function Card() {
  return(
    <div className="card">
      <img className='card-image' src={ProfilePic} alt="profile picture" />
      <h2 className='card-title'>Uma Kallepally</h2>
      <p className='card-text'>I'm learning React and this is my first card component</p>
    </div>
  );
}

export default Card