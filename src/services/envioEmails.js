export const envioCorreos = async(datos) => {
    
    // Simulación de envío de correos con fetch API
    const res = await fetch('https://admin-productos-backend.onrender.com/api/emails/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos),
    })
    const data = await res.json()
    return data
    
    
}