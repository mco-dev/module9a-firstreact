function ContactCard() {
  const name = "Linda King";
  const bio = "Content creater and Marketing/Advertisement Coordinator.";
  const profileImage = "https://i.fbcd.co/products/original/750-f1be954a9abff5b0695edae06ad82720943ddba6322b2d6c1644bda75a431cd6.jpg";
  
  return (
    <div style={{ maxWidth: '400px', margin: '20px auto', padding: '24px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', backgroundColor: 'white', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
      <img src={profileImage} alt={`${name}'s profile`} style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', border: '4x solid #e1e5e9', marginBottom: '16px' }} />
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#00F'}}>{name}</h1>
      <p style={{ fontSize: '16px', color: '#555' }}>{bio}{name}</p>
    </div>
  );
}

export default ContactCard;