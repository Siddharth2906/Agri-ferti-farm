import React from 'react';
import farmlogo from '../images/content3image/farmerlogo.png'
import { useNavigate } from 'react-router-dom';



function ErrorPage() {
  const navigate = useNavigate();
    const handleBackHome = () => {
        navigate('/');
    };

    return (
        <div style={styles.container}>
            <div style={styles.imageContainer}>
                {/* Replace this with a farming-themed image */}
                <img 
                    src={farmlogo} 
                    alt="Confused Farmer" 
                    style={styles.image} 
                />
            </div>
            <h1 style={styles.title}>404 Error!</h1>
            <h1 style={styles.title}>Oops! Page Not Found.</h1>
            <p style={styles.message}>
                It looks like you took a wrong turn in the fields. We couldn't find the page you were looking for.
              
            </p>
            
            <button onClick={handleBackHome} style={styles.button}>
                Back to Home
            </button>
        </div>
    );
}

// const styles = {
//     container: {
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//         height: '100vh',
//         textAlign: 'center',
//         backgroundColor: '#f9f9f9',
//     },
//     imageContainer: {
//         marginBottom: '20px',
//     },
//     image: {
//         width: '300px',
//         height: 'auto',
//     },
//     title: {
//         fontSize: '2em',
//         fontWeight: 'bold',
//         color: '#333',
//     },
//     message: {
//         fontSize: '1.2em',
//         color: '#666',
//         marginBottom: '20px',
//     },
//     button: {
//         padding: '10px 20px',
//         fontSize: '1em',
//         color: '#fff',
//         backgroundColor: '#28a745',
//         border: 'none',
//         borderRadius: '5px',
//         cursor: 'pointer',
//     },
// };
const styles = {
  container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '80vh',
      textAlign: 'center',
      backgroundColor: '#f9f9f9',
      padding: '0 20px',
  },
  imageContainer: {
      marginBottom: '20px',
  },
  image: {
      width: '100%', // Adjusts based on the container width for responsiveness
      maxWidth: '300px',
      height: 'auto',
  },
  title: {
      fontSize: '1.8em', // Smaller default size for flexibility
      fontWeight: 'bold',
      color: '#333',
      marginBottom: '10px',
  },
  message: {
      fontSize: '1.1em', // Adjust for mobile friendliness
      color: '#666',
      marginBottom: '20px',
      padding: '0 15px',
  },
  button: {
      padding: '8px 16px', // Smaller padding for responsiveness
      fontSize: '1em',
      color: '#fff',
      backgroundColor: '#28a745',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
  },
  // Media query for larger screens (tablets and up)
  '@media (min-width: 768px)': {
      title: {
          fontSize: '2em',
      },
      message: {
          fontSize: '1.2em',
      },
      button: {
          padding: '10px 20px',
          fontSize: '1em',
      },
  },
  // Media query for smaller screens (mobile)
  '@media (max-width: 480px)': {
      title: {
          fontSize: '1.5em',
      },
      message: {
          fontSize: '1em',
      },
      button: {
          padding: '8px 16px',
          fontSize: '0.9em',
      },
  },
};




export default ErrorPage;
