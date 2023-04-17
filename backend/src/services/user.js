const userRepo = require("../repositories/user");
const nodemailer=require('nodemailer')
const Mailgen=require('mailgen')
exports.createUser = async (payload,path) => {
   const response=await userRepo.create(payload,path);
   if(response.status==='create'){
    let config={
      service:"gmail",
      auth:{
        user:"fahadahad567@gmail.com",
        pass:"vxxbccrnurzthwvu"
      }
    }
    let transporter=nodemailer.createTransport(config)
    let MailGenerator=new Mailgen({
      theme:'default',
      product:{
        name:"SCC NEDUET",
        link:'https://mailgen.js/'
      }
    })
    let res={
      body:{
        name:payload.fullName||"Participent",
        intro: ['Congrats!! You are now a member',`This is your password ${response.pass}`],
        outro:"Excited to work with you"
      }
    }
    let mail=MailGenerator.generate(res)
    let message={
      from:"fahadahad567@gmail.com",
      to:payload.email,
      subject:"Confirmation message",
      html:mail
    }
    transporter.sendMail(message).then(()=>{
      response["email"]="sended"

    }).catch(error=>{
      console.log(error)
    })
    return response
  }

  };
  exports.createParticipents = async (payload) => {
    const response=await userRepo.createParticipants(payload);
    if(response.status==='create'){
      let config={
        service:"gmail",
        auth:{
          user:"fahadahad567@gmail.com",
          pass:"vxxbccrnurzthwvu"
        }
      }
      let transporter=nodemailer.createTransport(config)
      let MailGenerator=new Mailgen({
        theme:'default',
        product:{
          name:"SCC NEDUET",
          link:'https://mailgen.js/'
        }
      })
      let res={
        body:{
          name:payload.fullName||"Participent",
          intro: ['Your registeration is successfull'],
          outro:"See you at the event!"
        }
      }
      let mail=MailGenerator.generate(res)
      let message={
        from:"fahadahad567@gmail.com",
        to:payload.email,
        subject:"Confirmation message",
        html:mail
      }
      transporter.sendMail(message).then(()=>{
        response["email"]="sended"
        
      }).catch(error=>{
        console.log(error)
      })
      return response
    }else{
      return response
    }
  };
  exports.updatePayment = async (payload) => {
    const createPayload = {
      user: payload.user,
      payment: true,
    };
    return await userRepo.update(createPayload);
  };