//Usuários e senhas dos redatores no WP
const red_fox_acnur = ["redator_1","nj%@iWx7fV#qYiLngI0dO)XE"] 
const red_fox_csnu = ["redator_2","vXSPf!Nnu#grxmK*RXE5(^#n"]
const red_fox_oms = ["redator_3","%nz1bY$tsFH1hvdwsoHD6%jO"]
const red_gulf_acnur = ["redator_1","lUZuUmZn^D)3nn0gSJu^#sD9"] 
const red_gulf_csnu = ["redator_2","Xrpl$sTz@&m9b5$8ca(NSEJv"]
const red_gulf_oms = ["redator_3","a(Im^eoi*(1FGKH!ImjMg^yE"]
const red_liberation_acnur = ["redator_1","qQmkGuTqtCutjLq4Mjr*zz2v"] 
const red_liberation_csnu = ["redator_2","^bx^4goe^2CcA0^&1iQ%y8kh"]
const red_liberation_oms = ["redator_3","4rQ8VRO9rDFl)HBiAilQz88M"]

module.exports={
    getKeys(request,comite){
        const delegacao = request.body.delegacao

        console.log("+_+_+_+_+_+_+_+_")
        console.log(comite)
        console.log("+_+_+_+_+_+_+_+_")
        console.log(delegacao)
        console.log("+_+_+_+_+_+_+_+_")
        console.log(comite=="acnur")
        if(comite=="acnur"){
            console.log(delegacao=="Redator - Libération")
            if(delegacao== "Redator - Libération"){
                return red_liberation_acnur
            }
            else if(delegacao=="Redator - Gulf News"){
                return red_gulf_acnur 
            }
            else if(delegacao=="Redator - Fox News"){
                return red_fox_acnur
            }
        }
        else if(comite=="csnu"){
            if(delegacao== "Redator - Libération"){
                return red_liberation_csnu
            }
            else if(delegacao=="Redator - Gulf News"){
                return red_gulf_csnu 
            }
            else if(delegacao=="Redator - Fox News"){
                return red_fox_csnu
            }
        }        
        else if(comite=="oms"){
            if(delegacao== "Redator - Libération"){
                return red_liberation_oms
            }
            else if(delegacao=="Redator - Gulf News"){
                return red_gulf_oms 
            }
            else if(delegacao=="Redator - Fox News"){
                return red_fox_oms
            }
        }
        else{
            return ["não é","da imprensa"]
        }   
        
    }
}