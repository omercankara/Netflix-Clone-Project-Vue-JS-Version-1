import { createStore } from 'vuex'

export default createStore({
  state: {
     user:null,
     saltKey:"bookLike123!456" 
  },
  getters: {
       _isAuthenticated : state => state.user != null, //Giriş yapılıp yapılmadığını getir

       _getCurrentUser(state){
                const user  =state.user
                delete user?.password
                return user //şifresiz olarak user bilgisini getir
       },
       _saltKey : state => state.saltKey
  },    
  mutations: {  
     setUser(state,user){
                state.user = user
     }
  },
  actions: {
  },
  modules: {
  }
})
