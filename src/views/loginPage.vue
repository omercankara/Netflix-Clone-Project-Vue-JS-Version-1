<template>
<div class="container-fluid position-absolute main-logo" style="z-index:99">
           <div class="row">
                        <div class="col-md-12 logo-section">   <img src="../img/logo.png" class="img-fluid logo" style="width:20%"></div>
                </div>
</div>

        <div class="container-fluid mainPanel d-flex flex-column  bg-dark  justify-content-center align-items-center ">
                <div class="row      ">
                        <div class="col-md-12  d-flex justify-content-center   loginPanel  ">
                                <div class="row  px-3 py-5 mobile-panel  " style="z-index:999 !important;">
                                <div class="col-md-12 px-5   mobile-panel ">
                                         <div class="col-md-12  ">
                                                <h1 class="text-white">Oturum Aç</h1>
                                        </div>
                                        <p id="visible" v-if="mainVisible"  :class="{'alert alert-danger':deneme}" class="alert alert-success" >{{mainAlert}}</p>
                                 <div class="col-md-12   mt-3  py-4 ">
                                                <input v-model="userData.mail" type="text" class="form-control loginInput" placeholder="E Posta Adresiniz">
                                                 <input v-model="userData.password" type="text" class="form-control mt-3 loginInput" placeholder="Parola">
                                </div>
                                                {{$store.getters._saltKey}}
                                <div class="col-md-12 d-flex py-4 " >
                                        <button @click="onSubmit" class="btn btn-danger w-100 py-3" >Oturum Aç</button>
                                </div>

                                <div class="col-md-12 d-flex    mt-1 p-0   ">
                                        <div class="col-md-2  d-flex justify-content-center align-items-center"> <input type="checkbox" name="" id="" ></div>
                                       <div class="col-md-10 "><p class="mt-3 text-white" >Beni Hatırla</p></div> 
                                </div>

                                   <div class="col-md-12 d-flex justify-content-around  align-items-center      ">
                                    <h6 class="text-white">Netflix'e katılmak ister misiniz? <span class="text-danger" @click="this.$router.push({name:'accountForm'})">Şimdi kaydolun.</span></h6>
                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        </div>
          <footerPage/>
</template>
<script>
import cryptoJs from "crypto-js"
import footerPage from "../components/footerPage.vue"

export default {
        components:{
        footerPage
},
        data(){
                return{
                        userData:{
                                mail:null,
                                password:null
                        },
                        mainAlert:null,
                        mainVisible:false,
                        deneme:false,
                        test:'alert alert-danger'
                }
        },
        methods:{
                onSubmit(){
                        const password = cryptoJs.HmacSHA1(this.userData.password,this.$store.getters._saltKey).toString()
                        console.log(password)
                        this.$appAxios.get(`/users?mail=${this.userData.mail}&password = ${password}`).then(loginResponse=>{     //JSON TYPİCODE ÖZELLİGİ İLE İSTENİLEN BİLGİYİ GETİR     
                                console.log(loginResponse)
                                if(loginResponse ?.data?.length > 0){ //data içinde bilgl varsa storu güncelle
                                         this.$store.commit("setUser",loginResponse?.data[0])
                                         this.mainAlert="Giriş Başarılı İyi Keyifler Dileriz."
                                         this.mainVisible=true
                                         this.deneme=false
                                         setTimeout(()=>{
                                                this.$router.push({name:'home'})
                                         },3000)
                                }else{
                                        this.mainAlert="Kullanıcı Adı Veya Parola Hatalı Gözüküyor"
                                        this.mainVisible=true
                                        this.deneme=true
                                        
                                }
                               
                        })

                     
                }
        }
}
</script>
<style  scoped>
        .mainPanel{
                background-image: url(../img/loginpage.jpg);
                background-size: cover;
                background-position:center;
                background-repeat: no-repeat;
                height: 100vh;
        }
        .mainPanel::before{
                background-color: black !important;
                opacity: 0.6;
                content: "";
                position: absolute;
                height: 100vh !important;
                width: 100%;
        }
        .loginPanel::before{
                background-color: black !important;
                opacity: 0.8;
                content: "";
                position: absolute;
                height: 50vh !important;
                width: 100%;
        }

        .loginInput{
                background: none;
                border:none;
                outline:none;
                background-color:rgba(168, 163, 163, 0.377);
                transition:  1s ease
        }
        .loginInput:focus{
                border-radius: 25px;
                background-color:rgba(255, 255, 255, 0.952);
                   
        }




        @media only screen and (min-width:360px) and (max-width:414px){
     .mainPanel{
               background-color: black !important;
                background-image: none !important;
                height: 100vh;
        }
        .mobile-panel {
                padding: 0vh !important;
        }

        .logo{
                width: 40% !important;
        }
      

}

        @media only screen and (min-width:640px) and (max-width:740px){
                .mainPanel{
               background-color: black !important;
                background-image: none !important;
                height: 100vh;
        }
        .mobile-panel {
                padding: 0vh !important;
        }

        .logo{
                width: 20% !important;
        }
  .main-logo{
                position: static !important;
        }
        .logo-section{
                background-color: black !important;
        }

    
        }
</style>