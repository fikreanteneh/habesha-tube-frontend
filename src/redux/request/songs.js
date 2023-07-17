import { v4 as uuidv4 } from 'uuid';
import { getDownloadURL, ref, uploadBytes, deleteObject } from "firebase/storage";
import { storage } from "../../config/firebase";


export async function getSong() {
    const response = await fetch(`${import.meta.env.VITE_APP_BASE}/songs`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        })
    if (response.status != "200"){
        const error = await response.json();
        throw new Error(error.error)
    }
    return await response.json()
}


export async function getSongById(payload) {
    const response = await fetch(`${import.meta.env.VITE_APP_BASE}/songs/${payload}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        })
    if (response.status != "200"){
        const error = await response.json();
        throw new Error(error.error)
    }
    return await response.json()
}



export async function addSong(payload) {
    const audioPath = `song/${uuidv4()}.${payload.fileLocation.type.split("/")[1]}`
    const audioRef = ref(storage, audioPath)
    await uploadBytes(audioRef, payload.fileLocation)
    const audioUrl = await getDownloadURL(audioRef)
    payload.fileLocation = audioUrl
    const response = await fetch(`${import.meta.env.VITE_APP_BASE}/songs/addsong`, {
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


export async function editSong(payload) {
    const response = await fetch(`${import.meta.env.VITE_APP_BASE}/songs/${payload.id}`, {
        method: 'PUT',
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

export async function deleteSong(payload) {
    const response = await fetch(`${import.meta.env.VITE_APP_BASE}/songs/${payload.id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    const fileRef = ref(storage, `song/${payload.fileLocation}`)
    await deleteObject(fileRef)
    if (response.status != "200"){
        const error = await response.json();
        throw new Error(error.error)
    }
    return await response.json()
}