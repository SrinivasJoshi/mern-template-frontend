const API_BASE_URL = 'http://localhost:5000/auth';

export async function registerUser(username, password) {
    const response = await fetch(`${API_BASE_URL}/register`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });
    return response.json();
}

export async function loginUser(username, password) {
    const response = await fetch(`${API_BASE_URL}/login`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });
    return response.json();
}

export async function logoutUser() {
    const response = await fetch(`${API_BASE_URL}/logout`, {
        method: 'GET',
        credentials: 'include',
    });
    return response.json();
}

export async function fetchProfile() {
    const response = await fetch(`${API_BASE_URL}/profile`, {
        method: 'GET',
        credentials: 'include',
    });
    return response.json();
} 