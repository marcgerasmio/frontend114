import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
    const navigate = useNavigate();
    const logout = () => {
    alert('logout successfully');
    localStorage.clear();
    navigate('/');
    }

    useEffect(() => {
    
        logout();
      }, []); 
    
      return null;
}

export default Logout;