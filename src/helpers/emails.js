import nodemailer from 'nodemailer' 

const emailRegistro = async (datos) => {
    const transport = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: "juanpabloqb1990@gmail.com",
          pass: "llyxifqznnuiciaf"
        }
      });

      const { correo, nombre, mensaje } = datos

      // Enviar el email
      await transport.sendMail({
        from: correo,
        to: "juanpabloqb1990@gmail.com",
        subject: `mensaje enviado de ${nombre}`,
        text: 'mensaje de contacto',
        html: `<p>${mensaje}</p>

        ` 
      })
}

export default emailRegistro