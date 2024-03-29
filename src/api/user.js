

const API_URL = "https://carrental-v3-backend.herokuapp.com"


export const login = async (auth) => { 
    const res = await fetch(`${API_URL}/login`, {
        method: "post",
        body: JSON.stringify(auth),
        headers: {
            "Content-Type": "application/json"
        }
    })   
    const data = await res.json();
    if(!res.ok) throw new Error(data.message)
    return data; 
}


export const getUser = async () => {
    const token = localStorage.getItem("token")
    const res = await fetch(`${API_URL}/user`, {
        headers: {
            "Authorization" : `Bearer ${token}`
        }
    });
    const data = await res.json();
    if(!res.ok) throw new Error(data.message)
    return data; 
} 