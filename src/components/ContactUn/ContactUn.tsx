import React from 'react';
import './Contact.css';
import { useForm } from 'react-hook-form';
import { DevTool } from "@hookform/devtools";

type FormValues = {
  username: string;
  email: string;
  website: string;
  social:{
    instagram:string;
    facebook:string;
  }
};

export default function ContactUn() {
  const form = useForm<FormValues>({
  defaultValues:{
    username: "Votre prénom",
    email: "Votre email",
  website: "",
  social:{
    instagram:"",
    facebook:"",
  }
  }
    
  }); 
  const { register, control, handleSubmit,formState } = form;

  const onSubmit = (data: FormValues) => {
    console.log("Le formulaire a été bien soumis", data);
  };
const {errors} = formState; 
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="input-group">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" {...register('username', {
          required:{
            value: true,
            message: "Le champ est requis",
          }
        })} />
      </div>
      <p className={errors.username?.message ? "errorOn": "errorOff"}>{errors.username?.message}</p>

      <div className="input-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...register('email',{
          pattern:{
            value: /^\S+@\S+\.\S+$/,
            message: "Format invalide",
          },
          
        })} />
      </div>

      <p className={errors.email?.message ? "errorOn": "errorOff"}>{errors.email?.message}</p>

      <div className="input-group">
        <label htmlFor="website">WebSite</label>
        <input type="text" id="website" {...register('website',{
          required:{
            value: true,
            message: "Le champ est requis",
          }
        })} />
      </div>
      <p className={errors.website?.message ? "errorOn": "errorOff"}>{errors.website?.message}</p>

      <div className="input-group">
      <label htmlFor="instagram">Instagram</label>
      <input  type='text' id='instagram' {...register('social.instagram')}/>
      </div>

      <div className="input-group">
      <label htmlFor="facebook">Facebook</label>
      <input  type='text' id='facebook' {...register('social.facebook')}/>
      </div>

      <div className="btns">
        <button type="submit">Envoyer</button>
      </div>

      <DevTool control={control} />
    </form>
  );
}
