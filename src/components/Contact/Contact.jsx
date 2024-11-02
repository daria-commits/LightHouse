
import { MdOutlineMail } from "react-icons/md";
import './Contact.css'; 
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation('global');
  return(
  <div id='contact'>
        
  <section className="contact-area" >
    <div className='ramka'>
  <h1 className='text-center p-4 heading'>{t('translation.contactUs')}</h1>
     <div className="container">
        <div className="row">
           <div className="col-xl-7 col-lg-8">
              
              <div className="contact-form form-style-four mt-15">  
                 <form action="#">
                    <div className="row">
                       <div className="col-md-6">
                          <div className="form-input mt-15">
                             <label>{t('translation.name')}</label>
                             <div className="input-items default">
                                <i className="lni lni-user"></i>
                                <input type="text" placeholder={t('translation.placeholderName')} />
                             </div>
                          </div>
                     
                       </div>
                       <div className="col-md-6">
                          <div className="form-input mt-15">
                             <label>{t('translation.email')}</label>
                             <div className="input-items default">
                                <i className="lni lni-envelope"></i>
                                <input type="text" placeholder={t('translation.placeholderEmail')} />
                             </div>
                          </div>
                   
                       </div>
                       <div className="col-md-6">
                          <div className="form-input mt-15">
                             <label>{t('translation.phoneNumber')}</label>
                             <div className="input-items default">
                                <i className="lni lni-phone"></i>
                                <input type="text" placeholder={t('translation.placeholderPhone')} />
                             </div>
                          </div>
                  
                       </div>
                       <div className="col-md-6">
                          <div className="form-input mt-15">
                             <label>{t('translation.subject')}</label>
                             <div className="input-items default">
                                <i className="lni lni-bubble"></i>
                                <input type="text" placeholder={t('translation.placeholderSubject')} />
                             </div>
                          </div>
              
                       </div>
                       <div className="col-md-12">
                          <div className="form-input mt-15">
                             <label>{t('translation.message')}</label>
                             <div className="input-items default">
                                <i className="lni lni-pencil-alt"></i>
                                <textarea
                                   placeholder={t('translation.placeholderMessage')}
                                   ></textarea>
                             </div>
                          </div>
                    
                       </div>
                       <div className="col-md-12">
                          <div className="single-form mt-15">
                             <div className="input-form rounded-buttons">
                                <button
                                   className="btn primary-btn rounded-full"
                                   type="submit"
                                   >
                                {t('translation.sendMessage')}
                                </button>
                             </div>
                          </div>
                      
                       </div>
                    </div>
                  
                 </form>
              </div>
            
           </div>
           <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8 offset-xl-1">
           <div className="info-content">
           <MdOutlineMail className="enveloppe"/>
                             <p className="text">puhvelikanov@gmail.com</p>
                          </div>
           </div>
             
           </div>
        </div>
   
     </div>
    
  </section>

  </div>

  );
}

