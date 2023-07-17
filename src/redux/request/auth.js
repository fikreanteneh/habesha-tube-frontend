
export async function signinWithEmail(payload) {
    const response = await fetch(`${import.meta.env.VITE_APP_BASE}/auth/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
        })
    if (response.status != "200"){
        const error = await response.json();
        throw new Error(error.error)
    }
    return await response.json()
}


export async function signUpWithEmail(payload) {
    const response = await fetch(`${import.meta.env.VITE_APP_BASE}/auth/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    if (response.status != "200"){
        const error = await response.json();
        throw new Error(error.error)
    }
    return await response.json()
}