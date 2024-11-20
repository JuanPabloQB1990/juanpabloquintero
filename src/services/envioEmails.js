export const envioCorreos = async(datos) => {
    console.log(import.meta.env.VITE_API_URL);
    
    // Simulación de envío de correos con fetch API
    const res = await fetch(import.meta.env.VITE_API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos),
    })
    const data = await res.json()
    return data
    
    
}