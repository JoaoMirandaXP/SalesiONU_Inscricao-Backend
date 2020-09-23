//importação de móduloas 
const nodemailer = require('nodemailer');

// const corpo_1 = require('../emails/corpo_email.html')
const {Email,EmailImprensa} = require('../emails/corpo_email');
const {getKeys} = require('../emails/keys')


module.exports ={
    enviarEmail(request,comite){   
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: "imprensaonu2020@gmail.com",
                pass: "FMdmg^cKq=DVWfex"
            },
            tls: { rejectUnauthorized: true}
        });

        if(request.body.delegacao.startsWith("Redator")){
            console.log("Cadastro redator")
            const keys = getKeys(request,comite)
            console.log(keys)
            const corpo_imprensa = EmailImprensa(request,comite,keys)
            
            const mailOptions = {
                from: "imprensaonu2020@gmail.com",
                //  to: 'destinatario@yahoo.com, 'destinatario2@yahoo.com, 'destinatario3@yahoo.com',
                to: `${request.body.email}`,
                subject: "Sua inscrição para a SalesiONU foi confirmada!!",
                html: corpo_imprensa,
                attachments:[{
                    filename:"Manual de Uso Wordpress.pdf",
                    path:__dirname + "/../files/Manual de uso Wordpress.pdf"
                }]
            };

            transporter.sendMail(mailOptions,(err,info) =>{
                if(err){
                    console.log(err);
                } else {
                    console.log('Email enviado com sucesso ' + info.response);
                }

            })

        }
        else{
            const corpo = Email(request,comite)

            const mailOptions = {
                from: "imprensaonu2020@gmail.com",
                //  to: 'destinatario@yahoo.com, 'destinatario2@yahoo.com, 'destinatario3@yahoo.com',
                to: `${request.body.email}`,
                subject: "Sua inscrição para a SalesiONU foi confirmada!!",
                html: corpo
            };

            transporter.sendMail(mailOptions,(err,info) =>{
                if(err){
                    console.log(err);
                } else {
                    console.log('Email enviado com sucesso ' + info.response);
                }

            })}
        
    }
}
