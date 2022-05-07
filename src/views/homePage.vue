<template>

      <div class="container-fluid">
                <div class="row " style="z-index:999 !important;">
                        <div class="col-md-12  position-absolute  px-5 py-3 "  style="z-index:999 !important;">
                                <div class="row">
                                        <div class="col-6 col-md-6  ">
                                                <img src="../img/logo.png" class="img-fluid logo" style="width:20%">
                                        </div>
                                        <div class="col-6 col-md-6    d-flex justify-content-end align-items-center">
                                                <router-link  class="btn btn-danger" :to="{name:'loginPage'}">Oturum Aç</router-link>     
                                        </div>
                                </div>
                        </div>
                </div>

                <div class="row icerik  p-0  ">
                                 <div class="col-md-12 mainPanel d-flex flex-column   justify-content-center  align-items-center ">
                                <div class="row  d-flex justify-content-center align-items-center   contentMain ">

                                        <div class="col-12 col-md-5 col-lg-6   ">
                                                 <h1 class="text-center text-white mainText ">Sınırsız film, dizi ve çok daha fazlası.</h1>
                                        </div>

                                          <div class="col-md-9 d-flex flex-column ">
                                                <h3 class="text-center text-white subText">İstediğiniz yerde izleyin. İstediğiniz zaman iptal edin.</h3>
                                                <p class="text-center text-white subtext2"> İzlemeye hazır mısınız? Üyelik oluşturmak veya üyeliğinize erişmek için e‑posta adresinizi girin.</p>
                                        </div>

                                        <div class="col-md-7 col-lg-4 px-5 py-1   d-flex justify-content-center align-items-center ">
                                               
                                               <button class="btn btn-danger w-100 h-100 p-4" @click="start">Başlayın</button>
                                                
                                        </div>
                                        <transition name="fade">
                                                              <div class="col-md-12 d-flex justify-content-center" v-if="alertPage">
                                                <div class="col-md-3 mt-3 alert alert-danger">{{error}}</div>
                                        </div>
                                        </transition>
                                  
                                </div>
                        </div>
                </div>




      </div>

      <div class="container-fluid ">
              <div class="row  py-5 tvPanel"  style="background-color:black;">

                        <div class="col-12  col-md-6 d-flex  flex-column  px-5 py-5  align-items-end tvPanelOne" >
                                        <div class="col-12 col-sm-12   col-md-12  col-lg-9  d-flex flex-column  justify-content-around align-items-center mt-5 tvPanelTwo">
                                                    <h1 class="text-white tvText">Televizyonunuzda izleyebilirsiniz.</h1>
                                                    <h4 class="text-white mt-5 tvText2">Akıllı TV, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray oynatıcılar ve daha fazlasında seyredin.</h4>
                                        </div>
                        </div>  
                    
                      <div class="col-md-5  gifYap   tabletMain   "> 
                                <img src="../img/tv.png" class=" device  img-fluid p-0" >
                                <img src="../img/tv.gif" class=" p-0 position-absolute gif" >
                  </div>                
              </div>



         <div class="row tvPanel"  style="background-color:black;">

                <div class="col-12 col-md-6  col-lg-6 d-flex justify-content-center align-items-center  px-5 py-5 "> 
                                <img src="../img/mobile.jpg" class="  w-100 img-fluid p-0 phoneİmg" >
                </div>

                   <div class="col-12 col-md-6  col-lg-6   d-flex  flex-column  px-5 py-5  justify-content-center  align-items-start mobilePanel">
                                        <div class="col-12 col-md-12   d-flex flex-column  justify-content-center ml-5 ">
                                                    <h1 class="text-white  mobileTvText ">Çevrimdışı izlemek için içerikleri indirin.</h1>
                                                    <h4 class="text-white  mobileTvText2 mt-5 ">En sevdiğiniz içerikleri kolayca kaydedin ve her zaman izleyecek bir şeyleriniz olsun.</h4>
                                        </div>
                        </div>  
              </div>
      </div>
      

      <div class="container-fluid ">
                   <div class="row tvPanel"  style="background-color:black;">
                <div class=" col-12 col-md-6    d-flex   flex-column justify-content-center  align-items-center mt-5">
                                        <div class="col-md-12 col-lg-6   d-flex flex-column justify-content-around align-items-end  ">
                                                    <h1 class="text-white tvText">İstediğiniz her yerde izleyin.</h1>
                                                        <h4 class="text-white mt-5 mobilePriceText ">Ekstra ücret ödemeden telefonda, tablette, bilgisayarda, televizyonda sınırsız film ve dizi izleyin</h4>
                                        </div>
                        </div>   
                     
                  <div class="col-md-5 col-lg-6  gifYap2 mt-5  d-flex justify-content-start align-items-center   "> 
                                <img src="../img/device.png" class=" device  img-fluid p-0" >
                                <img src="../img/tv.gif" class=" p-0 position-absolute gif2" >
                  </div>
              </div>
      </div>

            <div class="container-fluid  ">
                <div class="row px-5 py-5 tvPanel "  style="background-color:black;">
                        <div class="col-12 col-md-6  col-lg-6 d-flex justify-content-center align-items-center"> 
                                        <img src="../img/child.png" class=" img-fluid " >
                        </div>

                            <div class="col-12  col-md-6 col-lg-6 d-flex  flex-column  px-5 py-5 justify-content-center align-items-center childComponent">
                                        <div class="col-12  col-md-12 col-lg-9  d-flex flex-column  justify-content-end">
                                                    <h3 class="text-white tvText">Çocuklarınız için profiller oluşturun..</h3>
                                                  <h4 class="text-white mt-3 childText">Üyeliğinize dâhil olan bu ücretsiz deneyim sayesinde çocuklarınız, sadece onlara özel bir alanda en sevdikleri karakterlerle maceralara atılabilir</h4>
                                        </div>
                        </div> 
              </div>
      </div>

        <div class="container-fluid tvPanel" style="background-color:black; overflow:hidden;">
                <div class="row py-5 ">
                        <div class="col-md-12 text-center " style="background-color:black;"><h1 class="text-white">Sıkça Sorulan Sorular</h1></div>
                </div>

                   <div class="row d-flex justify-content-center "   >
                        
                                <div  class="col-md-7  d-flex justify-content-between align-items-center" style="background-color:#303030">
                                                <h3 class="text-white contactPanel">Netflix Nedir ?</h3>
                                                <p><i class="fa-solid fa-plus fa-3x text-white" @click="ContactComponent.whatİsNetflix = !ContactComponent.whatİsNetflix" ></i></p>
                                </div>

                       <transition mode="out-in" enter-class="" enter-active-class="animate__animated animate__heartBeat" leave-class="" leave-active-class=" animate__animated animate__bounceOutRight" type="animation">
                        <div class="col-md-12 col-lg-7  px-5 py-5 mt-1 " v-if="ContactComponent.whatİsNetflix" style="background-color:#303030" >
                                <h4  class="text-white">Netflix; internet bağlantılı binlerce cihazda ödüllü diziler, filmler, animeler, belgeseller ve daha fazlasını içeren geniş bir arşiv sunan bir yayın hizmetidir. <br>
                                  tek bir reklam olmadan, istediğiniz kadar, istediğiniz zaman izleyebilirsiniz - hepsi aylık düşük bir ücret karşılığında. Her zaman keşfedilecek yeni bir şeyler var, üstelik her hafta yeni diziler ve filmler ekleniyor!
                               </h4>
                        </div>
                        </transition>  

                </div>


                   <div class="row d-flex justify-content-center mt-3 "   >
                        
                                <div  class="col-md-7  d-flex justify-content-between align-items-center" style="background-color:#303030">
                                                <h3 class="text-white contactPanel">Netflixin Maliyeti Nedir ?</h3>
                                                <p><i class="fa-solid fa-plus fa-3x text-white" @click="ContactComponent.netflixPrice = !ContactComponent.netflixPrice" ></i></p>
                                </div>

                       <transition mode="out-in" enter-class="" enter-active-class="animate__animated animate__heartBeat" leave-class="" leave-active-class=" animate__animated animate__bounceOutRight" type="animation">
                        <div class="col-md-12 col-lg-7  px-5 py-5 mt-1 " v-if="ContactComponent.netflixPrice" style="background-color:#303030" >
                                <h4  class="text-white">Netflix'i akıllı telefonunuz, tabletiniz, Akıllı TV'niz, dizüstü bilgisayarınız veya yayın cihazınızda sabit bir aylık ücretle izleyin. Aylık plan ücretleri 37,99 TL ile 77,99 TL arasında değişmektedir. Ekstra maliyet yok, sözleşme yok.
                               </h4>
                        </div>
                        </transition>  
                        
                </div>

                           <div class="row d-flex justify-content-center mt-3"   >
                        
                                <div  class="col-md-7  d-flex justify-content-between align-items-center" style="background-color:#303030">
                                                <h3 class="text-white contactPanel">Nerede İzleyebilirim?</h3>
                                                <p><i class="fa-solid fa-plus fa-3x text-white" @click="ContactComponent.WhereCanIWatch = !ContactComponent.WhereCanIWatch" ></i></p>
                                </div>

                       <transition mode="out-in" enter-class="" enter-active-class="animate__animated animate__heartBeat" leave-class="" leave-active-class=" animate__animated animate__bounceOutRight" type="animation">
                        <div class="col-md-12 col-lg-7  px-5 py-5 mt-1 " v-if="ContactComponent.WhereCanIWatch" style="background-color:#303030" >
                                <h4  class="text-white">İstediğiniz yerde, istediğiniz zaman izleyin. Bilgisayarınızda netflix.com adresinden veya akıllı TV'ler, akıllı telefonlar, tabletler, medya oynatıcılar ve oyun konsolları dahil Netflix uygulamasını sunan, internet bağlantılı herhangi bir cihazda anında izlemek için Netflix hesabınızla oturum açın.
                                Favori içeriklerinizi iOS, Android veya Windows 10 uygulamasıyla da indirebilirsiniz. Seyahatteyken ve internet bağlantısı olmadan izlemek için indirilenleri kullanın. Netflix'i her yere beraberinizde götürün.
                               </h4>
                        </div>
                        </transition>  
                        
                </div>

                           <div class="row d-flex justify-content-center mt-3"   >
                        
                                <div  class="col-md-7  d-flex justify-content-between align-items-center" style="background-color:#303030">
                                                <h3 class="text-white contactPanel">Nasıl İptal Edebilirim ?</h3>
                                                <p><i class="fa-solid fa-plus fa-3x text-white" @click="ContactComponent.howCaniCancel = !ContactComponent.howCaniCancel" ></i></p>
                                </div>

                       <transition mode="out-in" enter-class="" enter-active-class="animate__animated animate__heartBeat" leave-class="" leave-active-class=" animate__animated animate__bounceOutRight" type="animation">
                        <div class="col-md-12 col-lg-7  px-5 py-5 mt-1 " v-if="ContactComponent.howCaniCancel" style="background-color:#303030" >
                                <h4  class="text-white">Netflix esnektir. Sinir bozucu hiçbir sözleşme ve taahhüt yoktur. Hesabınızı çevrimiçi olarak iki tıklamayla kolayca iptal edebilirsiniz. İptal ücreti yoktur - hesabınızı istediğiniz zaman başlatın veya durdurun.
                               </h4>
                        </div>
                        </transition>  
                        
                </div>

                           <div class="row d-flex justify-content-center mt-3"   >
                        
                                <div  class="col-md-7  d-flex justify-content-between align-items-center" style="background-color:#303030">
                                                <h3 class="text-white contactPanel">Netflix'te Ne İzleyebilirim?</h3>
                                                <p><i class="fa-solid fa-plus fa-3x text-white" @click="ContactComponent.whatCanIWatch = !ContactComponent.whatCanIWatch" ></i></p>
                                </div>

                       <transition mode="out-in" enter-class="" enter-active-class="animate__animated animate__heartBeat" leave-class="" leave-active-class=" animate__animated animate__bounceOutRight" type="animation">
                        <div class="col-md-12 col-lg-7  px-5 py-5 mt-1 " v-if="ContactComponent.whatCanIWatch" style="background-color:#303030" >
                                <h4  class="text-white">Netflix, uzun metrajlı filmler, belgeseller, diziler ve programlar, anime, ödüllü Netflix orijinal içerikleri ve daha fazlasından oluşan kapsamlı bir kütüphaneye sahiptir. İstediğiniz her zaman, istediğiniz kadar çok şey izleyin
                               </h4>
                        </div>
                        </transition>  
                        
                </div>

                           <div class="row d-flex justify-content-center mt-3"   >
                        
                                <div  class="col-md-7    mt-1 d-flex justify-content-between align-items-center" style="background-color:#303030">
                                                <h3 class="text-white contactPanel">Netflixin Çocuklar İçin Uygun Mudur ?</h3>
                                                <p><i class="fa-solid fa-plus fa-3x text-white" @click="ContactComponent.adulthood = !ContactComponent.adulthood" ></i></p>
                                </div>

                       <transition mode="out-in" enter-class="" enter-active-class="animate__animated animate__heartBeat" leave-class="" leave-active-class=" animate__animated animate__bounceOutRight" type="animation">
                        <div class="col-md-12 col-lg-7 px-5 py-5 mt-1   " v-if="ContactComponent.adulthood" style="background-color:#303030" >
                                <h4  class="text-white">Üyeliğinize dâhil olan Netflix Çocuk deneyimi, çocukların ailece izlenebilecek dizi ve filmleri kendilerine özel bir alanda izlemelerini sağlarken kontrolü ebeveynlere verir.

                                Çocuk profillerinde bulunan PIN korumalı ebeveyn kontrolleri sayesinde, çocukların izleyebileceği içeriklerin yetişkinlik düzeylerini kısıtlayabilir ve onların görmesini istemediğiniz belirli içerikleri engelleyebilirsiniz.
                               </h4>
                        </div>
                        </transition>  
                        
                </div>



        </div>
<footerPage/>   



                     

</template>

<script>

import {mapGetters} from "vuex"
import footerPage from "../components/footerPage.vue"
export default {
computed:{
        ...mapGetters(['getUserContact'])
},
created(){
        console.log(this.getUserContact)
},
components:{
        footerPage
},
    
        data(){
                return{
                        ContactComponent:{
                                whatİsNetflix : false,
                                netflixPrice : false,
                                WhereCanIWatch : false,
                                howCaniCancel : false,
                                whatCanIWatch : false,
                                adulthood : false
                        },
                    

                       
                }
},
    
methods:{
        start(){
                this.$router.push({name:'regPage'})
        }
}
}
</script>

<style scoped>


.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}




.gifYap{
      
        display: flex; 
        justify-content: center !important;
        align-items: center !important;
}.gif{
        margin-bottom: 10px !important;
        max-width: 400px !important;
}

.gifYap2{
      
        display: flex; 
        justify-content: center !important;
        align-items: center !important;
}
.gif2{
        margin-bottom: 150px !important;
        width:320px;
}

.device{
        z-index: 999 !important;
        
}
.mainPanel{
        background-image: url(../img/1.jpeg);
        background-position:bottom ;
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;
        
        height: 100vh;
}
.icerik{
            border-bottom: 15px solid #222;
}
.tvPanel{
          border-bottom: 15px solid #222;
          padding: 0px !important;
}

.icerik::before{
        content: "" !important;
        position: absolute !important;
        background-color: rgb(14, 12, 12) !important;
        width: 100% !important;
        height: 100% !important;
        z-index: 1 !important;
        opacity: 0.7;
}
.contentMain{
        z-index: 1 !important;
}
.mainText{
        font-size: 8vh !important;
        font-family: "poppins";
}

/************************************************************************************************************** ,*/




@media only screen and (min-width:360px) and (max-width:375px){
.gifYap2{
        display: flex; 
        justify-content: center !important;
        align-items: center !important;
}.gif2{
        margin-bottom: 100px !important;
        width:170px !important;
}

.gifYap{
      
        display: flex; 
        justify-content: center !important;
        align-items: center !important;
}

.gif{
        margin-bottom: 10px !important;
        width:230px !important;
}
}
/*********************************************************************************************************************/


@media only screen and (max-width: 600px) {
.container-fluid{
        overflow: hidden;
}
.mainPanel{
        background-image: url(../img/poster.jpg);
        background-position:center ;
        background-repeat: no-repeat;
        background-size: cover;
        height: 65vh;
}
.icerik::before{
        content: "" !important;
        position: absolute !important;
        background-color: rgb(14, 12, 12) !important;
        width: 100% !important;
        height: 70% !important;
        z-index: 1 !important;
        opacity: 0.7;
}
.mainText{
        font-size: 4.5vh !important;
}
.subText{
        font-size: 2.5vh !important;
}
.logo{
        width:80% !important; 
}
.tvPanelOne{
        padding: 0px !important;
}
.tvText{
        font-size: 4vh !important;
        text-align: center !important;
         font-family: "poppins";        
}
.tvText2{
           font-size: 3vh !important;
         text-align: center !important;
        padding: 0px !important;
       
        margin-top: 20px !important;
}

.gifYap{
      
        display: flex; 
        justify-content: center !important;
        align-items: center !important;
}

.gif{
        margin-bottom: 10px !important;
        width:280px;
}

.phoneİmg{
        width: 100% !important;
}

.phoneTextCont{
        margin:0px !important;
}
.mobilePanel{
        display: flex !important;
        flex-direction: column !important;
        justify-content: space-around !important;
        align-items: end !important;
}
.mobileTvText{
        font-family: "poppins";
        font-size: 3vh !important;
        text-align: center !important;
}

.mobileTvText2{
        font-size: 2vh;
        text-align: center !important;
}
.gifYap2{
        display: flex; 
        justify-content: center !important;
        align-items: center !important;
}.gif2{
        margin-bottom: 100px !important;
        width:220px;
}

.mobilePriceText{
        font-size: 2.2vh !important;
        text-align: center;
}


.childText{
        font-size:2.4vh !important;
        text-align: center;
}
.childComponent{
        padding: 0vh !important;
}

}

/*********************************************************************************************************************/



 
@media (min-width:736px) and (max-width:1031px){
.tabletMain{
        margin-top: 0px !important;
}

.tvText{
        text-align: center !important;
}
.tvText2{
        text-align: center !important;
        margin-top: 5vh !important;
}


.gif{
     
  width: 60% !important;
}
.device{
        width: 75% !important;
}

}





@media (min-width:667px) and (max-width:812px){
.tabletMain{
        margin-top: 0px !important;
}

.tvText{
        text-align: left !important;
      
}
.tvText2{
        text-align: left !important;
        margin-top: 5vh !important;
        font-size: 4vh !important;
}

.tvPanelTwo{
        width: 100% !important;
        margin-top: 0px !important;
}
.gif{
     
  width: 65% !important;
}
.device{
        width: 100% !important;
}

}



@media (min-width: 1280px) and (max-width: 1440px) {
.tvText{
        font-size: 5.2vh !important;
}

.gif{
        margin-bottom: 10px !important;
        max-width: 390px !important;
}

.gifYap2{
        display: flex; 
        justify-content: center !important;
        align-items: center !important;
}.gif2{
        margin-bottom: 100px !important;
        width:320px !important;
}
}



@media (min-width: 1700px)  {
        .tvText{
        font-size: 5.2vh !important;
}

.gif{
        margin-bottom: 10px !important;
        max-width: 470px !important;
}

.gifYap2{
        display: flex; 
        justify-content: center !important;
        align-items: center !important;
}.gif2{
        margin-bottom: 100px !important;
        width:400px !important;
}
}

</style>

